var front = '$user' + ' ';
var inp = document.getElementById('userInput');
var cons = document.getElementById('console');

function processInput() {
    print(inp.value);



    inp.value = '';
    print('<br><br>' + front);
}

let print = (val) => cons.innerHTML += val;

print(front);