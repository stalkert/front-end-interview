// 1.6 Замыкание
  // Замыкание - это функция которая имеет доступ к своим внешним переменным.
  // Почти все функции в JavaScript являются замыканиями( кроме созданных через new Function())
  // Функции, блоки кода, скрипты имеют связанный с ними внутренний (недоступный нам) объект,
  // который называется лексическим окружением (LexicalEnvironment - далее LE)
  // При выполнении (функции, etc) создается LE(внутренний объект),
  // в который записываюся параметры, локальные переменные и ссылка на внешний LE(то место,
  // где создана функция)
    console.log('1.6.1 замыкание')
    let company = 'Luxoft';

    function showSalary(name, fee) {
      console.log(`В ${company} ${name} получал ${fee}`);
    }// при создании ссылка на внешний LA сохраняется в скрытом поле объекта функии [[Environment]]

    company = 'EPAM';

    showSalary('Георгий', 2500);

  // Замыкание - пример с вложенной функцией
    console.log('1.6.2 замыкание - пример с вложенной функцией')
    function makeTimer() {
      let time = 0;
      return function() {
        return ++time;
      };
    }

    const time = makeTimer();
     const intervalRef = setInterval(()=> {
       const seconds = time();
       if(seconds < 6) {
        console.log(`Прошло ${seconds} секунд`)
       } else {
         clearInterval(intervalRef);
         console.log(makeTimer()());
         console.log('--------------------------------------------');
       }
    },1000);


