(function() {
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
    // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
    // MIT license

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
            || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());




function Actor(options) {
    var that = this;

    this.ready = false;

    this.x = options.x || 0;
    this.y = options.y || 0;

    this.velocity = options.velocity || 0;

    this.frames = options.frames || 1;

    this.image = new Image();
    this.image.src =  options.image || "/public/img/template/actor-sprite.png";
    this.image.onload = function(){
        that.ready = true;
    };

    this.width = options.width || this.image.width;
    this.height = options.height || this.image.height / this.frames;
}
Actor.prototype.constructor = Actor;

Actor.prototype.action = function () {
    this.x += this.velocity;
};



function Scene(options) {
    this.context = options.context || null;
    this.width = options.width || 0;
    this.height = options.height || 0;

    this.ticksPerFrame = options.ticksPerFrame || 0;
    this.numberOfFrames = options.numberOfFrames || 1;

    this.frameIndex = 0;
    this.tickCount = 0;
    this.actors = [];
}
Scene.prototype.constructor = Scene;

Scene.prototype.addActor = function (options) {
    var actor = new Actor(options);
    this.actors.push(actor);
};

Scene.prototype.tick = function () {

    this.tickCount++;

    if (this.tickCount > this.ticksPerFrame) {

        this.tickCount = 0;

        for (var item in this.actors) {
            var actor = this.actors[item];
            actor.action();
        }

        if (this.frameIndex < this.numberOfFrames - 1) {
            this.frameIndex++;
        } else {
            this.frameIndex = 0;
        }
    }
};

Scene.prototype.render = function () {

    this.context.clearRect(0, 0, this.width, this.height);
    
    for (var item in this.actors) {
        var actor = this.actors[item];

        this.context.drawImage(
            actor.image,
            0,
            this.frameIndex * actor.height,
            actor.width,
            actor.height,
            actor.x,
            actor.y,
            actor.width,
            actor.height)

    }
};

Scene.prototype.init = function () {

    var basePath = "/public/img/template/";

    var now = new Date();
    var currentYear = now.getFullYear();
    if (now < new Date(currentYear, 2, 1))
        basePath += "winter/";

    this.addActor({
        image: basePath + "actor.png",
        x: 40,
        y: 155,
        velocity: 5,
        width: 42,
        height: 30,
        frames: 4
    });

    this.addActor({
        image: basePath + "actor1.png",
        x: 0,
        y: 155,
        velocity: 6,
        width: 42,
        height: 30,
        frames: 4
    });

    this.addActor({
        image: basePath + "actor2.png",
        x: 50,
        y: 155,
        velocity: 7,
        width: 42,
        height: 30,
        frames: 4
    });

};



(function () {

    var canvas = document.getElementById('stage');
    canvas.width = 2048;
    canvas.height = 190;
    canvas.style.marginLeft = '-'+ parseInt(canvas.width/2) +'px';

    var scene = new Scene({
        context: canvas.getContext('2d'),
        width: canvas.width,
        height: canvas.height,
        numberOfFrames: 4,
        ticksPerFrame: 5,
    });

    scene.init();

    function sceneLoop () {
        window.requestAnimationFrame(sceneLoop);

        scene.tick();
        scene.render();
    }
    window.addEventListener("load", sceneLoop);

} ());