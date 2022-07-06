var front = 'user $' + ' ';
const inp = document.getElementById('userInput');
const cons = document.getElementById('console');

let cmdDict = {
    help: 'List of valid commands (this)',
    ls: 'List of all existing files',
    open: 'Open an existing file'
};

let fileList = ['file.txt', 'count.exe'];

function processInput() {
    if (inp.value != '') {
        print(inp.value);

        let cmd = inp.value.split(' ');
        if (cmd[0] == 'help') {
            for (const key of Object.keys(cmdDict)) {
                print(key + ': ' + cmdDict[key]);
            };
        } else if (cmd[0] == 'ls') {
            for (const files of fileList) {
                print(files);
            };
        } else if (cmd[0] == 'open') {
            openFile(cmd[1]);
        } else {
            print('No such command. Try \'help\' to list all valid commands.');
        }

        cons.innerHTML += '<br>' + front;
        inp.value = '';
        var objDiv = document.getElementById('screen');
        objDiv.scrollTop = objDiv.scrollHeight;

        function openFile(file) {
            if (fileList.includes(file)) {
                print('————————————————————————————————————————————————');
                if (file == 'file.txt') {
                    print('This is a placeholder text file.');
                } else if (file == 'count.exe') {
                    for (let i = 0; i < 100; i++) {
                        print(i);
                    }

                    print('Finished counting, exiting program...');
                }
                print('————————————————————————————————————————————————');
            } else {
                print('No such file. Please ensure that there are no additional characters in your command.');
            }
        }
    }
}

let print = (value) => cons.innerHTML += value + '<br>';

cons.innerHTML += front;