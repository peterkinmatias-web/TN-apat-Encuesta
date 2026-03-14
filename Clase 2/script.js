// VOTING APP - Fixed for numerical sort, no vote counts in UI, C2 sheet backend
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyxXwND29N_wbBZGwYc7PtqzTaRcCv4aPwBo88cf1mqvqMG9DsUG02PK6KkE5Vfx1Q0/exec';

const characters = [
  { name: '2 Francisco Coltrinari', image: 'https://drive.google.com/thumbnail?id=1XOg9ZheJAufWbRZnPjhaGo0ym9XtQiKc&sz=w250-h250' },
  { name: '131 Franco Bodrato Mionetto', image: 'https://drive.google.com/thumbnail?id=1FMAX4_mRjLza-6HFxw9_Yudk5dMaBpCR&sz=w250-h250' },
  { name: '3 Renzo Blotta', image: 'https://drive.google.com/thumbnail?id=1wR9MlyX3gR5Nwby6_9vhDYluI5y5fc9y&sz=w250-h250' },
  { name: '132 Diego Casais', image: 'https://drive.google.com/thumbnail?id=1bLjz0EoIhb2cgIKcEtGk3vP7bTbEFfZi&sz=w250-h250' },
  { name: '79 Andrés Calderón', image: 'https://drive.google.com/thumbnail?id=1l0IWblztyB3tjzZ2M_pFg40sq_rSk-i-&sz=w250-h250' },
  { name: '87 Daniel Costa Sánchez', image: 'https://drive.google.com/thumbnail?id=1x2V0Bzvb4GkZptP6_9xBpefKEzoVZJCZ&sz=w250-h250' },
  { name: '151 Exequiel Bastidas', image: 'https://drive.google.com/thumbnail?id=1m7hNIBtDk5lQXoq0kdsMpaPFBI5YZxxj&sz=w250-h250' },
  { name: '76 Felipe Martini', image: 'https://drive.google.com/thumbnail?id=1jC02r0c9YQuiV-adhPBEkk1PaGCFsGAj&sz=w250-h250' },
  { name: '56 Agustin Bonomo', image: 'https://drive.google.com/thumbnail?id=1NP1svSUJJQ59x-jM1HfE0DqIVn-krRCK&sz=w250-h250' },
  { name: '74 Bautista Roqueta', image: 'https://drive.google.com/thumbnail?id=1LF4rJHUdlRDxBO5i-xJ4Bce_386EEJk4&sz=w250-h250' },
  { name: '97 Bruno Pace', image: 'https://drive.google.com/thumbnail?id=1odSTwlEi-FZy3euJc8hXmrNJPFvZBTwp&sz=w250-h250' },
  { name: '70 Juan Ignacio Canela', image: 'https://drive.google.com/thumbnail?id=1Llb8UFldpfVXFSTPDVuVwjJmmN56o9j4&sz=w250-h250' },
  { name: '117 Pablo Collazo', image: 'https://drive.google.com/thumbnail?id=1FYZK0nQ7ebCpT5Ucn-dCqqODfiBceTFo&sz=w250-h250' },
  { name: '28 Damián Kirstein', image: 'https://drive.google.com/thumbnail?id=1XUB3nyut4_Rw4rvQ8H64le1sQJryHwJX&sz=w250-h250' },
  { name: '150 Juan Martín Eluchans', image: 'https://drive.google.com/thumbnail?id=1KZfTJtYtSwMp32gL_2mTA_r9rmMg4s9x&sz=w250-h250' },
  { name: '73 José Luis Arrate', image: 'https://drive.google.com/thumbnail?id=1rKdpD3SV9p9cNlkpOhqZ4X9BiV0D_O4d&sz=w250-h250' },
  { name: '161 Lucas Petracchini', image: 'https://drive.google.com/thumbnail?id=1zL9elQfxHUwx4B6HJbv0_FuFEb1UOnf4&sz=w250-h250' },
  { name: '43 Marcelo Guevara', image: 'https://drive.google.com/thumbnail?id=1opFcmR2QRVRNpKXK_tz0p2E8_3qOn8Ut&sz=w250-h250' },
  { name: '86 Martín Leston', image: 'https://drive.google.com/thumbnail?id=1vFBUybab023Bm--WJs4Rtt7E-0vsg1R8&sz=w250-h250' },
  { name: '93 Martín Mura', image: 'https://drive.google.com/thumbnail?id=106CglBEQxavMwb0IGQRi0W596z9Ua_6U&sz=w250-h250' },
  { name: '121 Nicolás Posco', image: 'https://drive.google.com/thumbnail?id=1Zyu7YaxJ9Z5jOEmStSE10E-0DDXSFy08&sz=w250-h250' },
  { name: '11 Pedro Grippo', image: 'https://drive.google.com/thumbnail?id=1dNT5M6KTpBUQICs2xFoQgi587uDLnB5o&sz=w250-h250' },
  { name: '19 Maximiliano Bestani', image: 'https://drive.google.com/thumbnail?id=1X5tSRHsbWANVOwz8vTQmuiK8Ml68QALe&sz=w250-h250' },
  { name: '89 Valentino Quattrochi', image: 'https://drive.google.com/thumbnail?id=1gyiyMZ0PqbKjqIrWzQcFwBFJVtL5QwJI&sz=w250-h250' },
  { name: '14 Juan Kreitz', image: 'https://drive.google.com/thumbnail?id=17u9XMB7n5wBo8x4APxH2ToS-8_B0IfGW&sz=w250-h250' },
  { name: '98 Braian Reinoso', image: 'https://drive.google.com/thumbnail?id=1gftKI5XW4-vYNSe5lkosRNc8lgJ_XouS&sz=w250-h250' },
  { name: '25 Santiago Robledo', image: 'https://drive.google.com/thumbnail?id=1oMn1j3TPF2Of9ljtxSXmwNES5XpkbzEQ&sz=w250-h250' },
  { name: '174 Sergio Fernández', image: 'https://drive.google.com/thumbnail?id=1IFrWWz3IjRcclL4V0jYl7wcWJS6vMV4C&sz=w250-h250' },
  { name: '95 Santino Balerini', image: 'https://drive.google.com/thumbnail?id=1Dt0fGS0ICO51-5bLhu2bcsxxbn4YHV9T&sz=w250-h250' },
  { name: '5 Juan Pablo Pastori', image: 'https://drive.google.com/thumbnail?id=1lsUejcYGlHzcJWJK5rZSrV5JQhNSIcXS&sz=w250-h250' },
  { name: '177 Tomás Vitar', image: 'https://drive.google.com/thumbnail?id=1WLvZvJ_2_fSHSXV3eCXGtka84Zn1OQsH&sz=w250-h250' }
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
