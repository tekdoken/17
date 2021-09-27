class Hero {
    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }

    getHeroElement = function () {
        return '<img width="' + this.size + '"' + ' height="' + this.size + '"' + ' src="' + this.image + '"' + ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }
    moveRight = function () {
        this.left += 2;
    }
}

let hero = new Hero('a.gif', 20, 30, 200);

function start() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    } else {
        hero.left = 20
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    window.requestAnimationFrame(start)
    // setTimeout(start, 20)
}

start();