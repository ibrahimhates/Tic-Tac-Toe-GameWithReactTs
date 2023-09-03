import { useState } from "react";

type Props = {
    state: boolean;
    setState: (state: boolean) => void;
    gameStates: string[][];
    row: number;
    col: number;
    isGameOver: boolean;
};

const Row = ({ state, setState, gameStates, row, col, isGameOver }: Props) => {
    const changeState = () => {
        if (!gameStates[col][row] && !isGameOver) {
            gameStates[col][row] = state ? "X" : "O";
            setState(!state);
        }
    };
    return (
        <div
            key={crypto.randomUUID()}
            className={`btn btn-${
                isGameOver ? "danger" : "info"
            } text-dark d-flex justify-content-center align-items-center`}
            style={{
                width: 100,
                height: 100,
            }}
            onClick={changeState}
        >
            <span className="custom-size d-inline-block">
                {gameStates[col][row]}
            </span>
        </div>
    );
};

export default Row;
