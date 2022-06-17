/* Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
BONUS:
Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente. */

// -------------------------------------------------------------------------
// ANALISI
// -------------------------------------------------------------------------

// creo array con oggetti, ogni oggetto rappresenta un membro e avrà chiavi per Nome, Ruolo e Foto
// per ogni elementi dell-array stampo una card secondo il template nel DOM usando while per gestire futuri input
// scrivere funzione per creare template
// alla pressione del tasto Add le informazioni degli input dati nuovo membro team sono raccolte in un oggetto
// che viene aggiunto all'array con tutti i membri del team

// -------------------------------------------------------------------------

// variabile target dentro cui appendere le card
const teamContainer = document.querySelector('.team-container');
// variabile per bottone Add
const addBtn = document.getElementById('addMemberButton');

// array che contiene i membri del team

const teamMembersArray = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg',
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg',
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg',
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg',
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg',
  },
];

printAllTeamMembers(teamMembersArray);

addBtn.addEventListener('click', addNewMember);

// -------------------------------------------------------------------------
// FUNCTIONS
// -------------------------------------------------------------------------
// funzione che stampa le card degli oggetti già presenti nell'array
function printAllTeamMembers(teamMembersArray) {
  // ciclo while che stampa tutti gli oggetti dell'array
  let i = 0;
  while (i < teamMembersArray.length) {
    const thisTeamMember = teamMembersArray[i];
    drawSingleCard(thisTeamMember);
    i++;
  }
}

// crea un nuovo oggetto con gli elementi di input dei form, lo aggiunge all'array e stampa la card in pagina
function addNewMember() {
  // variabile per nome nuovo membro
  const newMemberName = document.getElementById('name').value;
  // variabile per ruolo nuovo membro
  const newMemberRole = document.getElementById('role').value;
  // variabile per foto nuovo membro
  const newMemberImage = document.getElementById('image').value;

  const newMemberObject = {
    nome: newMemberName,
    ruolo: newMemberRole,
    foto: newMemberImage,
  };
  // aggiungo oggetto ad array generale
  teamMembersArray.push(newMemberObject);
  // stampo quest'ultima card
  drawSingleCard(newMemberObject);
}

// disegna una card singola per ogni oggetto team member
function drawSingleCard(teamMemberObject) {
  // crea una card e la appende al contenitore
  const cardToDraw = `
  <div class="team-card">
  <div class="card-image">
  <img
  src="img/${teamMemberObject.foto}"
  alt="${teamMemberObject.nome}"
  />
  </div>
  <div class="card-text">
  <h3>${teamMemberObject.nome}</h3>
  <p>${teamMemberObject.ruolo}</p>
  </div>
  </div>`;

  // concatenazione in HTML
  teamContainer.innerHTML += cardToDraw;
}
