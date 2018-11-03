export const merge = (...obj) => Object.assign({}, ...obj);

//set up keys and set values to 0 initially
//loop through range of character codes covering all codes
//character range from 1-9, a-z, a few special characters
const dict = []
for (var i= 48; i<91; i++){
	dict.push({char: String.fromCharCode(i), count:0});
};
//console.log(dict)

export function countCharacters(input){
//logic for counting character and setting the Key:value pair
	for(let i = 0; i< dict.length; i++){
		for(let j = 0; j < input.length; j++) {
			if(dict[i].char === input[j]){
				if(j < input.length){
					dict[i].count+=1
				}
			}
		}
	}
	//testing result
	//console.log(dict)
	//return filtered dictionary, excluding character counts of 0, sorting desc, handling for ties
	return dict.filter(c => c.count !== 0).sort((a,b) => b.count - a.count)
}
