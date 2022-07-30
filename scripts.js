var front;
const inp = document.getElementById('userInput');
const cons = document.getElementById('console');

var dir = '';
let arr = [];

let cmdDict = {
    help: 'List of valid commands (this)',
    cd: 'Change directory',
    ls: 'List of all existing files',
    open: 'Open an existing file'
};

let fileList = ['folder/', 'file.txt', 'count.exe', 'folder/testItem', 'another/', 'another/itemTest'];

function processInput() {
    if (inp.value != '') {
        print(inp.value);

        let cmd = inp.value.split(' ');
        if (cmd[0] == 'help') {
            for (const key of Object.keys(cmdDict)) {
                print(key + ': ' + cmdDict[key]);
            };
        } else if (cmd[0] == 'ls') {
            arr = fileList.filter((elem) => {
                return elem.includes(dir) && elem != dir;
            });
            for (const i of arr) {
                print(i);
            };
        } else if (cmd[0] == 'open') {
            openFile(cmd[1]);
        } else if (cmd[0] == 'cd') {
            changeDir(cmd[1]);
        } else {
            print('No such command. Try \'help\' to list all valid commands.');
        }

        front = 'user [' + dir + '] $ ';
        cons.innerHTML += '<br>' + front;
        inp.value = '';
        var objDiv = document.getElementById('screen');
        objDiv.scrollTop = objDiv.scrollHeight;

        function openFile(file) {
            if (fileList.includes(file) && !file.includes('/')) {
                print('—————————————————————————————————————————————');
                if (file == 'file.txt') {
                    print('This is a placeholder text file.');
                } else if (file == 'count.exe') {
                    for (let i = 0; i < 100; i++) {
                        print(i);
                    }

                    print('Finished counting, exiting program...');
                }
                print('—————————————————————————————————————————————');
            } else {
                print('No such file. Please ensure that there are no additional characters in your command.');
            }
        }

        function changeDir(d) {
            if (fileList.includes(dir + d) || fileList.includes(dir + d + '/')) {
                if (d.includes('/')) {
                    dir += d;
                } else {
                    dir += d + '/';
                }
            } else if (d == '..') {
                arr = dir.split('/');
                arr.pop();
                arr.pop();
                dir = arr.toString();
                dir = dir.replace(/,/g, '/');
                if (dir !== '') {
                    dir += '/';
                }
            } else {
                print('No such directory.');
            }
        }
    }
}

let print = (value) => cons.innerHTML += value + '<br>';

cons.innerHTML += 'user [] $ ';