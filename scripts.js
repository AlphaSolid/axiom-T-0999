var front = '$user' + ' ';
var inp = document.getElementById('userInput');
var cons = document.getElementById('console');

let cmdList = {
    help: 'List of valid commands (this)',
    ls: 'List of all existing files'
};

function processInput() {
    print(inp.value + '<br>');

    let cmd = inp.value.split(' ')[0];
    if (cmd == 'help') {
        for (const key of Object.keys(cmdList)) {
            print(key + ': ' + cmdList[key] + '<br>');
        };
    } else if (cmd == 'ls') {
        print('PLACEHOLDER 501');
    } else {
        print('No such command. Try \'help\' to list all valid commands.');
    }

    print('<br>');
    print('<br>' + front);
    inp.value = '';
}

let print = (val) => cons.innerHTML += val;

print(front);