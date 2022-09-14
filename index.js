
// This calls on the inquirer package
const fs = require('fs');
const inquirer = require('inquirer');

//Classes



// This creates the prompts neccesary for the user to answer
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter managers name:',
      name:"manager",
      validate: (value)=> {if(value){
          return true} else{return "Please insert value"}}
    },
    {
      type: 'input',
      message: 'Enter id:',
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
        type: 'input',
        message: 'Enter the maangers office number',
        name: 'officenumber',
        validate: (value)=> {if(value){
            return true} else{return "Please insert value"}}
        }
      


  ])
  .then(({title,description,installation,usage,credit,test,contributing,license,gitHub,email}) =>{
    const readMe =`# ${title}
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  ${installation}
    
  ## Usage
  ${usage}
    
  ## Description
  ${description}

  ## Credit
  ${credit}
    
  ## Contribution
  ${contributing}

  ## Test
  ${test}

  ## License
  ${license}

  # Contact Info
  * GitHub: ${gitHub}
  * Email: ${email}
  `
 Newfilegenerator(title,readMe);

   } 
   );

   function Newfilegenerator(fileName,data){

  fs.writeFile(`${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
    if(err){
      console.log(err)
    }else
    console.log("ReadMe Created")
  })
   }
