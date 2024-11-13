import * as fi from "./Functions.js"
import * as crack from "./crack.js"
import * as crackBox from "./crack_box.js"
import * as popup from "./pop_up_window.js"


// var main_key = [];
let main_key  = [];
export function task_creation(){
    //Part 1 choose the numbers
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    var set_numbers = [];
    var el = 0;
    var i = 0;
    while (i<8){
        el = numbers[fi.getRndInteger(0, numbers.length)];
        if (!set_numbers.includes(el)){
            set_numbers.push(el);
            i++;
        }
    }
    
    
    // Conditions
    var condition1 = true;
    var condition2 = true;
    var condition3 = true;
    var condition4 = true;
    var condition5 = true;
    
    //Genarate main key
    
    main_key = fi.generate_numbers(set_numbers);
    // console.log(main_key);
    // Generate lists for condions
    var num_condition1 = [];
    var num_condition2 = [];
    var num_condition3 = [];
    var num_condition4 = [];
    var num_condition5 = [];
    
    
    var temp_numbers = [];
    
    var indexS = 0;
    var indexR = 0;
    
    var special_number = -1;
    
    
    
    
    while(condition1 === true || condition2 === true || condition3 === true || condition4 === true || condition5 === true){
        temp_numbers = fi.generate_numbers(set_numbers);
        indexS = fi.check_collisions(temp_numbers, main_key);
        indexR = fi.check_availability(temp_numbers, main_key);
        
        if(indexS == 3){continue;}
        else if (indexS === 2) {continue;} 
        else if (indexS === 1 && indexR === 2) {continue;}
        
        else if ((indexS === 0 && indexR === 2) && condition3 === true) {
            num_condition3 = [...temp_numbers]; // Create a copy of temp_numbers
            condition3 = false;
        }
        
        // Check condition 1
        else if ((indexS === 1 && indexR === 1) && condition1 === true) {
            num_condition1 = temp_numbers;
            condition1 = false;
        }
        
        // Check condition 2
        else if ((indexS === 0 && indexR === 1) && special_number === -1 && condition2 === true) {
            special_number = fi.find_available_element(temp_numbers, main_key);
            num_condition2 = temp_numbers;
            condition2 = false;
        }
        
        // Check condition 5
        else if ((indexS === 0 && indexR === 1) && (special_number !== -1 && special_number !== fi.find_available_element(temp_numbers, main_key)) && condition5 === true) {
            num_condition5 = temp_numbers;
            condition5 = false;
        }
        
        // Check condition 4
        else if ((indexR === 0) && condition4 === true) {
            num_condition4 = temp_numbers;
            condition4 = false;
        }
    }
    
    
    //Initialize items on the web page
    
    //1. Lists of dragable items
    var element10 = document.getElementById("10");
    var element11 = document.getElementById("11");
    var element12 = document.getElementById("12");
    var element13 = document.getElementById("13");
    var element14 = document.getElementById("14");
    var element15 = document.getElementById("15");
    var element16 = document.getElementById("16");  
    var element17 = document.getElementById("17");
    var element18 = document.getElementById("18");
    var element19 = document.getElementById("19");
    
    element10.innerText = "0";
    element11.innerText = "1";
    element12.innerText = "2";
    element13.innerText = "3";
    element14.innerText = "4";
    element15.innerText = "5";
    element16.innerText = "6";
    element17.innerText = "7";
    element18.innerText = "8";
        element19.innerText = "9";
        
        
        //2. First row first column numbers 211 212 213 and message 21
        
        var element211 = document.getElementById("211");
        var element212 = document.getElementById("212");
        var element213 = document.getElementById("213");
        var element21  = document.getElementById("21");
        
        element211.innerText = `${num_condition1[0]}`;
        element212.innerText = `${num_condition1[1]}`;
        element213.innerText = `${num_condition1[2]}`;
        element21.innerText = `${fi._1}`;
        //3. First row second column numbers 221 222 223 and message 22
        
        var element221 = document.getElementById("221");
        var element222 = document.getElementById("222");
        var element223 = document.getElementById("223");
        var element22 = document.getElementById("22");
        
        element221.innerText = `${num_condition2[0]}`;
        element222.innerText = `${num_condition2[1]}`;
        element223.innerText = `${num_condition2[2]}`;
        element22.innerText = `${fi._2_5}`;
        //4. First row third column numbers 231 232 233 and meassage 23
        
        var element231 = document.getElementById("231");
        var element232 = document.getElementById("232");
        var element233 = document.getElementById("233");
        var element23  = document.getElementById("23");
        
        element231.innerText = `${num_condition3[0]}`;
        element232.innerText = `${num_condition3[1]}`;
        element233.innerText = `${num_condition3[2]}`;
        element23.innerText = `${fi._3}`;
        //5. Second row first column numbers 311 312 313 and meassage 31
        
        var element311 = document.getElementById("311");
        var element312 = document.getElementById("312");
        var element313 = document.getElementById("313");
        var element31 = document.getElementById("31");
        
        element311.innerText = `${num_condition4[0]}`;
        element312.innerText = `${num_condition4[1]}`;
        element313.innerText = `${num_condition4[2]}`;
        element31.innerText = `${fi._4}`;
        //6. Second row second column numbers 321 322 323 and meassage 32
        var element321 = document.getElementById("321");
        var element322 = document.getElementById("322");
        var element323 = document.getElementById("323");
        var element32 = document.getElementById("32");
        
        element321.innerText = `${num_condition5[0]}`;
        element322.innerText = `${num_condition5[1]}`;
        element323.innerText = `${num_condition5[2]}`;
        element32.innerText = `${fi._2_5}`;
        
        // Activate other functions
        crack.generateRandomColors();
        crackBox.setupDragAndDrop();
        
        return main_key;
    }
    
// document.querySelector('.lock_button').addEventListener('click', task_creation);
document.addEventListener('DOMContentLoaded', () => {
    main_key = task_creation();
    console.log(main_key);
});


function check_answer(){
    // Get numbers in top box
    const topDiv = document.getElementById('top');
    const numbersArray = Array.from(topDiv.children).map(child => parseInt(child.textContent, 10));

    if(fi.arraysEqual(numbersArray, main_key)){
        popup.openPopup1();
    }
    else{
        document.getElementById("right_code").textContent = main_key.join(' ');
        popup.openPopup2();
    }}


document.getElementById("check").addEventListener("click", check_answer);

        