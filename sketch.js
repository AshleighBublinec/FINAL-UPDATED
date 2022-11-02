let b; //we declare an individual b which will become an instance of the Ball class
let c; 
let d;
let e;
let f;
let g;
let h; 
let i; 
let j; 
let k;
let l;
let m;
let n; 
let o; 
let p; 
let q;
let r;
let s;


bsize = 30;
csize = 30;
dsize = 30;
esize = 30;
fsize = 30;
gsize = 30;
hsize = 30;
isize = 30;
jsize = 30;
ksize = 30;
lsize = 30;
msize = 30;
nsize = 30;
osize = 30;
psize = 30;
qsize = 30;
rsize = 30;
ssize = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#f588a5');
  b = new Ball('Bonjour',bsize); //we create our b instance of Ball;
  c = new Ball('Hola',csize);
  d = new Ball('Guten Tag',dsize);
  e = new Ball('Konnichiwa',esize);
  f = new Ball('Nǐn Hǎo',fsize);
  g = new Ball('Asalaam Alaikum',gsize);
  h = new Ball('Salve',hsize);
  i = new Ball('Ciao',isize);
  j = new Ball('Olá',jsize);
  k = new Ball('Kia Ora',ksize);
  l = new Ball('G’day',lsize);
  m = new Ball('Privet',lsize);
  n = new Ball('Namaste',nsize);
  o = new Ball('Shalom',osize);
  p = new Ball('Annyeonghaseyo',psize);
  q = new Ball('Xin chào',qsize);
  r = new Ball('Dia Dhuit',rsize);
  s = new Ball('Hallo',rsize);
}

function draw() {
 background(255);
  textAlign(CENTER);
  fill('#f588a5');
  textSize(130)
  textStyle (BOLD)
  text('HELLO',windowWidth/2, windowHeight/2);
  b.update(); 
  b.display();
   c.update(); 
  c.display();
  d.update();
  d.display();
  e.update();
  e.display();
   f.update();
  f.display();
   g.update();
  g.display();
  h.update();
  h.display();
  i.update();
  i.display();
  j.update();
  j.display();
  k.update();
  k.display();
  l.update();
  l.display();
  n.update();
  n.display();
   o.update();
  o.display();
  p.update();
  p.display();
  q.update();
  q.display();
   r.update();
  r.display();
  s.update();
  s.display();
  
  
  
  
}

class Ball {
  constructor(word,size) {
    this.position = new createVector(random(100), random(100));
    this.velocity = new createVector(random(-5,5), random(-5,5));
    this.word = word;
    this.size = size;
  }
  
  update() {
    // Add the current speed to the position.
    this.position.add(this.velocity);
    
    if ((this.position.x > width) || (this.position.x < 0)) {
      this.velocity.x = this.velocity.x * -1;
    }
    if ((this.position.y > height) || (this.position.y < 0)) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
  display() {
    // Display circle at x position
    stroke(0);
    //fill(175);
    textSize(this.size);
    fill(0);
    text(this.word, this.position.x, this.position.y);
  }
}