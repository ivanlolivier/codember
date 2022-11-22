# Challenge 4: Dude, I lost my password

## Problem

A friend bought 5 BitCoins in 2008. The problem is that he had it in a digital wallet... and he doesn't remember the password!

He asked us for help. And he gave us some clues:

- It's a 5-digit password.
- The password has the number 5 repeated at least two times.
- The number to the right is always greater than or equal to the one on the left.

He gave us some examples:

- 55678 is correct, it fulfills everything
- 12555 is correct, it fulfills everything
- 55555 is correct, it fulfills everything
- 12345 is incorrect, it does not have the 5 repeated.
- 57775 is incorrect, the numbers do not go in increasing order

He says that the password is between the numbers 11098 and 98123. Can we tell him how many numbers fulfill those rules within that range?

## How to submit the solution

Send the solution with the command "submit", and the number of passwords that fulfill the criteria along with the password that is in the index 55 of the list of valid passwords, separated by a hyphen. For example:

For example, for 87 results and the password 35522 in position 55 it would be:

```
$ submit 87-35522
```
