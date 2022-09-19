const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
getRole(){
    return "Engineer"
}

getGithub() {
    return this.github;
}
// getCard() {
//     return `<div class="card employee-card engineer-card">
//     <div class="card-header text-center">
//         <h2 class="card-title">${this.name}</h2>
//         <h4 class="card-title"><span class="material-symbols-outlined">smart_toy
//             </span>
//             Engineer</h4>
//     </div>
//     <div class="card-body bg-light">
//         <ul class="list-group text-dark">
//             <li class="list-group-item">ID:</li>
//             <li class="list-group-item">Email: <a href="">samuel@workemail.com</a></li>
//             <li class="list-group-item">GitHub: <a href="" target="_blank" rel="noopener noreferrer">GITHUB link</a></li>
//         </ul>
//     </div>
// </div>`}

}

module.exports = Engineer;