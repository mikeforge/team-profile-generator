const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const genHTML = require('./src/genHTML');


let team = [];

// const userQuestions = () => {
//     inquirer
//     .prompt([
//         {
//             type: "input",
//             name: "teamname",
//             message: "What is your team's name?",
//         },
//     ])
//     .then((userAnswers) => {
//         const user = userAnswers.user;
//         team.push(user);
//         addManager();
//     });
// };

const addManager = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your team's Manager"
        },

        {
            type: "input",
            name: "id",
            message: "What is that Manager's ID?"
        },

        {
            type: "input",
            name: "email",
            message: "What is that Manager's email address?"
        },

        {
            type: "input",
            name: "officeNumber",
            message: "What is the Manager's office number?"
        },
    ])
    .then((managerInfo) => {
        const { name, id, email, officeNumber } = managerInfo;
        const manager = new Manager(name, id, email, officeNumber);
        team.push(manager);
        addEmployee();
    })
}


const addEngineer = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the Engineer"
        },

        {
            type: "input",
            name: "id",
            message: "What is that Engineer's ID?"
        },

        {
            type: "input",
            name: "email",
            message: "What is that Engineer's email address?"
        },

        {
            type: "input",
            name: "github",
            message: "What is the Engineer's github?"
        },
    ])
    .then((engineerInfo) => {
        const { name, id, email, github } = engineerInfo;
        const engineer = new Engineer(name, id, email, github);
        team.push(engineer);
        addEmployee();
    })
}


const addIntern = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the Intern"
        },

        {
            type: "input",
            name: "id",
            message: "What is that Intern's ID?"
        },

        {
            type: "input",
            name: "email",
            message: "What is that Intern's email address?"
        },

        {
            type: "input",
            name: "github",
            message: "What School does the Intern attend?"
        },
    ])
    .then((internInfo) => {
        const { name, id, email, school } = internInfo;
        const intern = new Intern(name, id, email, school);
        team.push(intern);
        addEmployee();
    })
}


const addEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "addNewEmployee",
            message: "Do you want to add another employee?",
            choices: ["Manager", "Engineer", "Intern", "No more employees to add"],
        },
    ])
    .then(function (data) {
        switch (data.addNewEmployee) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
                break
        }

    });
}


const writeFile = info => {
    fs.writeFile('./dist/index.html', info, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team has been created!")
        }
    })
};

addManager()
    function buildTeam() {
        console.log(team);
        const pageHtml = genHTML(team);
        writeFile(pageHtml)
    }