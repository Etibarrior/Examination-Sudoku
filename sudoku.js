
// Общая функция возвращающая логическое "И" 3х результатов проверки.
// Проверка строки, проверка столбца, проверка квадрата 3х3
function validSolution(array){
    return calculate(array) && calculate(revers(array)) && calculate(redistributionArray(array))
}

// Функция изменяющая все строки на столбцы, а столбцы на строки
function revers(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            newArray = array[i][j]
            array[i][j] = array[j][i]
            array[j][i] = newArray
        }
    }
    return array
}

// Функция превращающая все квадраты 3х3 в строки длиной 9
function redistributionArray(array) {
    array = array.flat()
    const arr = []
    for (let k = 0; k <= 6; k += 3) {
        for (let i = k; i < array.length; i +=9){
            for (let j = 0; j <3; j++) {
                arr.push(array[i+j])
            }
        }
    }

    const arrayFinally = Array(9).fill().map(() => Array(9))

    for (let i = 0; i < 9; i ++) {
        for (let j = 0; j < 9; j++) {
            arrayFinally[i][j] = Number(arr.splice(0,1).join())
        }
    }
    return arrayFinally
}

// Функция проверяющая наличие всех чисел от 1 до 9 в строках масива
function calculate(array) {
    for (let key of array) {
        for (let i = 1; i < key.length; i++) {
            if (key.indexOf(i) === -1) {
                return false
            }
        }
    }
    return true
}

const x = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]

const result = validSolution(x)
console.log(result)