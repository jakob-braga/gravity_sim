let width = 1000;
let height = 550;

let true_G = 5.9229 * (10 ** -5);

var star;
var c_planet;
var planets = [];
var planet_num;
var star_num;
var distv;
var dist;
var dir = [];
var grav;

function one_star_setup() {
  star = new Star();
  planets.push(star);
}

function two_star_setup() {
  let stardist = 150;
  let starvel = 3.3;
  star1 = new Star();
  star1.pos = [width / 2 - stardist, height / 2];
  star1.vel = [0, starvel];
  star2 = new Star();
  star2.pos = [width / 2 + stardist, height / 2];
  star2.vel = [0, -starvel];
  planets.push(star1);
  planets.push(star2);
}

function setup() {
  planet_slider();
  grav_slider();
  star_slider();
  createCanvas(width, height).position(5, 5);
  for (var i = 0; i < planet_num; i++) {
    planets[i] = new Planet();
  }
  c_planet = new Control();
  planets.push(c_planet);
  if (star_num == 1) {
    one_star_setup();
  } else {
    two_star_setup();
  }
}

function draw() {
  background(10);
  gravity_update();
  gnum();
  pnum();
  snum();
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
    //if (planets[i].pos[1] < -500 || planets[i].pos[1] > 1500) {
    //  planets.splice(i, 1);
    //}
  }
}
