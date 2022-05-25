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
            <select className={classes.selectFilter}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            <section className={classes.task_list}>
                {todoItem}
            </section>
        </main>
    )
}
