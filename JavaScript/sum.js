function findSum() {
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
    document.getElementById("result").innerHTML = "Sum = " + (a + b);
}

function findEvenOdd(){
        let number = Number(document.getElementById("number").value);

        if (number % 2 == 0) {
            document.getElementById("resultEvenOdd").innerHTML = "Given " + (number) + " is Even.";
        } else {
            document.getElementById("resultEvenOdd").innerHTML = "Given " + (number) + " is Odd.";
        }
} 

function changeColor(){
    document.body.style.backgroundColor = "lightblue";
}

function helloWorld() {
    
    document.getElementById("helloWorld").innerHTML = "Hello World";
}
