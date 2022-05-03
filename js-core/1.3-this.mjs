// 1.3 Что такое this;
// this в методе (функции) объекта.
const student = {
  firstName: 'Том',
  lastName: 'Dance',
  age: 19,
  fullName(title = '') {
    if (title) console.log(title);
    console.log(`${this && this.firstName} ${this && this.lastName}`);
  }
};

student.fullName('1.3.1 this в методе (функции) объекта');

const teacher = {
  firstName: 'Kate',
  lastName: 'First',
  fullName: student.fullName
};
teacher.fullName();

// this в функции без объекта
const foo = student.fullName;
foo('1.3.2 this в функции без объекта');

// this в функции конструкторе (при создании экземпляра класса).
function Animal(name, type) {
  // this = {};  (под капотом)

  // записывает свойства в this
  this.name = name;
  this.type = type;

  // return this;  (неявно)
}

const cat = new Animal('Мурзик', 'cat');

console.log('1.3.3 this в функции конструкторе (при создании экземпляра класса)')
console.log(cat);

// this в стрелочных функциях


const shopList = {
  counter: 1,
  items: ['apple', 'potato', 'milk'],
  show() {
    console.log('1.3.4 this в стрелочных функциях');
    this.items.forEach( function (item) {
      console.log(`${this && this.counter++}. ${item}`);
    })
    console.log('------------------------------');
  }
  // show() {
  //   shopList === this ? console.log('1.3.4 this в стрелочных функциях') : '';
  //
  //   this.items.forEach( (item) => {
  //     console.log(`${this && this.counter++}. ${item}`)
  //   });
  // }
};
shopList.show();

const sellList = {
  counter: 10,
  items: ['ice', 'beef', 'fish'],
};
sellList.print = shopList.show;
sellList.print();
console.log('------------------------------');
