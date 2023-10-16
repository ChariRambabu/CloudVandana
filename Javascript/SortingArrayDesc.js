function SortDescending(InputArray) {
    let LengthOfArray = InputArray.length;

    for (let i = 0; i < LengthOfArray-1; i++) {
        for (let j = 0; j < LengthOfArray-i-1; j++) {
            if (InputArray[j] < InputArray[j+1]) {
                let temp = InputArray[j];
                InputArray[j] = InputArray[j+1];
                InputArray[j+1] = temp;
            }
        }
    }
    return InputArray;
}
const ArrayElements= [12, 43, 9, 5, 65, 3];
const sortedArray = SortDescending(ArrayElements);

console.log(sortedArray);
