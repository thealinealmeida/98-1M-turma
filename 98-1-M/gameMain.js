const p1Name = localStorage.getItem("p1Name");
const p2Name = localStorage.getItem("p2Name");
let p1Score = 0;
let p2Score = 0;
let questionCount = 0;
let word;

const input = document.getElementById("input");
const output = document.getElementById("output");
output.style.display = "none";

document.getElementById("p1Name").innerHTML = p1Name + ": ";
document.getElementById("p2Name").innerHTML = p2Name + ": ";

writeScore();

writeQA();

function writeScore() {
   //passo 1 
}

function writeQA() {
    //passo 2 
}

function send() {
    // passo 3

    if (wordLength >= 5) {
        const charIndex = new Set();
        // escolhe 3 index aleatorios:
        while (charIndex.size < 3) {
            const randomIndex = Math.floor(Math.random() * wordLength);
            // console.log(randomIndex);
            charIndex.add(randomIndex);
        }
        console.log(charIndex);

        // substitui as letras nos 3 index sorteados por "_"
        for (const index of charIndex.values()){
            // console.log("Index: " + index);
            // const char = word[index];
            // console.log("Char: " + char);
            wordReplace = replaceAt(wordReplace, index, "_");
            console.log(wordReplace);
        }

        wordReplace = wordReplace.split('').join(' ');

        const wordDisplay = "<h4 id='wordDisplay' class='display-4'>" + wordReplace + "</h4>";
        const inputAnswer = "<label class='form-label'>Answer: </label>" + 
            "<input id='answer' type='text' class='form-control' placeholder='your answer'>"
        const button = "<button onclick='check()' class='btn btn-warning col-6 mx-auto'>Check</button>"
        const outputHTML = wordDisplay + inputAnswer + button;

        output.innerHTML = outputHTML;
        output.style.display = "grid";

        wordInput.value = "";
        input.style.display = "none";
    }
}

//
function replaceAt(str, index, replacement) {
    let replaced = 
        str.substring(0, index) + 
        replacement + 
        str.substring(index + 1);
    return replaced;
}


