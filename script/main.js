const player_x = { symbol: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>`, count: 0, dom: document.getElementById('PlayerX'), cls: 'x-cell' };
const player_o = { symbol: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-letter-o"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-6" /></svg>`, count: 0, dom: document.getElementById('PlayerO'), cls: 'o-cell' };
const squares = document.querySelectorAll('.cell');
const turnBar = document.getElementById('turnBar');
const turnText = document.getElementById('turnText');
const WINS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let turn = true; // true = X
let gameOver = false;

function markPlayer() {
  player_x.dom.setAttribute('data-active', `${turn}`);
  player_o.dom.setAttribute('data-active', `${!turn}`);
  turnBar.className = `turn-bar ${turn ? 'x-turn' : 'o-turn'}`;
  turnText.textContent = `Player ${turn ? 'X' : 'O'}'s turn`;
}

function init() {
  turn = Math.random() < 0.5;
  gameOver = false;
  squares.forEach(c => {
    c.innerHTML = '';
    c.className = 'cell';
  });
  markPlayer();
}

squares.forEach(cell => {
  cell.onclick = () => {
    if (gameOver || cell.classList.contains('played')) return;
    const p = turn ? player_x : player_o;
    cell.innerHTML = p.symbol;
    cell.classList.add('played', p.cls);
    turn = !turn;
    markPlayer();
    check();
  };
});

function check() {
  for (const [a,b,c] of WINS) {
    const sa = squares[a], sb = squares[b], sc = squares[c];
    if (sa.innerHTML && sa.innerHTML === sb.innerHTML && sa.innerHTML === sc.innerHTML) {
      const winner = sa.classList.contains('x-cell') ? player_x : player_o;
      [sa, sb, sc].forEach((s,ind)=>{setTimeout(()=>{s.classList.add('winner')},250*ind)});
      gameOver = true;
      winner.count++;
      setCounts();
      const label = winner === player_x ? 'X' : 'O';
      turnBar.className = 'turn-bar';
      turnText.textContent = `Player ${label} Won`;
      setTimeout(init, 1800);
      return;
    }
  }
  if ([...squares].every(c => c.classList.contains('played'))) {
    gameOver = true;
    turnBar.className = 'turn-bar';
    turnText.textContent = 'Draw!';
    setTimeout(init, 1400);
  }
}

function setCounts() {
  document.getElementById('scoreX').textContent = player_x.count;
  document.getElementById('scoreO').textContent = player_o.count;
}

document.getElementById('resetBtn').onclick = init;
document.getElementById('fullResetBtn').onclick = () => {
  player_x.count = player_o.count = 0;
  setCounts();
  init();
};

init();