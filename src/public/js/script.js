function salvarNome(){
    const nome = document.getElementById("nomeUser").value;
    localStorage.setItem("nome", nome);
    window.location.href = "../views/dashboard.html"
}

function carregarHorario(){
    const nomeUsuario = localStorage.getItem("nome");
    const data = new Date();
    const dataAtual = data.toLocaleString();
    let datas = document.getElementById("data");
    let img = document.createElement('img');
    let msg = document.getElementById("msg");
    let foto = document.getElementById("foto");
    let hora = data.getHours();
    if(hora >= 6 && hora <= 18){
        msg.innerHTML = `Bom dia ${nomeUsuario}!`
        datas.innerHTML = `${dataAtual}`
        img.setAttribute('src', '../public/img/sol.png');
    }else{

        msg.innerHTML = `Boa noite ${nomeUsuario}!`
        img.setAttribute('src', '../public/img/sol.png');
        datas.innerHTML = `${dataAtual}`
    }
    foto.appendChild(img);

}


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listaDiv");

function addItem(){
    const tarefa = inputBox.value.trim();
    if(!tarefa){
        inputBox.value = "Insira uma tarefa válida!"
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
    <label>
    <input class="form-check-input" type="checkbox">
    <span>${tarefa}</span>
    </label>
    <span class="delete-btn">Excluir</span>`;

    listContainer.appendChild(li);
    inputBox.value = "";

    const checkbox = li.querySelector("input");
    const taskSpan = li.querySelector("span");
    const deleteBtn = li.querySelector(".delete-btn");

    checkbox.addEventListener("click", function () {
        li.classList.toggle("completo", checkbox.checked);
        attContadores();
    });

    

    const contadorCompletas = document.getElementById("completas");
    const contandoIncompletas = document.getElementById("incompletas");

    function attContadores() {
        const completas = document.querySelectorAll(".completo").length;
        const incompletas = document.querySelectorAll("li:not(.completo)").length;

        contadorCompletas.textContent = completas;
        contandoIncompletas.textContent = incompletas;


    }

    deleteBtn.addEventListener("click", function() {
            li.remove();
            attContadores();
        
    });
    
}
