const changeColor = () => {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);
   document.body.style.backgroundColor = `hsl(${h}deg, ${s}%, ${l}%)`;
}

const Btn = document.getElementById('change');
Btn.addEventListener('click', changeColor);


