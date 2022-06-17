/* Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
BONUS:
Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente. */

// -------------------------------------------------------------------------
// ANALISI
// -------------------------------------------------------------------------

// creo array con oggetti, ogni oggetto rappresenta un membro e avrà chiavi per Nome, Ruolo e Foto
// per ogni elementi dell-array stampo una card secondo il template nel DOM

// -------------------------------------------------------------------------

// variabile target dentro cui appendere le card
const teamContainer = document.querySelector('.team-container');

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

// ciclo for per stampare dinamicamente una card per ciascuno dei 6 membri del team
// secondo il template fornito in HTML
for (let i = 0; i < teamMembersArray.length; i++) {
  const thisTeamMember = teamMembersArray[i];

  //   template compilato con i dati dei singoli membri
  const cardToDraw = `
<div class="team-card">
        <div class="card-image">
        <img
                src="img/${thisTeamMember.foto}"
                alt="${thisTeamMember.nome}"
        />
        </div>
        <div class="card-text">
            <h3>${thisTeamMember.nome}</h3>
            <p>${thisTeamMember.ruolo}</p>
        </div>
</div>`;

  // concatenazione in HTML
  teamContainer.innerHTML += cardToDraw;
}
