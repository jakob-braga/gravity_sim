let width = 1000;
let height = 550;

let true_G = 5.9229 * (10 ** -5);

var star;
var c_planet;
var planets = [];
var planet_num;
var distv;
var dist;
var dir = [];
var grav;

function init() {
  planets = []
}

function setup() {
  planet_slider();
  grav_slider();
  createCanvas(width, height).position(5, 5);
  for (var i = 0; i < planet_num; i++) {
    planets[i] = new Planet();
  }
  star = new Star();
  c_planet = new Control();
  planets.push(star);
  planets.push(c_planet);
  console.log(G_mult);
}

function draw() {
  background(10);
  gravity_update();
  //console.log(frameRate());
  //console.log(planets.length)
}

function gravity_update() {
  for (var i = planets.length - 1; i >= 0; i--) {
    for (var j = planets.length - 1; j >= 0; j--) {
      distv = [planets[j].pos[0] - planets[i].pos[0], planets[j].pos[1] - planets[i].pos[1]];
      dist = sqrt((distv[0] ** 2) + (distv[1] ** 2)).toFixed(5);
      if (dist > 1) {
        dir = [distv[0] / dist, distv[1] / dist];
        grav = (true_G * G_mult) * planets[j].mass / (dist ** 2);
        planets[i].vel[0] += dir[0] * grav;
        planets[i].vel[1] += dir[1] * grav;
      }
    }
    planets[i].move();
    planets[i].draw();
    if (planets[i].pos[0] < -500 || planets[i].pos[0] > 1500) {
      planets.splice(i, 1);
    }
    if (planets[i].pos[1] < -500 || planets[i].pos[1] > 1500) {
      planets.splice(i, 1);
    }
  }
}
