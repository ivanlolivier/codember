import fs from 'node:fs';

const REQUIRED_FIELD_NAMES = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

const data = fs.readFileSync('users.txt', 'utf8');

const users = data
  .split('\n\n')
  .map((line) => line.replaceAll('\n', ' ').split(/\s+/))
  .map(userArr => Object.fromEntries(userArr.map(u => u.split(':'))));


const validUsers = users.filter(user => REQUIRED_FIELD_NAMES.every(fieldName => fieldName in user));

console.log('====> ', `submit ${validUsers.length}${validUsers.at(-1).usr}`);