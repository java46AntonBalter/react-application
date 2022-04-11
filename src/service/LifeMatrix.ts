import lifeGameConfig from "../config/lifeGameConfig.json"

export default class LifeMatrix{
    constructor(private _numbers: number[][]){

    }
    get numbers(){
        return this._numbers;
    }
    nextStep(): number[][]{
        //TODO write implementation of the life game algorythm
        //reminder: first create copy for updating cells based on the previous matrix
        let originalState: number[][]  = this._numbers;
        const nextState: number[][] = originalState.map((r, index) => {
            const newRow: number[] = [];
            r.forEach((cell, i) => {
                let sum: number = 0;
                sum = (i > 0) ? sum + originalState[index][i-1] : sum;  
                sum = (i > 0) && (index > 0) ? sum + originalState[index-1][i-1] : sum;
                sum = (index > 0) ? sum + originalState[index-1][i] : sum;
                sum = (index > 0) && (i < (lifeGameConfig.dimension - 1)) ? sum + originalState[index-1][i+1] : sum;
                sum = (i < (lifeGameConfig.dimension - 1)) ? sum + originalState[index][i+1] : sum;
                sum = (index < (lifeGameConfig.dimension - 1)) && (i < (lifeGameConfig.dimension - 1)) ? sum + originalState[index+1][i+1] : sum;
                sum = (index < (lifeGameConfig.dimension - 1)) ? sum + originalState[index+1][i] : sum;
                sum = (index < (lifeGameConfig.dimension - 1)) && (i > 0) ? sum + originalState[index+1][i-1] : sum;
             
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
}