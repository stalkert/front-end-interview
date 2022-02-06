//1.4 var , const, let
  // var (устаревший способ объявления переменных)
    // Всплывает (можно обратиться до объявления)
      console.log('1.4.1 var');
      console.log(value);
      var value = 7;
      console.log(value);

    // Видна снаружи блока или цикла for(;;){}
      if(value > 0) {
        var isVariableVisible = true;
      }
      console.log(`Переменная, объявленная при помощи var, 
      внутри блока if, видна снаружи: `, isVariableVisible);

    // Можно объявить дважды
      console.log('Можно объявить дважды');
      var message = 'first';
      var message;
      console.log(message);

  // let
    // Не всплывает
    console.log('1.4.2 let');
    try {
      console.log(letVariable);
    }catch(error) {
      console.log(error.toString().slice(0,66));
    }
    let letVariable = 'Сейчас ок';
    console.log(letVariable);

    // Есть блочная видимость
      if(value > 0) {
        let isVisibleOnlyInside = true;
        console.log(`Переменная, объявленная при помощи let,
        внутри блока if, видна только внутри: `, isVisibleOnlyInside);
      }

      try {
        console.log(isVisibleOnlyInside);
      }catch(error) {
        console.log(error.toString().slice(0,49));
      }

    // Нельзя объявить дважды
    console.log('let нельзя объявить дважды');
    let order = 1;
    // let order = 2;
    console.log(order);

  // const
    // Способ создать константу (нельзя менять значение)
      console.log('1.4.3 const');
      console.log('Обязательно присвоить значение во время объявления');
      // const uninitializedVariable;
      try {
        const unchangedVariable = 'Константа';
        unchangedVariable = 'Пробуем поменять константу';
      }catch(error) {
        console.log(error.toString().slice(0,49));
      }

    // Все остальное как у let
      // Не всплывает
      // Есть блочная видимость
      // Нельзя объявить дважды
