"use client";

import { useState, useEffect } from "react";

export default function Todo() {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/todos/1'
                );
                const result = await response.json();
                setTodo(result);
            } catch (error) {
                console.error('Error fetching todo:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run once when the component mounts

    return (
        <div>
            <h1>{todo.title}</h1>
        </div>
    );
}
