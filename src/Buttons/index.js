import React from "react";
import "./style.css";

const Buttons = ({ tasks, HideDone, toggleHideDone, doAllTasks }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button
                    className="buttons__button"
                    onClick={toggleHideDone}
                >
                    {HideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                    onClick={doAllTasks}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);
export default Buttons;