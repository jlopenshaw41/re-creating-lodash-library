const _ = {

  clamp(number, lower, upper) {
    
    let lowerClampedValue = Math.max(number, lower);
    
    let clampedValue = Math.min(lowerClampedValue, upper);
  
  return clampedValue;
  },

  inRange(number, start, end) {
  	if(end === undefined) {
  		end = start;
  		start = 0;
  	}

  	if(start > end) {
  		let temp = end;
  		end = start;
  		start = temp;
  	}

  	let isInRange = ((start <= number) && (number < end));

  	return isInRange;
},

  words(string) {
		let words = string.split(" ");
		return words;
	},

  pad(string, length) {

  	if(length <= string.length) {
  		return string;
  	}

  	let startPaddingLength = Math.floor((length - string.length)/2);

  	let endPaddingLength = length - string.length - startPaddingLength;

  	let space = ' ';

  	let paddedString = space.repeat(startPaddingLength) + string + space.repeat(endPaddingLength);

  	return paddedString;
  },

  has(object, key) {
    let hasValue = object[key];
    
    if(hasValue != undefined) {
      return true;
    } return false;
  },

  invert(object) {

    let invertedObject = {};

    for (const property in object) {

      let originalValue = object[property];
      invertedObject[originalValue] = property;
    }
    return invertedObject;

  },



};




// Do not write or modify code below this line.
module.exports = _;                                                                                      