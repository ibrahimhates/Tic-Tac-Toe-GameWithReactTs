import { useEffect, useState } from "react";
import Column from "./Column";
import "./GamePage.css";
import CheckWin from "./CheckWin";

// PascalCasing
function GamePage() {
    // jsx sozdizimi syntax
    const [state, setState] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [winner, setWinner] = useState("");

    const emptyStates = [
        [``, ``, ``],
        [``, ``, ``],
        [``, ``, ``],
    ];

    const [gameStates, setGameStates] = useState(emptyStates);

    const clearStates = () => {
        setGameStates(emptyStates);
        setState(true);
        setIsGameOver(false);
    };
    useEffect(() => {
        const w = CheckWin(gameStates);
        setWinner(w);
        if (w) setIsGameOver(true);
        isEmpty();
    });

    useEffect(() => {
        if (winner) {
            winner === "X" ? setCount1(count1 + 1) : setCount2(count2 + 1);
        }
    }, [winner]);

    const isEmpty = () => {
        const isExist = gameStates.some((a) => a.some((b) => b === ""));
        if (!isExist) {
            setIsGameOver(true);
        }
    };
    return (
        <div className="col-md-12 d-flex flex-column align-items-center">
            <div className="card">
                <div className="card-header d-flex justify-content-between bg-dark">
                    <h3 className="card-title text-secondary">
                        {"Player-1: "}
                        <span className="text-white">{count1}</span>
                    </h3>
                    <h3 className="card-title text-secondary">
                        {"Player-2: "}
                        <span className="text-white">{count2}</span>
                    </h3>
                </div>
                <div className="card-body">
                    <div className="d-grid justify-content-center">
                        {Array.from({ length: 3 }, (_, col) => {
                            return (
                                <Column
                                    isGameOver={isGameOver}
                                    gameStates={gameStates}
                                    state={state}
                                    setState={setState}
                                    key={col}
                                    col={col}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-end">
                    {isGameOver && (
                        <input
                            className="form-control text-center text-white bg-danger"
                            value={`Game Over`}
                            readOnly
                        />
                    )}
                    <button className="btn btn-primary" onClick={clearStates}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GamePage;
