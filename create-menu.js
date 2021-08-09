const readline = require('readline')
const EventEmitter = require("events")
const eventEmitter = new EventEmitter

const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

var book_list=["Bibble","Harry","Beloved"]

eventEmitter.on("option-1",() => {
    book_list.forEach((el) => {
        console.log(el);
    })
});



function book_menu() {
readline1.question("Press any options: 1,2,and 3:",input => 
{
    if(`${input}` == 1){
        eventEmitter.emit("option-1");
        book_menu();
    } 
    
     else if(`${input}` == 2){
        readline1.question("Add a book", bookname => {
            book_list.push(bookname);
            console.log("Done");
             book_menu();
        })
    }
    
    if(`${input}` == 3){
        readline1.question("Are you sure you want to quit?",quit => {
            if(`${quit}` == "Y") {
                console.log("bye bye");
                readline1.close()
            }
        })    
    }
})       

}

book_menu();

