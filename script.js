// Задание 1
let person = {
   name: "Nursultan",
   age: 33,
   city: "Astana"
};
console.log(person);

// Задание 2
console.log("name:", person.name);
console.log("age:", person.age);
person.city = "Qyzylorda";

// Задание 3
person.greet = function() {
  console.log("Привет, меня зовут " + this.name + ", мне " + this.age + " лет!");
};
person.greet();


// Задание 4
const obj1 = { a: 10, b: 20 };
const obj2 = { a: 10, b: 20 };
const obj3 = obj1; 

console.log("obj1 == obj2:", obj1 == obj2);        
console.log("obj1 === obj2:", obj1 === obj2);      
console.log("obj1 == obj3:", obj1 == obj3);        
console.log("obj1 === obj3:", obj1 === obj3);      


// Задание 5
const book = {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    details: {
        year: 1966,
        pages: 480
    }
};
const shallowCopy = Object.assign({}, book);
shallowCopy.details.year = 2020;
console.log("Оригинальный объект:", book.details.year);
console.log("Поверхностная копия:", shallowCopy.details.year);    


// Задание 6
const calculator = {
    a: 10,
    b: 5,
    sum() {
        return this.a + this.b;
    },
    
    multiply() {
        return this.a * this.b;
    }
};

console.log("Сумма:", calculator.sum());           
console.log("Произведение:", calculator.multiply());


// Задание 7
const car = {
    brand: "Toyota",
    model: "Camry"
};

console.log("Исходный объект:", car);

car.brand = "Honda";
car.model = "Accord";

console.log("Измененный объект:", car);
// car - это ссылка на объект в памяти, и const фиксирует эту ссылку

