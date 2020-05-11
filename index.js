#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

// Text + chalk definitions
const data = {
    name: chalk.white("             Guillaume Boeur"),
    handle: chalk.white("guib"),
    work: chalk.white("Junior Web Developer at BeCode"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("GBoeur"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~guib"),
    github: chalk.gray("https://github.com/") + chalk.green("Guillaume-Boeur"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("guillaume-boeur-729b9310b"),
    npx: chalk.red("npx") + " " + chalk.white("guib"),
    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.green(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelTwitter} ${data.twitter}`,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "round",
            },
        ),
    ),
);