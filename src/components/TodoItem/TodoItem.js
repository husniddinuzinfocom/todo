import React from "react";
import classes from "./TodoItem.module.css";

export default function TodoItem({ title, id, isCompleted }) {
    return (
        <div className={isCompleted ? `${classes.task} ${classes.active}` : classes.task}>
            <div className={classes.content}>
                <p className={classes.text}>{title}</p>
            </div>
            <div className={classes.actions}>
                <button className={classes.edit} >
                    Completed
                </button>
                <button className={classes.edit} >
                    Edit
                </button>
                <button className={classes.delete}>
                    Delete
                </button>
            </div>
        </div>
    );
}
