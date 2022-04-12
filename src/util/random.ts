export function getRandomNumber(min: number, max:number):number {
    if (min > max){
        [min, max] = [max, min];
    }
    return min + Math.round(Math.random() * (max - min))
}
export function getRandomMatrix(columns: number, rows: number, min: number, max: number): number[][] {
    const res: number[][] = new Array(rows).fill(0).map(row => new Array(columns).fill(1).map(column => getRandomNumber(min, max)));
    return res;
}
