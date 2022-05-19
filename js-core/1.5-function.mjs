//1.5 Function (declaration, expression, arrow)
  // Function Declaration
    //Объявление функции всплывает (можно вызвать до объявления)
      console.log('1.5.1 Function Declaration');
      const text = 'Была вызвана до объявления';
      checkHoisting(text, 1,2,3,4);

      function checkHoisting(text = 'Первый параметр равен undefined',...rest) {
        console.log(text);
        console.log(`Всего передано ${rest.length + 1} аргументов`);
      }

      checkHoisting(undefined);

  // Function expression
    // Function expression можно использовать только после объявления
      console.log('1.5.2 Function expression');
      try {
        checkHoistingFuncExpression();
      }catch(error){
        console.log(error.toString().slice(0,85));
      }

      let checkHoistingFuncExpression = function(text) {
        console.log(text);
      };

      checkHoistingFuncExpression('Function expression не всплывает');

  // Arrow functions (функции стрелки)
    // Функции стрелки не всплывают
      console.log('1.5.3 Arrow functions');

      try {
        sum(3,4);
      }catch(error){
        console.log(error.toString().slice(0,85));
      }

      const sum = (a,b) => a + b;

      console.log('2 + 4 =', sum(2,4));

      // this и arguments берется из внешнего лексического окружения.
        const shopList = {
          counter: 1,
          items: ['apple', 'potato', 'milk', 'bread', 'cheese', 'water'],
          show( from, to) {
            console.log('1.5.4 this и arguments в стрелочных функциях берутся из внешнего лексического окружения')

            this.items.forEach( (item, index) => {
              if (arguments[0] <= index && index <= arguments[1]) {
                console.log(`${this.counter++}. ${item}`)
              }
            });
          }
        };
        shopList.show(1,4);

      // Нельзя вызвать с new (не может быть функцией конструктором)
        console.log('1.5.5 Arrow functions нельзя вызвать с new');

        const User = (name) => {
          this.name = name;
        }

        try {
          const visitor = new User('Николай');
        }catch(error){
          console.log(error.toString().slice(0,85));
        }

        console.log('1.5.6 Функции высшего порядка');
        function highOrderFunction(func) {
            func();
        }
        highOrderFunction(() => console.log('Работает!'));

console.log('--------------------------------------------');

