const chalkAnimation = require('.');

const logo = [
	'  __',
	'<(o )___',
	' ( ._> /',
	'  `---\''
].join('\n');

const cls = `\u001B[2J\u001B[0;0H`;

const rainbow = chalkAnimation.rainbow(logo).stop(); // Don't start the animation

setInterval(() => {
	console.log(cls + rainbow.frame());
}, 15);
