const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./src/page-template');

const promptUser =() => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the team manager's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the team manager's employee id:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the team manager's email address:",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the team manager's office number:",
        }
    ]);
};

const promptEngineer = teamData =>{
    console.log(teamData);
    // If there's no 'Engineer' array property, create one
    if(!teamData.engineers) {
        teamData.engineers=[];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the engineer's employee id:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email address:",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineer's github username:",
        }
    ])
    .then(empData => {
        teamData.engineers.push(empData);
        return promptChoice(teamData);
    });
}

const promptIntern = teamData=>{
    // If there's no 'intern' array property, create one
    if(!teamData.interns) {
        teamData.interns=[];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the intern's employee id:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email address:",
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school:",
        }
    ])
    .then(empData => {
        teamData.interns.push(empData);
        return promptChoice(teamData);
    });
}

const promptChoice = teamData => {
    console.log(teamData);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What do you want to do?',
            choices: [
                'Add an engineer',
                'Add an intern',
                'Finish building my team',
            ]
        }
    ])
    .then(data =>{
        if (data.choice ==='Add an engineer') {
            return promptEngineer(teamData);
        } else if ( data.choice === "Add an intern") {
            return promptIntern(teamData);
        } else {
            return
            console.log ("finish building the team")
        };
    })
 };
    

promptUser()
    .then(promptChoice)
    .then(teamData =>{
        console.log(teamData);
        return generatePage(teamData);
    })
    .catch(err=>{
        console.log(err);
    });
    