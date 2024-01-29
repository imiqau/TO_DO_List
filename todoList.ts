import chalk from "chalk";
import inquirer from "inquirer";

let str : string = "Yes";
let todo:string[] = []
const i = 0;
while(str == "Yes") {
    
    let user = await inquirer.prompt(
        {
            type: "input",
            name: "abc",
            message: "Please Enter your To Do task: "
        }
    )
        todo.push(user.abc);

        let user1 = await inquirer.prompt(
        {
            type: "list",
            name: "ask",
            message: "Would you like to write another task? ",
            choices:['Yes','No']
        }
    )
    str = user1.ask;
}
console.clear();
console.log(chalk.bgCyan.italic.yellowBright("To Do List:"));
for (let index = 0; index < todo.length; index++) {
    console.log(chalk.blueBright(`${index + 1} ) ${todo[index]}`));
    
}
