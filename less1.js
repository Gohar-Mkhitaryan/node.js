console.log('first lesson node.js');
const car = {
    make: 'Ford',
    mode: 'Mustang',
    color: 'white',
    year: 2016
};
for( let key in car){
    console.log(car[key]);
}

const myHonda = {
    color: "red",
    wheels: 4,
    engine: {
      cylinders: 4,
      size: 2.2
    }
  };
console.log( myHonda.engine.cylinders );

// function getAge(admin){
//     return admin.age;
// };
// const a = getAge ({age: 27});
// console.log(a);


module.exports = {
    car,
    myHonda,
    //getAge
}