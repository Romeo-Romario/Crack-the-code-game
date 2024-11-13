var colours = [
    "#00B3B3", // 0 - Darker Cyan
    "#A500A5", // 1 - Darker Magenta
    "#B3B300", // 2 - Darker Yellow
    "#CC8400", // 3 - Darker Orange
    "#28A828", // 4 - Darker Lime Green
    "#BF2B00", // 5 - Darker Bright Red
    "#007FBF", // 6 - Darker Deep Sky Blue
    "#BF0F7D", // 7 - Darker Bright Pink
    "#6F9F00", // 8 - Darker Chartreuse
    "#7A00A8"  // 9 - Darker Vibrant Purple
];

var divs = document.getElementsByClassName("colour-div");

export function generateRandomColors() {
    const divs = document.querySelectorAll('.colour-div');

    // Loop through each div, get its text content as a number, and set its background color
    divs.forEach(div => {
        const number = parseInt(div.innerText, 10);
        if (!isNaN(number) && number >= 0 && number <= 9) {
            div.style.backgroundColor = colours[number];
        }
    });
}
