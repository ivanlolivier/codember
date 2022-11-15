const ENCODED_MESSAGE =	'11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101';
const ASCII_FOR_A = 97;
const ASCII_FOR_Z = 122;

const asciiChars = [];
let currentAscii = '';

for (let char of ENCODED_MESSAGE) {
 if (char === ' ') {
  asciiChars.push(char);
  continue;
 }

 currentAscii += char;
	if (+currentAscii >= ASCII_FOR_A && +currentAscii <= ASCII_FOR_Z) {
		asciiChars.push(currentAscii);
		currentAscii = '';
	}
}

const decodedMessage = asciiChars.map((ascii) => (ascii === ' ' ? ' ' : String.fromCharCode(ascii))).join('')

console.log(`submit ${decodedMessage}`);