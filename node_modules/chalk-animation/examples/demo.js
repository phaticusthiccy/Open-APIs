const chalkAnimation = require('..');

const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit\n';
const cls = `\u001B[2J\u001B[0;0H`;

const effects = ['rainbow', 'pulse', 'glitch', 'radar', 'neon', 'karaoke'];
console.log(cls);
console.log(str);

const i = setInterval(() => {
	if (effects.length === 0) {
		clearInterval(i);
		return;
	}
	const e = effects.shift();
	console.log(cls);
	setTimeout(() => {
		chalkAnimation[e](str);
	}, 500);
}, 7000);
