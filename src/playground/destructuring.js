//
//  OBJECT DESTRUCTURING
//

const person = {
    name: 'Diego',
    age: 24,
    location: {
        city: 'Edinburgh',
        temp: 4
    }
};
// it can put a default with = in case it doesnt exist
const {name = 'Anon', age} = person;
console.log(`${name} is ${age},`);
// change the name in the object with :
const {temp: temperature, city} = person.location;
console.log(`It is ${temperature} in ${city}.`);

//
// ARRAY DESTRUCTURING
//

const address = ['13 randolph lane', 'Edinburgh','Scotland', 'EH37TD'];
// PUT commas where you dont want an item of the array
// And you can also put default value with =
const [house, citi, , post = 'Anon'] = address;

console.log(`You are in ${house} en ${citi}`);