const dotenv = require('dotenv');
const { Command } = require('commander');

dotenv.config();

//**COMMANDER */
const program = new Command();
program
    .option('-p,--persistence <persistence>', 'The selected persistence', 'MEMORY')

const options = program.opts();
program.parse(process.argv);

module.exports = {
    mongoConnectionLink: process.env.MONGO_CONNECTION_LINK,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT,
    persistence: options.persistence 
}

