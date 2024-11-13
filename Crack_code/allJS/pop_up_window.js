


// Right answer
let popup1 = document.getElementById("popup1");
let overlay = document.getElementById("overlay");
export function openPopup1(){
    popup1.classList.add("open-popup");
    overlay.style.display = "block";
}
function closePopup1(){
    popup1.classList.remove("open-popup");
    overlay.style.display = "none";
    location.reload();
}

// document.getElementById("check").addEventListener("click", openPopup1);
document.getElementById("closePopup1").addEventListener("click", closePopup1);


// Wrong Answer
let popup2 = document.getElementById("popup2");
export function openPopup2(){
    popup2.classList.add("open-popup2");
    overlay.style.display = "block";
    document.getElementById("check").disabled = true;
}
function closePopup2(){
    popup2.classList.remove("open-popup2");
    overlay.style.display = "none";
    document.getElementById("lock_button").disabled = false;
    document.getElementById("guiding_text").textContent = "To refresh the page press ->";
    document.getElementById("lock_button").addEventListener("click", () => {location.reload();});
    document.getElementById("lock_button").classList.remove("disabled");
}

document.getElementById("closePopup2").addEventListener("click", closePopup2);
