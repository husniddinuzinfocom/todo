import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import classes from "./Lists.module.css";

export default function Lists({ todoList }) {
    const todoItem = todoList.length ? todoList.map((item) => {
                            return <TodoItem 
                                        title={item.title} 
                                        id={item.id} 
                                        isCompleted={item.isCompleted} 
                                        key={item.id} />
                    }) : "";
    return (
        <main>
            <section className={classes.task_list}>
                {todoItem}
            </section>
        </main>
    )
}
