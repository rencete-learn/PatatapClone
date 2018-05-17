// Define the sounds
var sounds = [
    new Howl({
        src: ['assets/sounds/bubbles.mp3']
    }),
    new Howl({
        src: ['assets/sounds/clay.mp3']
    }),
    new Howl({
        src: ['assets/sounds/confetti.mp3']
    }),
    new Howl({
        src: ['assets/sounds/corona.mp3']
    }),
    new Howl({
        src: ['assets/sounds/dotted-spiral.mp3']
    }),
    new Howl({
        src: ['assets/sounds/flash-1.mp3']
    }),
    new Howl({
        src: ['assets/sounds/flash-2.mp3']
    }),
    new Howl({
        src: ['assets/sounds/flash-3.mp3']
    }),
    new Howl({
        src: ['assets/sounds/glimmer.mp3']
    }),
    new Howl({
        src: ['assets/sounds/moon.mp3']
    }),
    new Howl({
        src: ['assets/sounds/pinwheel.mp3']
    }),
    new Howl({
        src: ['assets/sounds/piston-1.mp3']
    }),
    new Howl({
        src: ['assets/sounds/piston-2.mp3']
    }),
    new Howl({
        src: ['assets/sounds/piston-2.mp3']
    }),
    new Howl({
        src: ['assets/sounds/prism-1.mp3']
    }),
    new Howl({
        src: ['assets/sounds/prism-2.mp3']
    }),
    new Howl({
        src: ['assets/sounds/prism-3.mp3']
    }),
    new Howl({
        src: ['assets/sounds/splits.mp3']
    }),
    new Howl({
        src: ['assets/sounds/squiggle.mp3']
    }),
    new Howl({
        src: ['assets/sounds/strike.mp3']
    }),
    new Howl({
        src: ['assets/sounds/suspension.mp3']
    }),
    new Howl({
        src: ['assets/sounds/timer.mp3']
    }),
    new Howl({
        src: ['assets/sounds/ufo.mp3']
    }),
    new Howl({
        src: ['assets/sounds/veil.mp3']
    }),
    new Howl({
        src: ['assets/sounds/wipe.mp3']
    }),
    new Howl({
        src: ['assets/sounds/zig-zag.mp3']
    })
]

function onKeyDown(event) {
    if(event.key.match(/^[a-z]$/)) {
        var index = event.key.codePointAt(0) % 97

        // Place circle in random location
        var newPath = Path.Circle(view.size * Point.random(), 500)
        newPath.fillColor = 'red'
        newPath.fillColor.hue += index * Math.floor(360 / 26)

        // Play the corresponding sound
        sounds[index].play();
    }
    return false    
}

// Reduce the size until it's gone
function onFrame(event) {    
	for (var i = 0; i < project.activeLayer.children.length; i++) {
		var item = project.activeLayer.children[i]
        
        // Reduce the size
        item.scale(0.9)

		if (item.area <= 1) {
			item.remove()
		}
	}
}