import React from "react";
import clsx from "clsx";

export default function Item({ text, onDelete }) {
    return (
        <article
            // className='border-white/5 rounded flex justify-between items-center p-2'
            className={clsx(
                "border border-white/5 rounded",
                "flex justify-between items-center",
                "p-2",
                { "bg-red-500": text === "lavar" } // condicional para cambiar el color de un item
            )}
        >
            <span>{text}</span>
            <span
                // className="bg-gray-600/80 rounded p-2 cursor-pointer hover:bg-gray-600/60"
                className={clsx('bg-gray-600/80 hover:bg-gray-600/60', 'rounded p-2 cursor-pointer')}
                onClick={onDelete}
            >
                Done
            </span>
        </article>
    );
}
