const b = document.querySelector("#bulb");
const btn = document.querySelector("#switchBtn");

let flag = 0;
btn.addEventListener('click', () => {
    if(flag === 0)
    {
        b.style.backgroundColor = "yellow";
        btn.textContent = "Turn Off";
        btn.classList.remove("onBtn");
        btn.classList.add("offBtn");
        flag = 1;
    }
    else
    {
        b.style.backgroundColor = "#b7b9c0";
        btn.textContent = "Turn On";
        btn.classList.remove("offBtn")
        btn.classList.add("onBtn");
        flag = 0;
    }
})