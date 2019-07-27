//  of 3, print the string "Loopy" instead of the number.
//  of 4, print the string "Lighthouse" instead of the number.
//  of both 3 and 4, print the string "LoopyLighthouse" instead of the number.

for ( let i = 100; i <= 200; i++) {
	i % 3 === 0 && i % 4 === 0 ? console.log('LoopyLighthouse') :
	i % 3 === 0 ? console.log('Loopy') : 
	i % 4 === 0 ? console.log('Lighthouse') :
	console.log(i);
}