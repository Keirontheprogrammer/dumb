const { stdin, stdout } = require("process");

function Accum(number){

    this.sum = number;

    this.read =()=>{

        const readline = require("readline");
        const rl = readline.createInterface({
            input: stdin,
            output: stdout
        })

        rl.question("enter a number n :", (n)=>{
            this.n = Number(n);
            this.sum +=this.n;
            console.log(`the current sum is ${this.sum}`)

            rl.close();

        });
    }
}

let sa = new Accum(5);
console.log("initial number =", sa.sum);

sa.read();