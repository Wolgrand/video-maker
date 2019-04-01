const readline = require('readline-sync')
const robots = {
    text:require('./robots/text.js')
}

async function start() {
    const content = {
        maximumSentences: 7
    }

    content.searchTerm = askReturnSearchTerm()
    content.prefix = askReturnPrefix()
    //content.lang = askReturnLang()

    await robots.text(content)

    function askReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function askReturnPrefix() {
        const prefixes = ['Whos is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes)
        const selectedPrefixeText = prefixes[selectedPrefixIndex]

        return selectedPrefixeText
    }

    //function askReturnLang() {
    //    return readline.question('Type the language search: ')
    //}

    console.log(content)

}

start()
