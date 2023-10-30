const contenuto = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
    
    const nuovoParagraph = document.createElement("div");
    nuovoParagraph.innerHTML = `il valore e ${i}`;

    if(i==3) { nuovoParagraph.classList.add ("red")};

    
    container.append(nuovoParagraph);

    console.log(i);
    
}