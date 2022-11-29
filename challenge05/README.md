# Challenge 5: Battle Royale of libraries and frameworks

## Problem

There are so many frameworks and libraries that we don't know what to use. So a committee has decided to make a kind of Hunger Games to decide which technology stays.

They have put all the technologies in a circle in a random order. The technology in index 0 starts killing the one that is just to the right (index + 1).

The next turn is for the next technology alive that is to the right of the one that just died. And so on until only one remains. Look at this example of a group of 10 technologies, step by step:

```
         5
      6     4
   7           3
   8           2
      9     1
         0
```

- 0 kills 1
- 2 kills 3
- 4 kills 5
- 6 kills 7
- 8 kills 9

```
         X
     6      4
   X           X
   8           2
      X     X
         0
```

- 0 kills 2
- 4 kills 6
- 8 kills 0

```
         X
     X      4
   X           X
   8           X
      X     X
         X
```

- 4 kills 8

```
         X
     X      4
   X           X
   X           X
      X     X
         X
```

- The technology in index 4 is the one that survives.

Now, to prove that we are capable of creating an algorithm that works, we have the list of patrons of the midudev community: https://codember.dev/mecenas.json

You have to create an algorithm that tells us which user would survive using the same system.

## How to submit the solution

Send the solution with the command "submit", and the index of the person who survives and their username, separated by a hyphen.

For example, if the user who survives is facundopacua and is in index 8 it would be:

```
$ submit facundocapua-8
```
