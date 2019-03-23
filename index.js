const readline = require('readline-sync')

function start() {
    const content = {}

    content.searchTerm = askReturnSearchTerm()
    content.prefix = askReturnPrefix()

    function askReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function askReturnPrefix() {
        const prefixes = ['Whos is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes)
        const selectedPrefixeText = prefixes[selectedPrefixIndex]

        return selectedPrefixeText
    }


    console.log(content)
}

start()
