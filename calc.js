let calc = {
     sm(){
        return this.a + this.b;
    },

    ml(){
         return this.a * this.b;
    },
    
    rd(){
        const readline = require("readline");
        const rl =readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        
        rl.question("Enter first number a:", (a)=>{
            this.a = Number(a);

            rl.question("Enetr second number b:", (b)=>{
                this.b = Number(b);
                
                let usrip ={
                    a : this.a,
                    b: this.b
                };

                console.log("your object is :", usrip);
                console.log("sum = ",this.sm() );
                console.log("Product = ",this.ml() );
                
                rl.close();
            });
        } );
    },
   
}
calc.rd();

