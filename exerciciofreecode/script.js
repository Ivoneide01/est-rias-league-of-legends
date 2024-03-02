let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;// indefinidada // sem valor 
let monsterHealth; // indefinidada // sem valor 
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [ //armas
  { name: 'stick', power: 5 }, // (nome da arma) e power (poder ou força da arma).
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];
const monsters = [
  {
    name: "slime",
    level: 2, //nivel do mostro
    health: 15 // saude do mostro
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
]
const locations = [
  {
    name: "town square", //  (praça da cidade) 
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon], //[irParaLoja, irParaCaverna, lutarContraDragão],
    text: "You are in the town square. You see a sign that says \"Store\"." // "Você está na praça da cidade. Você vê uma placa que diz "Loja"."
  },
  {
    name: "store", // ir para loja
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"], //Comprar 10 pontos de vida (10 ouro), Comprar arma (30 ouro)
    "button functions": [buyHealth, buyWeapon, goTown], //comprar saúde, // comprar arma //  ir para a cidade
    text: "You enter the store." // voce entrou na loja
  },
  {
    name: "cave", //caverna
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],// Lutar contra o slime, lutar contra besta dentada
    "button functions": [fightSlime, fightBeast, goTown],  // Lutar contra o slime, lutar contra besta dentada // ir para a cidade
    text: "You enter the cave. You see some monsters." // entrar na caverna, voce ve os mostros
  },
  {
    name: "fight", // luta
    "button text": ["Attack", "Dodge", "Run"], // "Atacar", "Esquivar", "Correr"
    "button functions": [attack, dodge, goTown],//"Atacar", "Esquivar", ir para a cidade 
    text: "You are fighting a monster." // voce esta lutando contra os mostros
  },
  {
    name: "kill monster",  // matar mostro
    "button text": ["Go to town square", "Go to town square", "Go to town square", ], // ir para a cidade 3X
    "button functions": [goTown, goTown, easterEgg],// ir para a cidade // ovo de pascoa
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.' //"O monstro grita 'Arg!' enquanto morre. Você ganha pontos de experiência e encontra ouro."
  },
  {
    name: "lose", //perder
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], // repetir
    "button functions": [restart, restart, restart], //Reiniciar
    text: "You die. &#x2620;" //Você morre.
  },
  { 
    name: "win", 
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
    "button functions": [restart, restart, restart], 
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;" //Você derrota o dragão! VOCÊ VENCE O JOGO! 
  },
  {
    name: "easter egg", //"Ovo de Páscoa"
    "button text": ["2", "8", "Go to town square?"],  //lutar contra besta dentada
    "button functions": [pickTwo, pickEight, goTown], // "escolhaDois", "escolhaOito.  ir para a cidade
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!" //text: "Você encontra um jogo secreto. Escolha um número acima. Dez números serão escolhidos aleatoriamente entre 0 e 10. Se o número que você escolher corresponder a um dos números aleatórios, você ganha!"
  }
];

// initialize buttons
button1.onclick = goStore; // ir para loja
button2.onclick = goCave; // or para caverna
button3.onclick = fightDragon; //lutardragão

function update(location) { // atualizar localização
  monsterStats.style.display = "none"; //Esconde o elemento 
  button1.innerText = location["button text"][0]; //.*Define o texto do primeiro botão 
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}

function goTown() { // atualiza ir para a cidade 
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() { // comprar nova arma
  if (currentWeapon < weapons.length - 1) { // arma atual - armas
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() { // venda uma arma
  if (inventory.length > 1) { //do seu inventario
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() { //indicando que o jogador está lutando contra um slime
  fighting = 0;
  goFight();
}

function fightBeast() {// indicando que o jogador está lutando contra uma besta
  fighting = 1;
  goFight();
}

function fightDragon() { //indicando que o jogador está lutando contra um dração
  fighting = 2;
  goFight();
}

function goFight() { //iniciar um combate contra um monstro no jogo
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
  } else {
    text.innerText += " You miss.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
}

function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  console.log(hit);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

function easterEgg() { //Esta função atualiza a localização do jogador para um "ovo de Páscoa"
  update(locations[7]);
}

function pickTwo() { //Esta função é chamada quando o jogador escolhe o número 2. Ela invoca a função 
  pick(2); // com o palpite do jogador como 2.
}

function pickEight() { //pickEight(): Esta função é chamada quando o jogador escolhe o número 8. 
  pick(8);//Ela invoca a função pick() com o palpite do jogador como 8.
}

function pick(guess) { //Esta função é responsável por gerenciar a mecânica do jogo onde o jogador escolhe um número e verifica se esse número corresponde a um dos 10 números aleatórios gerados. 
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}