let size = document.getElementById("sizeofbar");
let sizeValue = document.getElementById("sizeValue")

let arr = []

function newArray() {
    arr = []
    let mainBar = document.getElementById("mainBar");
    mainBar.innerHTML = "";

    let currentSiz = Number(size.value);

    sizeValue.textContent = currentSiz;

    for (let i = 0; i < currentSiz; i++) {
        let num = Math.floor(Math.random() * 100) + 1
        arr.push(num)

        //Div create 

        let bar = document.createElement("div");
        bar.classList.add("bar")
        bar.style.height = arr[i] * 3 + "px";

        mainBar.appendChild(bar)
    }



    
}

newArray();



document.getElementById("newArray").addEventListener("click", newArray)

size.addEventListener("input", newArray);

