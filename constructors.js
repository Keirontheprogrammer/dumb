const { stdin, stdout } = require("process");

// function User(name, age, isAdmin){
//     this.name = name,
//     this.age = age,
//     this.isAdmin =isAdmin
// }

// let user = new User("Joe",39,false);
// console.log(user.isAdmin);


function Calculator(){
    this.sum =()=>{
        return this.a + this.b + this.c;
    }

    this.mul = ()=>{
        return this.a*this.b*this.c;
    }
    this.read =()=>{
        const readline = require("readline");
        const rl =readline.createInterface({
            input: stdin,
            output: stdout
        });

        rl.question("enter number a:", (a)=>{
            this.a =Number(a);

            rl.question("enter number b:", (b)=>{
                this.b = Number(b);

                 rl.question("enetr number c:", (c)=>{
                this.c = Number(c);
                let obj ={
                a: this.a,
                b: this.b,
                c: this.c,
            }
                console.log("Your object is : ",obj);
                console.log("Sum = ", this.sum());
                console.log("Product = ", this.mul());
                
                rl.close(); 
 
                
            })
            });

        });

    }
}

let cal = new Calculator();
cal.read();