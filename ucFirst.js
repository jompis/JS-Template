let input = prompt("Ange ett namn: ").toLowerCase()

function ucFirst(input){
    if (!input) return(input);

    return input[0].toUpperCase() + input.slice(1);
}

alert(ucFirst(input))