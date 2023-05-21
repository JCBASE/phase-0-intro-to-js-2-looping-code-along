// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}*/

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
    }

    return gifts;
}

wrapGifts(gifts);*/

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

wrapGifts(gifts);
// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"]*/

function writeCards(array, string){
    const newArray = []; //empty array to hold messages
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
        debugger;
    }

    return newArray;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number) {
    while (number >= 0){
        console.log(number--);
    }

}

countDown(10);