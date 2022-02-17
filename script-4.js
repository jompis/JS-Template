let input = prompt("Enter text: ")

function checkSpam(text){
    if (!text) return(text);

    let words = text.toLowerCase()

    if (words.includes("viagra") == True){
        return ("Sus!")
    }

    else;
    return("Ok")
}
alert(checkSpam(input))