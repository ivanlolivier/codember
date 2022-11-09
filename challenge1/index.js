import fs from 'node:fs';

const REQUIRED_FIELD_NAMES = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

const data = fs.readFileSync('users.txt', 'utf8');

const users = data
  //create an array with 1 item per user (split on double newline)
  .split('\n\n')
  // getting rid of newlines inside a user and splitting by spaces+
  .map((rawUser) => rawUser.replaceAll('\n', ' ').split(/\s+/))
  // splitting each user part (ie: age:21) into key/value pairs and creating an object
  .map(userArr => Object.fromEntries(userArr.map(u => u.split(':'))));

const validUsers = users.filter(user => REQUIRED_FIELD_NAMES.every(fieldName => fieldName in user));

console.log('====> ', `submit ${validUsers.length}${validUsers.at(-1).usr}`);