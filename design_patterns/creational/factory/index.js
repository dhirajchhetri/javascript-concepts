
const Employee = require('./Employee');
var userFactory = require('./UserFactory');
var alex =  userFactory('Alex Banks', 100);
var eve =  userFactory('Eve Porcello', 100, 'employee' ,'This and That');

console.log( alex.toString() )
console.log( eve.toString() )
