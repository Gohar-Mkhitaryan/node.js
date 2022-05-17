const a = 8;
const b = 12;
console.log(`a+b= ${a+b}`);

function hi(){
    console.log('Hello world!');
}

function afternoon(){
    console.log('Good afternoon');
}


function by(){
    console.log('Good by!');
}

const user = {
    name: 'Gohar',
    surname: 'Mkhitaryan',
    city: 'Vanadzor'
}
console.log(user.surname);



module.exports = {
    hi,
    afternoon,
    by,
    user
};
