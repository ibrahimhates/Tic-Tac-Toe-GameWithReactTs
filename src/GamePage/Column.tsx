import Row from "./Row";

type Props = {
    state: boolean;
    setState: (state: boolean) => void;
    gameStates: string[][];
    col: number;
    isGameOver: boolean;
};

const Column = ({ state, setState, gameStates, col, isGameOver }: Props) => {
    return (
        <div key={crypto.randomUUID()} className="d-flex gap-2 mb-2">
            {Array.from({ length: 3 }, (_, row) => {
                return (
                    <Row
                        isGameOver={isGameOver}
                        row={row}
                        col={col}
                        state={state}
                        setState={setState}
                        gameStates={gameStates}
                    />
                );
            })}
        </div>
    );
};

export default Column;
