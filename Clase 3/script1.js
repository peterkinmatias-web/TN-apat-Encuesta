// VOTING APP - Fixed for numerical sort, no vote counts in UI, C2 sheet backend
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz1fBh-oy2IUOUxzU6LHgSh920zanEQVFJGGGARcrciM3XLPMCmWqezgoEqMmjcpXwy5w/exec';

const characters = [
  { name: '1 Julián Santero', image: 'https://drive.google.com/thumbnail?id=1V6OI8VjXsYBtntkjJr2hf0s1gBZ9pBpq&sz=w250-h250' },
  { name: '2 Jorge Barrio', image: 'https://drive.google.com/thumbnail?id=1ka55yUqvBuqz7tf8PBzbYNpLJcsK9ici&sz=w250-h250' },
  { name: '3 Renzo Blotta', image: 'https://drive.google.com/thumbnail?id=1wR9MlyX3gR5Nwby6_9vhDYluI5y5fc9y&sz=w250-h250' },
  { name: '4 Jerónimo Teti', image: 'https://drive.google.com/thumbnail?id=1Z3_IiwKNYl2THOZyemu-BR3i7FC34Bok&sz=w250-h250' },
  { name: '7 Alfonso Domenech', image: 'https://drive.google.com/thumbnail?id=1wjNTq6OPmstVMj0hn2VNVjmvIU99xU0Y&sz=w250-h250' },
  { name: '8 Joel Gassman', image: 'https://drive.google.com/thumbnail?id=1CfWVykEIGjPPzR1X-Loxuydff2RTjO0a&sz=w250-h250' },
  { name: '9 Fabián Yannantuoni', image: 'https://drive.google.com/thumbnail?id=1XmA-N5btm7m6cBFEIi82_8JucAh2dnRB&sz=w250-h250' },
  { name: '10 Ricardo Risatti', image: 'https://drive.google.com/thumbnail?id=1zhOsLiaP9_tBMDA2uzyj9_SYZMsu64hN&sz=w250-h250' },
  { name: '11 Jonatan Castellano', image: 'https://drive.google.com/thumbnail?id=1v0BfnSqnVGXZBscmekga8sG0ze9fVvWg&sz=w250-h250' },
  { name: '13 Carlos Okulovich', image: 'https://drive.google.com/thumbnail?id=1d0o9rLKjeFoOqbh5JE7U4ujal9nE0tRS&sz=w250-h250' },
  { name: '16 Matías Muñoz Marchesi', image: 'https://drive.google.com/thumbnail?id=139Ibdv_HErKYgUsl_9T_Kgzdcye5PS0H&sz=w250-h250' },
  { name: '18 Leonel Larrauri', image: 'https://drive.google.com/thumbnail?id=1PmmkqPM6jdUh5rFHaNq6LIVqcbZT8VIb&sz=w250-h250' },
  { name: '19 Lucas Vicino', image: 'https://drive.google.com/thumbnail?id=1ZTZj85D5FISAq5yXozdsZcbRc8kXWk_M&sz=w250-h250' },
  { name: '24 Sebastián Gómez', image: 'https://drive.google.com/thumbnail?id=1wiPcmffT5_bPYUqu8KnyvQ-b_V6xOUGz&sz=w250-h250' },
  { name: '27 Leandro Carducci ', image: 'https://drive.google.com/thumbnail?id=1xPlnp7soJmjImxcMgGtZajibnKCKvSvi&sz=w250-h250' },
  { name: '46 Miguel Ciaurro', image: 'https://drive.google.com/thumbnail?id=10BQIFm-RJmAfYfnU7EJwg4eUdQegTVhQ&sz=w250-h250' },
  { name: '66 Adrián Percaz', image: 'https://drive.google.com/thumbnail?id=10BQIFm-RJmAfYfnU7EJwg4eUdQegTVhQ&sz=w250-h250' },
  { name: '69 Ramiro Cano', image: 'https://drive.google.com/thumbnail?id=1K2tSxY9QSVcBz8XLhJzYM1puoe_3H9xF&sz=w250-h250' },
  { name: '72 Lucas Teseschi', image: 'https://drive.google.com/thumbnail?id=1RtAyzWKROMDpigZvhxnbxZZk27Oi8W72&sz=w250-h250' },
  { name: '77 Matías Cohen', image: 'https://drive.google.com/thumbnail?id=13rppvSww2HfUKrTI9QrSCLDLL-ckmeuL&sz=w250-h250' },
  { name: '79 Facundo Chapur', image: 'https://drive.google.com/thumbnail?id=1l0vYUsubc2CFToWl2ylTB13nu7P_zva7&sz=w250-h250' },
  { name: '83 Facundo Ardusso', image: 'https://drive.google.com/thumbnail?id=1h-LW5Nux4RRimmd-_WFSpSJ8JbbQgrGm&sz=w250-h250' },
  { name: '86 Agustín Canapino', image: 'https://drive.google.com/thumbnail?id=1h-LW5Nux4RRimmd-_WFSpSJ8JbbQgrGm&sz=w250-h250' },
  { name: '88 Facundo Marquez', image: 'https://drive.google.com/thumbnail?id=11Vv1ojTKZZKNWhc_6kLgrUDu11WV9kHc&sz=w250-h250' },
  { name: '89 Jeremías Olmedo', image: 'https://drive.google.com/thumbnail?id=18LDrOKzTET8pRJuwLzpOEKS5ZlagPiMX&sz=w250-h250' },
  { name: '94 Gonzalo Antolín', image: 'https://drive.google.com/thumbnail?id=1Aq1Js-lhSkEG2vs4Xv6FUSdm2iG8JguO&sz=w250-h250' },
  { name: '99 Bautista Damiani', image: 'https://drive.google.com/thumbnail?id=1zapC8gvhs6PlzNy146g6_Bm3wRVF2OMo&sz=w250-h250' },
  { name: '109 Nicolás Moscardini', image: 'https://drive.google.com/thumbnail?id=1zapC8gvhs6PlzNy146g6_Bm3wRVF2OMo&sz=w250-h250' },
  { name: '111 Javier Merlo', image: 'https://drive.google.com/thumbnail?id=1NNMMlgVn0ExSTPYqBDR9Ibru-nRJ7Ugu&sz=w250-h250' },
  { name: '119 Antonino Garcia', image: 'https://drive.google.com/thumbnail?id=1NY2tMKbfoBRRvzVgtxcj6Yjf1wVqdKt1&sz=w250-h250' },
  { name: '123 Mauricio Lambiris', image: 'https://drive.google.com/thumbnail?id=1QIsL7IZ8jrmhd_dz2fllQHC-WQ84OdiH&sz=w250-h250' },
  { name: '144 Leonel Pernía', image: 'https://drive.google.com/thumbnail?id=15K7P4vcJ5QMo4NyugvZB25qN8WJcuVmd&sz=w250-h250' },
  { name: '152 Thiago Martínezs', image: 'https://drive.google.com/thumbnail?id=1B3wmliyoEaAQXbS75FEQczrwUXQ1Nrw1&sz=w250-h250' },
  
  { name: '176 Nicolás Jaime', image: 'https://drive.google.com/thumbnail?id=1IJoG1aRY_aDC0O-TdxrqtGUmz4sDHerA&sz=w250-h250' },
  { name: '177 Leandro González', image: 'https://drive.google.com/thumbnail?id=1rmMEhgxgNlQMcFg-V90hE3dizq8ihlYS&sz=w250-h250' },
  { name: '231 José Manuel Urcera', image: 'https://drive.google.com/thumbnail?id=1rmMEhgxgNlQMcFg-V90hE3dizq8ihlYS&sz=w250-h250' },
  { name: '238 Ever Franetovich', image: 'https://drive.google.com/thumbnail?id=1BVHOGmwtluQt-Gy3xC04KTppa88NaNcn&sz=w250-h250' },
  
].sort((a, b) => parseInt(a.name) - parseInt(b.name));

let selectedCharacter = null;
let hasVoted = false;
let userIP = null;

document.addEventListener('DOMContentLoaded', async () => {
  renderCharacters();
  setupEventListeners();
  await checkIfVoted();
});

function renderCharacters() {
  const grid = document.getElementById('characters-grid');
  grid.innerHTML = '';

  characters.forEach((char) => {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.dataset.name = char.name;
    
const imageContent = char.image ? `<img src="${char.image}" alt="${char.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span style="display:none;">👤</span>` : '<span>👤</span>';
    
    card.innerHTML = `
      <div class="character-image">${imageContent}</div>
      <div class="character-name">${char.name}</div>
    `;
    
    card.addEventListener('click', () => selectCharacter(char.name));
    grid.appendChild(card);
  });
}

function setupEventListeners() {
  document.getElementById('vote-btn').addEventListener('click', submitVote);
}

function setupModalEventListeners() {
  ['close-modal', 'close-already-voted', 'close-error'].forEach(id => {
    document.getElementById(id).addEventListener('click', () => document.getElementById(id.split('-')[0] + '-modal').classList.remove('active'));
  });
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  });
}

function selectCharacter(name) {
  if (hasVoted) return showAlreadyVotedModal();
  
  document.querySelectorAll('.character-card').forEach(card => card.classList.remove('selected'));
  document.querySelector(`[data-name="${name}"]`).classList.add('selected');
  selectedCharacter = characters.find(c => c.name === name);
  document.getElementById('vote-btn').disabled = false;
}

async function submitVote() {
  if (!selectedCharacter) return showErrorModal('Select character first!');
  
  const btn = document.getElementById('vote-btn');
  btn.disabled = true;
  btn.textContent = 'Loading...';
  
  try {
    userIP = await getUserIP();
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ip: userIP, characterName: selectedCharacter.name})
    });
    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Response data:', data);
    
    if (data.success) {
      localStorage.setItem('hasVoted', 'true');
      localStorage.setItem('votedCharacter', selectedCharacter.name);
      hasVoted = true;
      showThankYouModal(selectedCharacter.name);
    } else if (data.error === 'Already voted') {
      hasVoted = true;
      showAlreadyVotedModal();
    } else {
      showErrorModal(data.error || data.message || 'Vote failed');
    }
  } catch (e) {
    console.error(e);
    showErrorModal('Network error - check console (F12): ' + e.message);
  } finally {
    btn.disabled = !hasVoted;
    btn.textContent = 'Vota';
  }
}

async function getUserIP() {
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    return (await res.json()).ip;
  } catch {
    return 'local-' + Math.random().toString(36).slice(2);
  }
}

async function checkIfVoted() {
  if (localStorage.getItem('hasVoted') === 'true') {
    hasVoted = true;
    disableVoting();
    const votedName = localStorage.getItem('votedCharacter');
    if (votedName) showAlreadyVotedModal();
  }
}

function disableVoting() {
  document.querySelectorAll('.character-card').forEach(c => {
    c.style.opacity = '0.6';
    c.style.pointerEvents = 'none';
  });
  document.getElementById('vote-btn').disabled = true;
}

function showThankYouModal(name) {
  document.getElementById('voted-character').textContent = `Voted for ${name}`;
  document.getElementById('thank-you-modal').classList.add('active');
}

function showAlreadyVotedModal() {
  document.getElementById('already-voted-modal').classList.add('active');
}

function showErrorModal(msg) {
  document.getElementById('error-message').textContent = msg;
  document.getElementById('error-modal').classList.add('active');
}
