function getRandomOrder(arr) {
    let newArr = [];

    while (arr.length > 0) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        newArr.push(arr[randomIndex]);
        arr.splice(randomIndex, 1);
    }

    return newArr;
}

const daysOfWeek = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];
let resultArray = getRandomOrder(daysOfWeek);

console.log(resultArray);