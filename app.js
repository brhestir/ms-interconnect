const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { choices } = require("yargs");
const { PRIORITY_ABOVE_NORMAL } = require("constants");
const Employee = require("./lib/Employee");

var questionArray = [
    {   
        name: 'roleType',
        type: 'list',
        message: "What kind of role do you want to add?",
        choices: [
            "Employee",
            "Engineer",
            "Intern",
            "Manager",
        ],    
    },
    {
        name: 'roleName',
        type: 'input',
        message: 'Enter new role\'s Name: ',
        default: 'Bob'
    },
    {
        name: 'roleId',
        type: 'input',
        message: 'Enter new role\'s ID: ',
        default: '314'
    },
    {
        name: 'roleEmail',
        type: 'input',
        message: 'Enter new role\'s E-mail: ',
        default: 'bob@dreamcode.com'
    },
    {
        name: 'roleOfficeNum',
        type: 'input',
        message: 'Enter new role\'s office number: ',
        default: '777',
        when: function(answers) {
            if (answers['roleType'] === 'Manager') {
                return true;
            } else { 
                return false;
            }
        },
    },
    {
        name: 'roleGitHubUserName',
        type: 'input',
        message: 'Enter new role\'s GitHub user name: ',
        default: 'ozymandius',
        when: function(answers) {
            if (answers['roleType'] === 'Engineer') {
                return true;
            } else { 
                return false;
            }
        },
    },
    {
        name: 'roleSchoolName',
        type: 'input',
        message: 'Enter new role\'s school name: ',
        default: 'Clemson',
        when: function(answers) {
            if (answers['roleType'] === 'Intern') {
                return true;
            } else { 
                return false;
            }
        },
    },
    {
        name: 'promptAgain',
        type: 'confirm',
        message: 'Continue entering roles?',
        default: true,
    },

];

const employeeArray = new Array();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const promptUser = (questions) => {
    inquirer.prompt(questions)
    .then( answers => parseAnswers(answers, questions) )
    .then( result => processRenderedHTML(result) )
    .then( finalResult => {
        
    })
};

function parseAnswers(answers, questions) {
    // This is executed for each question immediately after it is answered
    switch(answers.roleType) {
        case 'Employee':
            employeeArray.push(new Employee(answers.roleName, answers.roleId, answers.roleEmail));  // create new Employee object
        break;
        case 'Engineer':
            employeeArray.push(new Engineer(answers.roleName, answers.roleId, answers.roleEmail, answers.roleGitHubUserName));  // create new Employee object
        break;
        case 'Intern':
            employeeArray.push(new Intern(answers.roleName, answers.roleId, answers.roleEmail, answers.roleSchoolName));  // create new Employee object
        break;
        case 'Manager':
            employeeArray.push(new Manager(answers.roleName, answers.roleId, answers.roleEmail, answers.roleOfficeNum));  // create new Employee object
        break;
    }

    // If the user wants to enter another role, make recursive call to promptUser
    if (answers.promptAgain) {
        promptUser(questions);
        return false;
    }
    else {
        
        // After the user has input all employees desired, call the `render` function (required
        // above) and pass in an array containing all employee objects; the `render` function will
        // generate and return a block of HTML including templated divs for each employee!
        //return render(employeeArray);   // return the rendered HTML;
        return true;
    }
}

function processRenderedHTML(result) {
    // After you have your html, you're now ready to create an HTML file using the HTML
    // returned from the `render` function. Now write it to a file named `team.html` in the
    // `output` folder. You can use the variable `outputPath` above target this location.
    // Hint: you may need to check if the `output` folder exists and create it if it
    // does not.
    if(result){
        // This path is called when result == true from previous .then in the chain (i.e. done entering roles)

        console.log(employeeArray);

        let renderedHTML = render(employeeArray);
        
        console.log(`[i] Target output path: ${path.dirname(outputPath)}`);

        // Check if output path exists and create if it does not exist
        if(!(fs.existsSync(path.dirname(outputPath)))) {
            // Path does not exist -> create path and then proceed
            console.log(`[i] Path does not exist... creating path`);
            fs.mkdirSync(path.dirname(outputPath));
            console.log(`[+] mkDir OK: ${path.dirname(outputPath)}`);
        }
    
              
        fs.writeFile(outputPath, renderedHTML, (err) => {
            err ? console.log(err) : console.log(`[+] wFile OK: ${outputPath}`);
        });
    
    } 
    else
    { 
        // This path is called when result == false from previous .then in the chain (i.e. entering more roles)
        // i.e. do nothing (or perhaps return a return value if necessary)
        //console.log('return was FALSE');
    }

}

promptUser(questionArray);
