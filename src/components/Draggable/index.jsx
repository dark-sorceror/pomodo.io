import React from "react";

export var Draggable = React.createElement({
    getDefaultProps: function () {
        return {
            initialPos: { x: 0, y: 0 },
        };
    },

    getInitialState: function () {
        return {
            pos: this.props.initialPos,
            dragging: false,
            rel: null,
        };
    },

    componentDidUpdate: function (props, state) {
        if (this.state.dragging && !state.dragging) {
            document.addEventListener("mousemove", this.onMouseMove);
            document.addEventListener("mouseup", this.onMouseUp);
        } else if (!this.state.dragging && state.dragging) {
            document.removeEventListener("mousemove", this.onMouseMove);
            document.removeEventListener("mouseup", this.onMouseUp);
        }
    },

    onMouseDown: function (e) {
        if (e.button !== 0) return;

        var pos = $(this.getDOMNode()).offset();

        this.setState({
            dragging: true,
            rel: {
                x: e.pageX - pos.left,
                y: e.pageY - pos.top,
            },
        });

        e.stopPropagation();
        e.preventDefault();
    },

    onMouseUp: function (e) {
        this.setState({ dragging: false });

        e.stopPropagation();
        e.preventDefault();
    },

    onMouseMove: function (e) {
        if (!this.state.dragging) return;

        this.setState({
            pos: {
                x: e.pageX - this.state.rel.x,
                y: e.pageY - this.state.rel.y,
            },
        });

        e.stopPropagation();
        e.preventDefault();
    },
    
    render: function () {
        return this.transferPropsTo(
            React.DOM.div(
                {
                    onMouseDown: this.onMouseDown,
                    style: {
                        left: this.state.pos.x + "px",
                        top: this.state.pos.y + "px",
                    },
                },
                this.props.children
            )
        );
    },
});