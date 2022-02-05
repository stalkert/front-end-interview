// 1.2 Передача по значению, передача по ссылке.
//   Примитивы копируются по значению.
let user = 'Yuriy';
let admin = user;

function passByValue() {
  console.log('1.2.1 Передача по значению ');
  console.log('user: ', user);
  console.log('admin: ', admin);

  user = 'Alex';
  console.log('user: ', user);
  console.log('admin: ', admin);
}
passByValue();

//   Объекты копируются по ссылке
let customer = {
  name: "Андрей"
};
let defaultCustomer = customer;

function passByLink() {
  console.log('1.2.2 Передача по ссылке ');
  console.log('customer: ', customer);
  console.log('defaultCustomer: ', defaultCustomer);

  customer.name = 'Иван';
  console.log('customer: ', customer);
  console.log('defaultCustomer: ', defaultCustomer);

  console.log('------------------------------------');
}
passByLink();
