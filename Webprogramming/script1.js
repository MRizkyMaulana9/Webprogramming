const h1 = document.getElementById("title");
h1.style.backgroundColor = "lightgreen";
h1.style.color = "white";

const p = document.getElementsByTagName("p"); // untuk memillih paragraf bisa menggunakan index contoh  (0) untuk paragraf ke satu
for (let i of p) {
  i.style.backgroundColor = "lightblue";
}
//p.style.backgroundColor = "lightblue"
const pquery = document.querySelector("section#section2 p");
pquery.style.backgroundColor = "orange";
pquery.innerHTML = "Diubah Lewat JS DOM";

const li = document.querySelectorAll("section#section2 ul li");
for (let i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "pink";
}

const addp = document.createElement("p");
const text = document.createTextNode("tambah paragraf");

addp.appendChild(text);

const sl = document.getElementById("section1");
sl.appendChild(addp);

//event
let count = 0;
/*let changeToRed = () => {
  p[0].style.backgroundColor = "red";
};*/
let changeToRed = () => {
  count % 2 == 0
    ? (p[0].style.backgroundColor = "red")
    : (p[0].style.backgroundColor = "lightblue");
  count++;
};

p[2].addEventListener("mouseenter", function () {
  p[2].style.backgroundColor = "yellow";
});

p[2].addEventListener("mouseleave", function () {
  p[2].style.backgroundColor = "lightblue";
});

const jumlah = document.getElementById("hitung");
jumlah.addEventListener("click", function () {
  let b1 = document.getElementById("b1").value;
  let b2 = document.getElementById("b2").value;
  let tambah = parseInt(b1) + parseInt(b2);
  const hasil = document.getElementById("hasil");
  hasil.innerHTML = tambah;
});
