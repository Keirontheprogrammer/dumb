// const { json } = require("stream/consumers");

// let array = ["tree","tamandani","somethingss","animalsss", 12, 78, [5,5]]

// console.log(array[3][0]);
// console.log(array.indexOf(12))

// for(ar in array){
//     console.log(`${ar} : ${array[ar]}`)
// }

// function Is_long(char){
//     return char.length >= 8;
// }

// let indx=array.indexOf("tamandani");

// if(indx != -1){
//     array.splice(indx, 2)
// }
// console.log(array)

// const long_name= array.filter(Is_long);

// console.log(long_name);

let total =0;
let products = ["Undepants:6.99", "Socks:5.99", "T-shirt:14.99", "Trousers:31.99", "Shoes:23.99"];

for(const prod of products){
    console.log(`product: ${prod}`);
};

for(const pr of products){
    const [name, price] = pr.split(":");
    console.log(`Name : ${name}, Price :${Number(price)}`)
    total+=Number(price);
}
console.log("------------------------------------");
console.log(`Total price is $ ${total}`);
console.log("------------------------------------");

let itemText =()=>{
    for (const prrr of products){
        const[name, price ] = prrr.split(":");
        console.log(`${name}----$ ${price}`)
    }
}
itemText();