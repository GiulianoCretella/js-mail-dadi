let app = document.querySelector('.app');
let row = document.createElement('div');
row.setAttribute('class', 'row g-3 pt-5 text-center');


        //  COMPUTER DOM 
const colComputer = document.createElement('div');
colComputer.setAttribute('class', 'col-5 display-6');

const computer = document.createElement('div');
computer.innerHTML +='Computer:';

const punteggioComputer = document.createElement('div');
punteggioComputer.setAttribute('class', 'row justify-content-center');

const computerPoint = document.createElement('div');
computerPoint.setAttribute('class', 'col-12 mt-3 dado');


            //   VS DOM 
const colVs = document.createElement('div');
colVs.setAttribute('class', 'col-2 display-6');



                // USER DOM 
const colUser = document.createElement('div');
colUser.setAttribute('class', 'col-5 display-6');

const user = document.createElement('div');
user.innerHTML += 'You:';

const punteggioUser = document.createElement('div');
punteggioUser.setAttribute('class', 'row  justify-content-center');

const userPoint = document.createElement('div');
userPoint.setAttribute('class', 'col-4 mt-3 dado');


            //    esito
const esito = document.createElement('div');
esito.setAttribute('class', 'row justify-content-center')

const esitoCol = document.createElement('div');
esitoCol.setAttribute('class', 'col-6 mt-5 display-6 rounded') 

let messaggioEsito;

let dadi = 1;
for( let i = 0; i < dadi; i++){
    
    let dadiComputer=[];
    for(a = 0; a < dadi; a++){
        let random = Math.floor(Math.random() * 6) + 1;
        dadiComputer.push(random)
    }
    console.log(`Computer:${dadiComputer}`);
    computerPoint.append(dadiComputer);

    let dadiUser=[];
    for(b = 0; b < dadi; b++){
        let random = Math.floor(Math.random() * 6) + 1;
        dadiUser.push(random)
    }
    console.log(`Tu:${dadiUser}`);
    userPoint.append(dadiUser);

    
    if(dadiComputer > dadiUser){
       messaggioEsito = 'Il computer ha vinto!'
       console.log(messaggioEsito);
       esitoCol.classList.add('esito-perso')
    } else if(dadiComputer < dadiUser){
       messaggioEsito = 'Hai vinto!'
       console.log(messaggioEsito);
       esitoCol.classList.add('esito-vinto')
    } else{
       messaggioEsito = 'Pareggio!'
       console.log(messaggioEsito);
       esitoCol.classList.add('esito-pareggio')
    }
    
    
}

app.append(row);
row.append(colComputer);
row.append(colVs);
row.append(colUser);

        //  Computer dom 
colComputer.append(computer);
computer.append(punteggioComputer);
punteggioComputer.append(computerPoint);

            // vs dom 
colVs.append('Vs')

        //    user dom 
colUser.append(user);
user.append(punteggioUser);
punteggioUser.append(userPoint);

            //   esito dom 
row.append(esito);
esito.append(esitoCol);
esitoCol.append(messaggioEsito);