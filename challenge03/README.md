# Challenge 3: Zebra of colors

## Problem

TMChein is getting ready for the holidays and wants to start decorating the house with Christmas lights.

He wants to buy some fancy light but his favorite ones are those that have two colors that alternate. Like a two-color zebra.

He has represented the lights as Arrays where each position is a color. Now, he wants to know which lights have the longest zebra and what the last color of that color sequence is. For example:

- ['red', 'blue', 'red', 'blue', 'green'] -> 4, blue
- ['green', 'red', 'blue', 'gray'] -> 2, gray
- ['blue', 'blue', 'blue', 'blue'] -> 1, blue
- ['red', 'green', 'red', 'green', 'red', 'green'] -> 6, green
- ['blue', 'red', 'blue', 'red', 'gray'] -> 4, red
- ['red', 'red', 'blue', 'red', 'red', 'red', 'green'] -> 3, red
- ['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green'] -> 6, green

Keep in mind that he only wants to know the length of when two colors are alternating. Once the alternation of the two colors is broken, it stops counting.

Now that you know this, https://codember.dev/colors.txt

Remember that a color zebra is when two colors alternate one after the other. If a color is repeated in the next position or a third color appears, then it stops counting.

What we want to calculate is the longest color zebra and the last color of that color sequence.

## How to submit the solution

Use the command "submit" to send your solution. For example:

For example:

```
$ submit 62@red
```
