let årtal = Number(prompt("Vilket årtal vill du kolla: "))

if (årtal % 4 == 0){
    if(årtal % 100 == 0){
        if(årtal % 400 == 0){
            console.log("Det angivna åtalet är ett skottår!")}
        else{
            console.log("Det angivna årtalet är INTE ett skottår!")}}
    else{
        console.log("Det angivna åtalet är ett skottår!")}}

else{
    console.log("Det angivna årtalet är INTE ett skottår!")}