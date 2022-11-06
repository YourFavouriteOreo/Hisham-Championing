const readline = require("readline-sync");
var input = ''
var listDone = []
var listUnDone = []
var isDone = false
while(!isDone){
    statusUpdate()
    input = readline.question('what do you want to do?\n1.add\n2.remove\n3.change\n')
    if(input === '1'){1
        input = readline.question('Whatchu addin ombre?\n')
        listUnDone.push(input)
    }
    else if(input=== '2'){
        input = readline.question('Whatchu removin ombre?\n')
         listUnDone.splice(Number(input),1)
    }
    else if(input=== '3'){
        input = readline.question('Whatchu changin ombre?\n')
        var value = listUnDone[Number(input)]
        listDone.push(value)
        listUnDone.splice(Number(input),1)
    }
}


function statusUpdate(){
    // This function shows the current status of the list
    console.log('To-Do List')
    console.log('Done Items')
    console.table(listDone)
    console.log('Undone Items')
    console.table(listUnDone)
}