const prompt = require("prompt-sync")();
var input = ''
var listDone = []
var listUnDone = []
var isDone = false
while(!isDone){
    statusUpdate()
    console.log('what do you want to do?\n1.add\n2.remove\n3.change\n')
    input = prompt('')
    if(input === '1'){1
        input = prompt('Whatchu addin ombre? ')
        listUnDone.push(input)
    }
    else if(input=== '2'){
        input = prompt('Whatchu removin ombre? ')
         listUnDone.splice(Number(input),1)
    }
    else if(input=== '3'){
        input = prompt('Whatchu changin ombre? ')
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