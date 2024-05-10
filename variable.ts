let greetings: string = "Hello Shivam";

console.log(greetings);
greetings.toLowerCase();

//number
let userId: number = 33456.5;

//better practice
let userId2 = 45657;

userId2.toFixed();

//boolean
let isloggedIn: boolean = true;

let helloworld = "hello";


//using interface
interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Shivam",
    id: 0
}

console.log(user);
 




export {}