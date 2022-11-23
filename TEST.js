const person = {
  name: 'Vikram',
};

console.log('const object before modifications:', person);

person.age = 25;
person.address = {
  house_no: 'E-85',
  floor: 0,
  colony: 'DDA Flats, EKta Apartments',
  landmark: 'Press Enclave',
  locality: 'Saket',
  district: 'South Delhi',
  city: 'New Delhi',
  state: 'Delhi',
  country: 'India',
};

console.log('\n\nconst object after modifications:', person);
console.log('\n\nThus, we can say that const objects are allowed modifications');
