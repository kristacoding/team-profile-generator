const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const teamMembers = [];

function startProfile() {

    function addEngineer() {
        inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your Engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is your Engineer's id?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your Engineer's email?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is your Engineer's github username?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character."
            }
        }]).then(answer => {
            const newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
            teamMembers.push(newEngineer);
            createTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your Intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is your Interns's id?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your Intern's email?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "school",
            message: "Where does your Intern go to school?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character."
            }
        }]).then(answer => {
            const newIntern = new Intern(answer.name, answer.id, answer.email, answer.school);
            teamMembers.push(newIntern);
            createTeam();
        });
    }

    function addManager() {
        inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office phone number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character."
            }
        }]).then(answer => {
            const newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            teamMembers.push(newManager);
            createTeam();
        });
    }



    function createTeam() {
        inquirer.prompt([{
            type: "list",
            name: "addTeamMember",
            message: "Would you like to add another team member?",
            choices: [
                "Engineer",
                "Intern",
                "Team Complete"
            ]
        }]).then(memberRole => {
            switch (memberRole.addTeamMember) {
                case "Engineer":
                    addEngineer()
                    break;
                case "Intern":
                    addIntern()
                    break;
                default:
                    teamHTML();
            }
        });
    }


    function teamHTML() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf8");
    }

    addManager();

}

startProfile();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.


// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
