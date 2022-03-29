// A[creo array con mail] --> B[chiedo mail al cliente]
// B{la mail è presente nella lista?} -->|si| C[ne confermo la presenza]
// B -->|no| D[nego la presenza]
// C & D --> Fine
let app = document.querySelector('.app');
let listaEmail = ['giulianocretella.1@gmail.com', 'ryan45@gmail.com', 'franco56@gmail.com', 'francesca87@gmail.com'] 

const userEmail = prompt('Inserisci e-mail:')
let trovata = false;
let indextrovato;
let messaggio;

for(let i = 0; i < listaEmail.length; i++){
    if(listaEmail[i] === userEmail){
        trovata = true;
        indextrovato = i;
    }
    if(trovata){
        messaggio = (`La tua email: ${userEmail} è presente nella piattaforma!`)
    }else {
        messaggio = (`La tua email: ${userEmail} non è presente nella piattaforma!`)
    }
}
app.append(messaggio);