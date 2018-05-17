function onKeyDown(event) {
    if(event.key.match(/^[a-z]$/)) {
        var index = event.key.codePointAt(0) % 97

        // Place circle in random location
        var newPath = Path.Circle(view.size * Point.random(), 500)
        newPath.fillColor = 'red'
        newPath.fillColor.hue += index * Math.floor(360 / 24)
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