import React, { useState, useEffect } from "react";
import { DraggableCore } from "react-draggable";

import axios from "axios";

import { getTodaysDate } from "../../../services/getDate";

import "./styles.css";

export const DailyQuote = () => {
    const [ quote, setQuote ] = useState(null);
    const [ author, setAuthor ] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await axios.get("https://quotes.rest/qod");

                const { quote, author } = response.data.contents.quotes[0];

                setQuote(quote);
                setAuthor(author);
            } catch (error) {
                console.error("Error fetching quote:", error);
            }
        };

        fetchQuote();

        const interval = setInterval(fetchQuote, 24 * 60 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <DraggableCore>
            <div className="quote-container">
                <h4>Daily Motivation | {getTodaysDate()}</h4>
                <blockquote>
                    <p>"{quote}"</p>
                    <p>- {author}</p>
                </blockquote>
            </div>
        </DraggableCore>
    );
};