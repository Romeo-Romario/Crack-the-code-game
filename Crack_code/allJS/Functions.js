
Math.floor(Math.random() * 10);// Returns a random integer from 0 to 9:

export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


export function check_collisions(tryNumbers, keyNumbers){
    var result = 0;
    for(var i = 0; i < 3; i++){
        if(keyNumbers[i] == tryNumbers[i]){
            result++;
        }
    }
    return result;
}

export function check_availability(try_numbers, key_numbers){
    var result = 0
    for(var i = 0; i < 3; i++){
        if(key_numbers.includes(try_numbers[i])){
            result = result + 1}
    }
    return result
}


export function generate_numbers(set_numbers){
    var x = 0;
    var y = 0;
    var z = 0;
    while(x === y || y === z || x===z){
        x = set_numbers[getRndInteger(0, set_numbers.length)];
        y = set_numbers[getRndInteger(0, set_numbers.length)];
        z = set_numbers[getRndInteger(0, set_numbers.length)];

    }
    return [x,y,z];
}

export function find_available_element(try_numbers, key_numbers){
    for(var i=0; i < 3;i++){
        if(key_numbers.includes(try_numbers[i])){
            return try_numbers[i];}
    }
}

export function arraysEqual(a, b) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}

export var _2_5 = "One number is correct\nbut wrongly placed";
export var _3 = "Two numbers are correct\nbut wrongly placed";
export var _1 = "One number is correct\nand well placed";
export var _4 = "Nothing is correct";