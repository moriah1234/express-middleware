const fs = require('fs')

const writeToLogFile = async (content) => {
    try {
        await fs.promises.appendFile('log-file.txt', JSON.stringify(content).concat('\n'))
    } catch (error) {
        console.error('error in appending to log file: ', error);
    }
}

module.exports = writeToLogFile;