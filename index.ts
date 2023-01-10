console.log("Hello World from index.ts");

// Types
var myString: string = "Hello World";
myString = 22 + "";

var myNumber: number = 22;
var myBool: boolean = true;

var myVar: any = "Hello";
myVar = false;

// Arrays
var StringArray: string[] = ["item1", "item2", ""];
var NumberArray: number[] = [1, 2, 3];
var BooleanArray: boolean[] = [true, false, true];
var AnyArray: any[] = [1, "Hello", true];

// Tuple
var strNumTuple: [string, number];
strNumTuple = ["Hello", 4];

// Void, undefined, null
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

// Functions
function getSum(num1: number, num2: number): number {
    return num1 + num2;
}

let mySum = function (num1: number | string, num2: number | string): number {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};

function getName(firstName: string, lastName?: string): string {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}

function myVoidFunction(): void {
    return;
}

// Interfaces
interface ITodo {
    title: string;
    text: string;
}

function showTodo(todo: ITodo) {
    console.log(todo.title + " - " + todo.text);
}

let myTodo: ITodo = { title: "Trash", text: "Take out trash" };

showTodo(myTodo);

// Classes

class User {
    private name: string;
    public email: string;
    protected age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register() {
        console.log(`${this.name} is now registered`);
    }

    showMeAge() {
        return this.age;
    }

    public AgeInYears() {
        return this.age + " years";
    }

    payInvoice() {
        console.log(`${this.name} paid invoice`);
    }
}

var john = new User("John Doe", "jdoe@gmail.com", 25);

john.register();
console.log(john.showMeAge());
console.log(john.AgeInYears());

class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }
}

var mike: User = new Member(1, "Mike Smith", "msmith@gmail.com", 21);
mike.payInvoice();

document.write();
