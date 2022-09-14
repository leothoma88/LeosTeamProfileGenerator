
// This calls on the inquirer package
const fs = require('fs');
const inquirer = require('inquirer');

//Classes



//Full page html template 
const cardtemplates = []

//Make page then adds the cards after prompts
function startItUp(){ memberPush();pageGenerator()}


//Function tthat creates the prompts neccesary for the user to answer,but now just in one go
function memberPush(){
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter name:',
      name:"name",
      validate: (value)=> {if(value){
          return true} else{return "Please insert value"}}
    },
    {
      type: 'input',
      message: 'Enter your id:',
      name:"id",
      validate: (value)=> {if(value){
        return true} else{return "Please insert value"}}
    },
    {
      type: 'input',
      message: 'Enter managers email',
      name: 'email',
      validate: (value)=> {if(value){
        return true} else{return "Please insert value"}}
    },
    {
      type: 'list',
      message: 'License:',
      choices:["Manager","Engineer","Intern"],
      name: 'role',
      validate: (value)=> {if(value){
          return true} else{return "Please insert value"}}
    },
      


  ])
  .then(({name,id,email,role}) =>{
//Takes over the only unshared attribute
    var extrainfo = "";
    if(role==="Manager"){
      extrainfo="Office number: "

    } else if (role= "Engineer"){
      extrainfo="GitHub: "
    }else {
      extrainfo="School: " 

    }
//Continues the prompts after 
    inquirer.prom
    
  
  
 

   } 
   );
}

// Makes the original html
   function pageGenerator(){
  let basepage =`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  
  
      <title>My Team Profile</title>
      
  </head>
  <body>
      <body>
          <!-- Need header -->
          <header class="container-fluid">
              <div class="row">
                  <div class="bg-dark col-12 jumbotron text-white ">
                      <h1 class="text-center">My Team</h1>
                  </div>
              </div>
          </header>
  
          <div class="container">
              <div class="row">
                  <div class="main-section col-12 d-flex justify-content-center">`

  fs.writeFile(`./dist/index.html`,basepage,(err)=>{
    if(err){
      console.log(err)
    }else
    console.log("HTML STARTED")
  })
   }


   startItUp();
