import fs from 'fs';

const REQUIRED_FIELD_NAMES = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

const data = fs.readFileSync('users.txt', 'utf8');

const users = data
  .split('\n\n')
  .map((line) => line.replaceAll('\n', ' ').split(/\s+/))
  .map(userArr => {
    const userObj = {};
    for (const userItem of userArr) {
      const [key, value] = userItem.split(':');
      userObj[key] = value;
    }
    return userObj;
  });


const validUsers = users.filter(user => REQUIRED_FIELD_NAMES.every(fieldName => fieldName in user));

console.log('====> ', `submit ${validUsers.length}${validUsers.at(-1).usr}`);