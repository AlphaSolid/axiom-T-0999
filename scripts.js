var front = 'user $' + ' ';
var inp = document.getElementById('userInput');
var cons = document.getElementById('console');

let cmdDict = {
    help: 'List of valid commands (this)',
    ls: 'List of all existing files',
    open: 'Open an existing file'
};

let fileList = ['file.txt'];

function processInput() {
    print(inp.value + '<br>');

    let cmd = inp.value.split(' ');
    if (cmd[0] == 'help') {
        for (const key of Object.keys(cmdDict)) {
            print(key + ': ' + cmdDict[key] + '<br>');
        };
    } else if (cmd[0] == 'ls') {
        for (const files of fileList) {
            print(files + '<br>');
        };
    } else if (cmd[0] == 'open') {
        openFile(cmd[1]);
    } else {
        print('No such command. Try \'help\' to list all valid commands.');
    }

    print('<br>');
    print('<br>' + front);
    inp.value = '';

    function openFile(file) {
        if (file == 'file.txt') {
            print('PLACEHOLDER 503');
        } else {
            print('No such file. Please ensure that there are no additional characters in your command.');
        }
    }
}

let print = (val) => cons.innerHTML += val;

print(front);