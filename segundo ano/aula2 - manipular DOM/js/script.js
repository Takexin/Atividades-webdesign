document.getElementById("adicionar").addEventListener("click", ()=>{
    let inputTarefa = document.getElementById("novaTarefa");
    let tarefaTexto = inputTarefa.value.trim(); //retira space left
    
    if(tarefaTexto === "")return; //sair da função

    let lista = document.getElementById("listaTarefas");
    let item = document.createElement("li");
    item.textContent = tarefaTexto;

    let btnConcluir = document.createElement("button");
    btnConcluir.textContent = "Concluir";
    btnConcluir.addEventListener("click", ()=>{
        item.classList.toggle("concluida");
    });

    let btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.addEventListener("click", ()=>{
        lista.removeChild(item);
    });

    item.appendChild(btnConcluir);
    item.appendChild(btnRemover);
    lista.appendChild(item)
});

