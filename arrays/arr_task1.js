// let myArray = ["Pizza","chips","chicken"];
// myArray.unshift("Burger");
// console.log(myArray);


// const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

// let array = myString.split("+");
// let arraylength = array.length;
// let lastItem = array[arraylength -1];

// console.log(array);
// console.log(arraylength);
// console.log(lastItem);

// const MyArray = [
//   "Ryu",
//   "Ken",
//   "Chun-Li",
//   "Cammy",
//   "Guile",
//   "Sakura",
//   "Sagat",
//   "Juri",
// ]

// MyArray.pop();
// MyArray.push("tama")
// MyArray.push("nsiku")
// console.log(MyArray)

// for(ar in MyArray){
//     console.log(`${MyArray[ar]} (${ar})`);
// }

// let myString = MyArray.join("-");
// console.log(myString)

const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

let idex = birds.indexOf("Eagles");

if(idex !==-1){
    birds.splice(idex,1);
}
console.log(birds);

function startE(bird){
    return bird.startsWith("E");
}

const ebirds = birds.filter(startE);
console.log(ebirds);