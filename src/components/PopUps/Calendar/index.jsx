import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ResizableBox } from "react-resizable";

import "react-resizable/css/styles.css";

const ITEM_TYPE = "TIME_BLOCK";

const timeToTop = (time) => {
    const startHour = 8;
    const minutesPerPixel = 2;
    return (time - startHour) * 60 * minutesPerPixel;
};

const TimeBlock = ({ block, onUpdateBlock, onMoveBlock }) => {
    const [ { isDragging }, drag ] = useDrag(() => ({
        type: ITEM_TYPE,
        item: { id: block.id, type: ITEM_TYPE },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const [ , drop ] = useDrop(() => ({
        accept: ITEM_TYPE,
        drop: (item) => onMoveBlock(item.id, block.id),
    }));

    const handleChange = (e) => {
        onUpdateBlock(block.id, { content: e.target.value });
    };

    return (
        <div
            ref={ (node) => drag(drop(node)) }
            style={{
                position: "absolute",
                top: timeToTop(block.startTime),
                left: 0,
                width: "100%",
                height: block.duration * 2,
                backgroundColor: "#4caf50",
                padding: "5px",
                borderRadius: "5px",
                boxSizing: "border-box",
                cursor: isDragging ? "grabbing" : "grab",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <ResizableBox
                width="100%"
                height={block.duration * 2}
                minConstraints={[100, 20]}
                axis="y"
                resizeHandles={["s", "n"]}
                onResizeStop={(e, data) => {
                    const newDuration = data.size.height / 2;
                    onUpdateBlock(block.id, { duration: newDuration });
                }}
            >
                <textarea
                    value={ block.content }
                    onChange={ handleChange }
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        backgroundColor: "transparent",
                        resize: "none",
                        color: "white",
                        fontSize: "14px",
                        padding: "5px",
                    }}
                />
            </ResizableBox>
        </div>
    );
};

const Calendar = () => {
    const [ blocks, setBlocks ] = useState([
        { id: 1, startTime: 9, duration: 2, content: "Meeting" },
        { id: 2, startTime: 12, duration: 1.5, content: "Lunch" },
        { id: 3, startTime: 14, duration: 1, content: "Development Work" },
    ]);

    const handleUpdateBlock = (id, updates) => {
        setBlocks((prevBlocks) =>
            prevBlocks.map((block) =>
                block.id === id ? { ...block, ...updates } : block
            )
        );
    };

    const handleMoveBlock = (draggedId, targetId) => {
        const draggedBlock = blocks.find((block) => block.id === draggedId);
        const targetBlock = blocks.find((block) => block.id === targetId);

        if (draggedBlock && targetBlock) {
            const newBlocks = blocks.map((block) => {
                if (block.id === draggedId) {
                    return { ...block, startTime: targetBlock.startTime };
                }

                return block;
            });

            setBlocks(newBlocks);
        }
    };

    return (
        <div
            style={{
                position: "absolute",
                width: "400px",
                height: "600px",
                top: "100px",
                backgroundColor: "#f1f1f1",
                border: "1px solid #ddd",
                zIndex: '1000'
            }}
        >
            {
                blocks.map((block) => (
                    <TimeBlock
                        key={ block.id }
                        block={ block }
                        onUpdateBlock={ handleUpdateBlock }
                        onMoveBlock={ handleMoveBlock }
                    />
                ))
            }
        </div>
    );
};

export default Calendar;