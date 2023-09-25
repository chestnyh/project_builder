// PROMPT TO GENERATE config for future project build

import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "list",
      name: "DATABASE",
      message: "What database should be in your project?",
      choices: [
        "POSTGRESQL",
        "MYSQL",
        "MONGODB"
      ],
      loop: true,
      
    },
    // MONGO DB QUESTIONS
    {
        type: "input",
        name: "MONGO_ROOT_USERNAME",
        message: "MONGO_ROOT_USERNAME:",
        when: (answers) => answers.DATABASE === "MONGODB",
        suffix: `(default: root)`,
        default: `root`
    },
    {
        type: "input",
        name: "MONGO_ROOT_PASSWORD",
        message: "MONGO_ROOT_PASSWORD:",
        when: (answers) => answers.DATABASE === "MONGODB",
        suffix: `(default: root_password)`,
        default: `root_password`
    },
    {
        type: "input",
        name: "MONGO_DATABASE",
        message: "MONGO_DATABASE:",
        when: (answers) => answers.DATABASE === "MONGODB",
        suffix: `(default: project)`,
        default: `project`
    },
    {
        type: "input",
        name: "MONGO_USERNAME",
        message: "MONGO_USERNAME:",
        when: (answers) => answers.DATABASE === "MONGODB",
        suffix: `(default: user)`,
        default: `user`
    },
    {
        type: "input",
        name: "MONGO_PASSWORD",
        message: "MONGO_PASSWORD:",
        when: (answers) => answers.DATABASE === "MONGODB",
        suffix: `(default: user_password)`,
        default: `user_password`
    },
    {
        type: "input",
        name: "MONGO_PORT",
        message: "MONGO_PORT:",
        when: (answers) => answers.DATABASE === "MONGODB",
        suffix: `(default: 27017)`,
        default: `27017`
    },
  ])
  .then((answers) => {
    console.log("answers =", answers);
  });