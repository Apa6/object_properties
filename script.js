//! МЕТОДЫ ОБЪЕКТОВ. THIS

//?=>  Вывод метода объекта
// let user; 

// user = {
//   name: "Джон",
//   go(){ alert(this.name)}
// };

// (user.go)()        // скобки обозначают приоритет выполнения.


//?=> Возвращает в функцию свойства объекта 

// let user;

// function makeUser() {
//   return {
//     name: 'John',
//     ref(){
//       return this;
//     }
//   }
// };

// user = makeUser();           // 

// console.log(user.ref().name)

//?=> КАЛЬКУЛЯТОР

// let calculator = {
//   num1: num1(),
//   num2: num2(),

//   read() {
//     return (this.num1,this.num2)
//   },

//   sum() {
//     return (+this.num1 + +this.num2)
//   },

//   mul() {
//    return (+this.num1 * +this.num2)
//   }
// };

// function num1() {
//   return prompt('number 1 ?')
// };
// function num2() {
//   return prompt('number 2 ?')
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

//todo РЕФАКТОРИНГ

// let calculator = {

//   read() {
//     this.a = +prompt('number 1?');
//     this.b = +prompt('number 2?');
//   },

//   sum(){
//     return (
//       this.a + this.b
//     )
//   },

//   mul(){
//     return(
//       this.a * this.b
//     )
//   },
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

//? Laader

// let ladder = {
//   step: 0,
//   up() {
//    this.step++;
//    return this
//   },
//   down() {
//    this.step--;
//    return this;
//   },
//   showStep: function () {
//     alert(this.step);
//     return this
//   }
// };

// ladder.up().up().down().showStep();
 
//! ФУНКЦИЯ - КОСТРУКТОР

// let user = new User("Petay");       

// function User(name) {             // создается новая функция с парамерами нового одноименного объекта, в параметрах которого назначаются изменяющиеся данные
//   this.name = name;               // наоименование пустого объекта(name),принадлежащего объекту-функции = одноименные изменяющиеся данные  
//   this.admin = true;
// }

// console.log(user.name)
// console.log(user.admin)

//todo Возврат значения из конструктора return

// function BigUser() {

//   this.name = "Вася";           

//   return { name: "Godzilla" };  //  при вызове return с объектом, будет возвращен  объект, а не this.
// }

// alert( new BigUser().name )     // Godzilla 

// =>

// function SmallUser() {

//   this.name = "Вася";             //  при вызове return  с примитивным значением, примитивное значение будет отброшено

//   return; 
// }

// alert( new SmallUser().name );


//! МЕТОДЫ У ПРИМИТИВОВ 

//? Примитив как объект (работа со строками)

  // let str = "Hello";          //  у примитивов (str,nubmer,boolean..) имеются определенные методы( которые позволяют работать с ними)
  // console.log(str.toUpperCase());   // записывает все буквы в строке в верхнем регистре

//? Примитив как объект (работа с числами)

  // let num = 1.234245;
  // console.log(num.toFixed(1))       // округляет число до одного значения

//? Примитив как объект (строку,boolean в число и обратно)

  // let boolean = true;
  // console.log(Number(boolean));

  // let str = "123";
  // console.log(Number(str));

  // let num = 123;
  // console.log(String(num))

//? Примитив как объект (null, undefined) не имеют методов

  // console.log(null.test())  // error


//! Числа
