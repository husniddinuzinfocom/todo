import React from 'react';
import classes from "./TodoForm.module.css";

export default function TodoForm({setTodoList}) {
    return (
        <header>
            <h1>ToDo List</h1>
            <form className={classes.new_task_form}>
                <input type="text" className={classes.new_task_input} placeholder="What do you have planned?" />
                <input type="submit" className={classes.new_task_submit} value="Add todo" />
            </form>
        </header>
    )
}
