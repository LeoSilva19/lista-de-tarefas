let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa(){
    // PEGAR VALOR DO INPUT
    let valorInput = input.value;

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){

        ++contador;

        let novoItem = `
            <div id="${contador}" class="item">
            <div class="item-icone">
                <i class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete" ><i class="mdi mdi-delete"></i> Deletar</button>
            </div>
        </div>
        `;

        // ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;

        // ZERAR E FOCAR CAMPO
        input.value = "";
        input.focus();
    }
}

function deletar(id){
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

input.addEventListener("keyup", function(event){
    // SE TECLOU ENTER (13)
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})