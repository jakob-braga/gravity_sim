let vel_scale = 0.7

class Planet {
    constructor() {
        this.r = random(10, 25);
        this.red = random(0, 100);
        this.green = random(100, 255);
        this.blue = random(100, 255);
        this.pos = [random(100, width - 100), random(100, height - 100)];
        this.vel = [random(-7, 7) * vel_scale, random(-7, 7) * vel_scale];
        this.mass = this.r;
    }

    draw() {
        fill(this.red, this.green, this.blue);
        ellipse(floor(this.pos[0]), floor(this.pos[1]), this.r, this.r);
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}


class Star {
    constructor() {
        this.r = 150;
        this.pos = [floor(width / 2), floor(height / 2)];
        this.vel = [0, 0];
        this.mass = 10 ** 8;
    }

    draw() {
        fill(255, 100, 0);
        ellipse(floor(this.pos[0]), floor(this.pos[1]), this.r, this.r);
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}

class Control {
    constructor() {
        this.r = 25;
        this.pos = [200, height / 2]
        this.vel = [0, -4.44]
        this.mass = 10;
    }

    draw() {
        fill(255, 255, 255);
        ellipse(floor(this.pos[0]), floor(this.pos[1]), this.r, this.r);
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}