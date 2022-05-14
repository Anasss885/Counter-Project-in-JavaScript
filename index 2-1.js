// set inital value to zero
let cnt = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            cnt -= 1;
        } else if (styles.contains("increase")) {
            cnt += 1;
        } else {
            cnt = 0;
        }
        value.textContent = cnt;
    });
});