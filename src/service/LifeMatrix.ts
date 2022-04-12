import lifeGameConfig from "../config/lifeGameConfig.json"

export default class LifeMatrix {
    constructor(private _numbers: number[][]) {

    }
    get numbers() {
        return this._numbers;
    }
    nextStep(): number[][] {
        //TODO write implementation of the life game algorythm
        //reminder: first create copy for updating cells based on the previous matrix
        let originalState: number[][] = this._numbers;
        const nextState: number[][] = originalState.map((r, rowIndex) => {
            const newRow: number[] = [];
            r.forEach((cell, columnIndex) => {
                let sum: number = this.neighboursSum(originalState, columnIndex, rowIndex);

                if (cell === 1 && sum < 2) {
                    cell = 0;
                } else if (cell === 1 && sum > 1 && sum < 4) {
                    cell = 1;
                } else if (cell === 1 && sum > 3) {
                    cell = 0;
                } else if (cell === 0 && sum === 3) {
                    cell = 1;
                }


                newRow.push(cell);
            })
            return newRow;
        });
        this._numbers = nextState;
        return nextState;
    }

    private neighboursSum(originalState: number[][], columnIndex: number, rowIndex: number) {
        let sum: number = 0;
        sum = (columnIndex > 0) ? sum + originalState[rowIndex][columnIndex - 1] : sum;
        sum = (columnIndex > 0) && (rowIndex > 0) ? sum + originalState[rowIndex - 1][columnIndex - 1] : sum;
        sum = (rowIndex > 0) ? sum + originalState[rowIndex - 1][columnIndex] : sum;
        sum = (rowIndex > 0) && (columnIndex < (lifeGameConfig.dimension - 1)) ? sum + originalState[rowIndex - 1][columnIndex + 1] : sum;
        sum = (columnIndex < (lifeGameConfig.dimension - 1)) ? sum + originalState[rowIndex][columnIndex + 1] : sum;
        sum = (rowIndex < (lifeGameConfig.dimension - 1)) && (columnIndex < (lifeGameConfig.dimension - 1)) ? sum + originalState[rowIndex + 1][columnIndex + 1] : sum;
        sum = (rowIndex < (lifeGameConfig.dimension - 1)) ? sum + originalState[rowIndex + 1][columnIndex] : sum;
        sum = (rowIndex < (lifeGameConfig.dimension - 1)) && (columnIndex > 0) ? sum + originalState[rowIndex + 1][columnIndex - 1] : sum;
        return sum;
    }
}