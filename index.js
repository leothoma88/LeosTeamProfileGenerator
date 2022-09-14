
// This calls on the inquirer package
const fs = require('fs');
const inquirer = require('inquirer');

//Classes



//Full page html template 
const cardtemplates = []

//Function tthat creates the prompts neccesary for the user to answer,but now just in one go
function memberpush(){
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

    } else if (role= "Engineer: "){
      extrainfo="GitHub: "
    }else {
      extrainfo="School: " 

    }
    
  
  
 Newfilegenerator(title,readMe);

   } 
   );
}

   function Newfilegenerator(fileName,data){

  fs.writeFile(`${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
    if(err){
      console.log(err)
    }else
    console.log("ReadMe Created")
  })
   }
