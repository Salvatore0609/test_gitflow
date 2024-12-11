//INSERIRE NOME TRAMITE MANIPOLAZIONE DEL FORM E FARE CONTROLLO ERRORI

let btn = document.querySelectorAll("form button")
console.log(btn)
let btnOnclick = btn[0];

let forms = document.forms;
console.dir(forms[0])

//logica che accade dopo che io clicco (messaggio di errore oppure no)
let btnSubmit = forms[0].elements[1];
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let name = document.querySelector('form input[name="firstname"]');
    if (name.value.length === 0 || name.value.length <= 2) {
        viewError(name, "Inserisci un valore con almeno 3 caratteri");
    } else {
        // Nasconde il messaggio di errore (se presente)
        let p = name.nextElementSibling;
        p.style.display = "none";

        addUser();
    }
});

//per il meggio d'errore
function viewError(nodo, txt) {
    let p = nodo.nextElementSibling;
    p.style.textAlign = "center";
    p.style.color = "red";
    p.innerText = txt;
    p.style.display = "inlineBlock"; //mostra il messaggio di errore
}

//INSERIRE NOME TRAMITE MANIPOLAZIONE DEL FORM E FARE CONTROLLO ERRORI

//AGGIUNGERE NOME ------------------------------------------------------------
let users = []

function addUser() {
    let nodeListInput = document.querySelectorAll('header form input')

    let obj = {
        firstName: nodeListInput[0].value,
        /* lastName: nodeListInput[1].value,
        city: nodeListInput[2].value,
        email: nodeListInput[3].value */
    }
    users.push(obj)

    userListCreated()
}

function userListCreated() {
    let listNode = document.querySelector('main section')
    listNode.innerHTML = '';
    let lo = document.createElement('ol');
    users.forEach((ele, i) => {
        let li = document.createElement('li');
        //li.innerText = ele.firstName + ' ' + ele.lastName
        //li.innerHTML = ele.firstName + ' ' + ele.lastName + '<span><button onclick="removeUser('+i+')">X</button></span>'
        li.innerHTML = `${ele.firstName} <span><button onclick="removeUser(${i})">X</button></span>`
        lo.appendChild(li)


    })
    listNode.appendChild(lo);

    //logica per barrare il nome per conferma
    completedElement()
}

//AGGIUNGERE NOME ------------------------------------------------------------

//BARRARE NOME ---------------------------------------------------------------
// Funzione per gestire il click sui nomi della lista
function completedElement() {
    let listElements = document.querySelectorAll('main section ol li');
    listElements.forEach(ele => {
        ele.addEventListener('click', (e) => {
            // Controlla se l'elemento è già barrato
            if (!ele.style.textDecoration === 'line-through') {
                // Rimuovi lo stile barrato
                ele.style.textDecoration = 'none';
            } else {
                // Applica lo stile barrato
                ele.style.textDecoration = 'line-through';
            }
        });
    });
}
//BARRARE NOME ---------------------------------------------------------------

//RIMUOVERE CON X ------------------------------------------------------------
function removeUser(index) {
    users.splice(index, 1)
    userListCreated()
}
//RIMUOVERE CON X ------------------------------------------------------------



//soluzione della collega
/* 

HTML
----------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>La mia To-Do List</h1>
        <div class="input-container">
            <input type="text" id="task-input" placeholder="Aggiungi un nuovo task">
            <button id="add-task"> Aggiungi </button>
        </div>

        <ul id="task-list"></ul>
    </div>
    <script src="logica.js"></script>
</body>
</html>




JS
--------
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.classList.add('task');

    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('click', function(e){
     //span.style.textDecoration = 'lineThrough'
      // console.log(e.target) 
       e.target.style.textDecoration = 'line-through'
       e.target.style.color = 'red'
    })

    const deleteButton = document.createElement('button');

    deleteButton.style.float = 'right'
    deleteButton.textContent = 'Elimina';
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
    })


    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li)
    taskInput.value = '';
}
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (event){
    if (event.key === 'Enter') {
        addTask(); 
    }
});

 */