function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function bubbleSort() 
{

    let bar = document.querySelectorAll(".bar");

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {

            bar[j].style.backgroundColor = "red";
            bar[j + 1].style.backgroundColor = "green";

            await sleep(Number(speed.value));


            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp


                bar[j].style.height = arr[j]*3+"px";
                bar[j+1].style.height = arr[j+1]*3+"px"
                bar[j].style.backgroundColor = "yellow";
            }
            // bar[j].style.backgroundColor = "yellow";
            // bar[j + 1].style.backgroundColor = "yellow";

            await sleep(Number(speed.value));

        }
         
    }
    
}

document.getElementById("bubblesort").addEventListener("click", bubbleSort)