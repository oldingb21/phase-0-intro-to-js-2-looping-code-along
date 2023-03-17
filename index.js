const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, value) {
    let messages = []
    for (let n = 0; n < names.length ; n++) {
        messages.push(`Thank you, ${names[n]}, for the wonderful ${value} gift!`);
    }
    return messages
}

let number 

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--
    }
}