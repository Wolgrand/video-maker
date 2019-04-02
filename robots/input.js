const readline = require('readline-sync')
const state = require('./state.js')

function robot(){
    const content = {
        maximumSentences:7
    }

    content.searchTerm = askReturnSearchTerm()
    content.prefix = askReturnPrefix()
    state.save(content)

    function askReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function askReturnPrefix() {
        const prefixes = ['Whos is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes)
        const selectedPrefixeText = prefixes[selectedPrefixIndex]

        return selectedPrefixeText
    }
}

module.exports = robot
