

const removeFromArray = function (array, ...valuesToDelete) {
    for (let i = 0; i < valuesToDelete.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === valuesToDelete[i]) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
