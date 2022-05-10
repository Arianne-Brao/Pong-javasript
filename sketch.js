//variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let velocidadex = 6;
let velocidadey = 6;
let raio = diametro / 2;
let collide = false;

//variaveis minharaquete
let xRaqueteE = 5;
let yRaqueteE = 150;
let comprimentoRaqE = 10;
let alturaRaqE = 100;

//variaveis raqueteoponente
let xRaqueteD = 585;
let yRaqueteD = 150;
let comprimentoRaqD = 10;
let alturaRaqD = 100;
let velocidadeRaqD;

//variaveis Pontos
let meus = 0;
let oponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentarBolinha();
  colideBorda();
  criarRaqueteE();
  colideRaqueteE();
  movimentaRaqueteE();
  criarRaqueteD();
  colideRaqueteD();
  movimentaRaqueteD();
  placar();
  pontos ();
}

function mostrarBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentarBolinha() {
  xBolinha = xBolinha + velocidadex;
  yBolinha = yBolinha + velocidadey;
}

function colideBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0)
    velocidadex = velocidadex * -1;
  if (yBolinha + raio > height || yBolinha - raio < 0)
    velocidadey = velocidadey * -1;
}

function criarRaqueteE() {
  rect(xRaqueteE, yRaqueteE, comprimentoRaqE, alturaRaqE);
}

function colideRaqueteE() {
  collide = collideRectCircle(
    xRaqueteE,
    yRaqueteE,
    comprimentoRaqE,
    alturaRaqE,
    xBolinha,
    yBolinha,
    diametro
  );
  if (collide) {
    velocidadex = velocidadex * -1;
  }
}

function movimentaRaqueteE() {
  if (keyIsDown(UP_ARROW)) {
    if (yRaqueteE > 0) yRaqueteE = yRaqueteE - 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yRaqueteE < 300) yRaqueteE = yRaqueteE + 10;
  }
}

function criarRaqueteD() {
  rect(xRaqueteD, yRaqueteD, comprimentoRaqD, alturaRaqD);
}

function colideRaqueteD() {
  collide = collideRectCircle(
    xRaqueteD,
    yRaqueteD,
    comprimentoRaqD,
    alturaRaqD,
    xBolinha,
    yBolinha,
    diametro
  );
  if (collide) {
    velocidadex = velocidadex * -1;
  }
}

function movimentaRaqueteD() {
  velocidadeRaqueteD = yBolinha - yRaqueteD - alturaRaqD / 2 + 60;
  yRaqueteD = yRaqueteD + velocidadeRaqueteD;
}

function placar() {
  fill(255);
  textSize(30);
  text(meus, 100, 30);
  text(oponente, 500, 30);
}

function pontos () {
  if (xBolinha-raio<0) {oponente=oponente+1}
  if (xBolinha+raio>600) {meus=meus+1}
}