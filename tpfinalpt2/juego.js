class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.cantidadRamasenemigos = 4;
    this.ramasEnemigos=[];
    this.comidas = [];
    this.cantidadComidas = 5;
  }
  
  actualizar(){
  this.jugador.osos.actualizar();

  }
  
  iniciar() {
    for (let i=0; i<  this.cantidadRamasenemigos; i++) {
      let posX = random(0, width - 40);
      let posY = random(-100,-1000);
      this.ramasEnemigos[i]= new ramaEnemigo(posX, posY);
    }
    for (let i = 0; i < this.cantidadComidas; i++) {
      let posX = random(0, width - 40); 
      let posY = random(-100, -1000); 
      this.comidas[i] = new Comida(posX, posY); 
    }
  }
  reiniciar() {
    
  }
  dibujar() {
    this.actualizar();
    this.dibujarFondo(); //??? no c si esta bien esto...
    this.dibujarPuntaje();
    this.dibujarramasEnemigos();
    this.dibujarComida();
    this.jugador.dibujar();
  }
  dibujarramasEnemigos() {
for (let i=0; i< this.cantidadRamasenemigos; i++) {
            this.ramasEnemigos[i].dibujar(); 
        }
    }
dibujarComida() {
    for (let i = 0; i < this.comidas.length; i++) {
      this.comidas[i].dibujar(); 
    }
}
  dibujarFondo() {
    image(imagenFondo, 0, 0, width, height);
  }
  dibujarPuntaje() {
    textFont(fuente);
    fill(247, 97, 97);     
    textSize(30);     
    textAlign(LEFT, TOP); 
    let textoPuntaje = "Puntos: " + this.jugador.puntaje;
    text(textoPuntaje, 10, 10);
    }
  teclapresionada() {
    this.jugador.teclapresionada();
  }
  teclasoltada(){
  this.jugador.teclasoltada();
  }
}
