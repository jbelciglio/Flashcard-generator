var inquirer = require("inquirer");

var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

var count = 0;
var basicArray =[];
var clozeArray = [];

function mainMenu() {
    inquirer.prompt([
        {
        type: "list",
        name: "firstChoice",
        message: "Hello! What would you like to do?",
        choices: [{
            name: "addBasicCard"
        }, {
            name: "addClozeCard"
        }, {
            name: "showBasicCard"
    }, {
            name: "showClozeCard"
    }]
        }]).then(function(answer) {
            if (answer.firstChoice === 'addBasicCard'){
                addBasicCard();
            } else if (answer.firstChoice === "addClozeCard"){
                addClozeCard();
            } else if (answer.firstChoice === "showBasicCard"){
                showBasicCard();
            } else if (answer.firstChoice === "showClozeCard"){
                showClozeCard();
            }
        })

}
    var addBasicCard = function() {
        inquirer.prompt([
        {
            type: "input",
            name: "frontEnd",
            message: "What question goes on the front?"
        },
        {
            type: "input",
            name: "backEnd",
            message: "What's the answer?"
        }
        ]).then(function(response){
            var newBasic = new BasicCard (response.frontEnd, response.backEnd);
            basicArray.push(newBasic);
            console.log("Basic Card added!");
            mainMenu();
        })
    }
var addClozeCard = function(){
    inquirer.prompt([
        {
            type: "input",
            name: "text",
            message: "Write the visible part of the card..."
        }, {
            type: "input",
            name: "hidden",
            message: "Write the hidden part of the card..."
        }
    ]).then(function(answer){
        var newCloze = new ClozeCard(answer.text, answer.hidden);
        clozeArray.push(newCloze);
        console.log("Cloze Card added!");
        mainMenu();
    })
}

var showBasicCard = function(){

    var card = basicArray[Math.floor(Math.random() * basicArray.length)];
    console.log(card.front);
    inquirer.prompt([
        {
            type: "confirm",
            message: "Wish to see the answer?",
            name: "confirm",
            default: true
        }
    ]).then(function(response) {
        if(response.confirm) {
            console.log(card.back);
            mainMenu();
        }
    })
    
}

var showClozeCard = function(){

    var card = clozeArray[Math.floor(Math.random() * clozeArray.length)];
    console.log(card.text);
    inquirer.prompt([
        {
            type: "confirm",
            message: "Wish to finish the sentence?",
            name: "confirm",
            default: true
        }
    ]).then(function(response) {
        if(response.confirm) {
            console.log(card.text + "-" + card.cloze + "-");
            mainMenu();
        }
    })
    
}
mainMenu();

//var secondQuestion = new BasicCard("What was the name of the Ravenclaw student Harry and The Gang met in Order of the Phoenix?", "luna lovegood");
//var thirdQuestion = new BasicCard("Rogue-3 was the callsign for which pilot in The Battle of Hoth?", "wedge antilles");
//basicArray.push(firstQuestion, secondQuestion, thirdQuestion);


