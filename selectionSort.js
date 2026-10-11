function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function selectionSort() {

    let bar = document.querySelectorAll(".bar");

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min]
        arr[min] = temp
        await sleep(Number(speed.value));
    }
}

console.log(arr)

document.getElementById("selectionSort").addEventListener("click", selectionSort)