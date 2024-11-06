let itens =  JSON.parse(localStorage.getItem('itens')) || [];


document.getElementById("send").onclick = function () {
    const name = document.getElementById("name").value;

    const item = {
        name: name,
    };

    itens.push(item);
    atualiza();
    salva();
}


function apaga(posicao) {
    itens.splice(posicao, 1);
    atualiza();
    salva();
}


function apagaTodos() {
    itens = [];
    atualiza();
    salva();
}


function atualiza() {
    const lista = document.getElementById("list");
    list.innerHTML = ``;

    itens.forEach((titulo, posicao) => {
        const novo = document.createElement('div');
        novo.className = 'col-md-4'; 
        novo.innerHTML = `
            <div class="card mb-3">
              <img src="https://picsum.photos/200/100?random=${posicao}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${titulo.name}</h5>
                <button class="btn btn-danger" onclick="apaga(${posicao})">Apagar</button>
              </div>
            </div>
        `;
        novo.classList.add('titulo-card');

        lista.appendChild(novo);
    });
    salva();
}


function salva() {
    localStorage.setItem('itens', JSON.stringify(itens));
}


document.addEventListener('DOMContentLoaded', (event) => {
    atualiza();
});

document.getElementById('deleteAll').onclick = apagaTodos;