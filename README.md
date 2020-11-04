## Overview 
 
This Node CLI program takes in information about employees and generates an HTML webpage that displays summaries for each person. This program assumes that a Manager in entering the information about the team members and produces specific questions for the Manager, Engineer, and Intern. Additionally, this program uses test coding to ensure that all items are coded correctly. 
 
## Video Demonstration 
 
https://drive.google.com/file/d/11aR0oWVHCR-hs5d0isUacqqIVfgluKhK/view
 
## Description 
 
To build this program, the code starts with creating constructors and classes to house information about each employee. A principle class was called Employees was created for key overlapping information such as Name, Id, and Email. Child classes such as Engineer, Intern, and Manager were created for specific questions regarding each role. The javascript classes files can be found under the lib. 
 
Each function in the class was then created to target a specific test in the unit testing code that was provided. This is to ensure that each piece of code is maintainable. The program here passes all tests required. 
 
Once the classes are created, then the 'app.js' file was created to house all the functions. As a manager, the first function called assumes you are the manager and asks you specific information to add to your profile. Then the following function is called depending to ask which team member you would be adding. Using a switch case statement, the program can then call the specific function for each employee to prompt the correct questions. 
 
After all the team members have been added, the program will then prompt the user to either add another or complete the team. Clicking complete the team will allow the server to use fs and write the information to an HTML file. This HTML file will house all the information about each specific employee. The HTML elements can be found under the templates folder and were provided for this project. 

## Images
Command prompting questions for Manager, Employee, and Intern: 
<img src= "images\Team Profile Generator - Questions.png">

HTML Outpul: 
<img src ="images\Team Profile Generator - HTML.png">