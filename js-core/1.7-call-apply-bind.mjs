// 1.7 call, apply, bind.
  // Метод функции call
    const user = {
      firstName: 'Tom',
      lastName: 'Dance'
    };

    const admin = {
      firstName: 'Kate',
      lastName: 'Hudson'
    };

    function getFullData(position, salary) {
      console.log(`${this && this.firstName} ${this && this.lastName} -  ${position} : ${salary}`);
    }

    getFullData('manager', 1000);
    user.getFullData = getFullData;
    user.getFullData('junior dev', 500);

    console.log('1.7.1 call');
    getFullData.call(user, 'BA', 1500);
    getFullData.call(admin, 'PO', 2000);

  // Метод функции apply
    console.log('1.7.2 apply');
    getFullData.apply(admin, ['senior dev', 2500]);

  // Метод функции bind
    console.log('1.7.3 bind');

    const customer = {
      firstName: 'Nick',
      lastName: 'Jonson',
      getFullName() {
        console.log(`${this && this.firstName} ${this && this.lastName}`);
      }
    };
    setTimeout(customer.getFullName, 1000);

    customer.getFullName = customer.getFullName.bind(customer);
    setTimeout(customer.getFullName, 2000);

    setTimeout(()=> {
      console.log('--------------------------------------------');
    }, 2000);


