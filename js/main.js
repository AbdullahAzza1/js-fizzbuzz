const contenuto = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
    
    const contenuto = document.createElement("div");
    contenuto.innerHTML = `il valore e ${i}`;

    if(i==3) { contenuto.classList.add ("Fizz")};

    
    container.append(contenuto);

    console.log(i);
    
}