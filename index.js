
function breakOut(array, changeValue, stopValue){
	let len = array.length;
	for(let i = 0; i < len; i++){
		if(array[i] === stopValue){
			break;
		}
		else{
			array[i] = changeValue;
		}
	}
	return array;
}

function keepGoing(array, changeValue, skipValue){
	let len = array.length;
	for(let i = 0; i < len; i++){
		if(array[i] === skipValue){
			continue;
		}
		else{
			array[i] = changeValue;
		}
	}
	return array;
}

function findBy(array, findFn){
	let len = array.length;
	for(let i = 0; i < len; i++){
		if(findFn(array[i])){
			return array[i];
		}
	}
	return null;
}