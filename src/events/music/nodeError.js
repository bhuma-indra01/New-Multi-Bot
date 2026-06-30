const chalk = require('chalk');

const logged = new Set();

module.exports = (client, node, error) => {
    const id = node.options.identifier || node.options.host;
    if (logged.has(id)) return;
    logged.add(id);
    console.log(
        chalk.red(chalk.bold(`ERROR`)),
        chalk.white(`>>`),
        chalk.white(`Node`),
        chalk.red(`${id}`),
        chalk.white(`had an error:`),
        chalk.red(`${error.message}`),
        chalk.gray(`(further connection errors for this node will be suppressed)`)
    );
};
