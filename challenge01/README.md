# Challenge 1: Fix Twitter!

## Problem

Twitter has been bought and they want to remove the bots. They have asked for your help to detect the number of users in their database that have corrupted data.

The database is very old and it's in a strange format. The profiles require the following data:

- usr: username
- eme: email
- psw: password
- age: age
- loc: location
- fll: number of followers

Everything is in a file where the user data is a sequence of `key:value` pairs, which can be on the same line or separated by lines, and each user is separated by a newline. Be careful because it can be all mixed up!

## Input example:

```
usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82

fll:111 eme:yrfa@gmail.com usr:@codember psw:123456 age:21 loc:World

psw:11133 loc:Canary fll:333 usr:@pheralb eme:pheralb@gmail.com

usr:@itziar age:19 loc:isle psw:aaa fll:222 eme:itzi@gmail.com
```

- The first user IS valid. It has all the fields.
- The second user IS valid. It has all the fields.
- The third user IS NOT valid. It is missing the `age` field.
- The fourth user IS valid. It has all the fields.

Now that you know this, use this input to detect the incorrect users: https://codember.dev/users.txt

## Hints
- The data can be in any order.
- The data can be on the same line or separated by lines.
- The users are separated by a blank newline.
- The users can be repeated, but it doesn't matter, they are still valid.
- There can be data that is not necessary for the user but that does not make them invalid.

## How to submit the solution
Use the "submit" command to send your solution with the number of correct users + the name of the last valid user.

For example:
```
$ submit 482@midudev
```
