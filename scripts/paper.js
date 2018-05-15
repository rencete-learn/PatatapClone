// Make a symbol of a circle
var base = Shape.Circle(view.center, 60)
base.fillColor = 'black'
var symbol = new Symbol(base);

function onKeyDown(event) {
    // Place circle in random location
    symbol.place(view.viewSize * Point.random())

    // Select last placed symbol
    var ps = project.activeLayer.lastChild
    // Randomize the size of the circle
    var newRadius = Math.random() * (ps.bounds.width) + 60
    ps.bounds.width = newRadius
    ps.bounds.height = ps.bounds.width
    return false
}



// Reduce the size until it's gone
function onFrame(event) {    
	for (var i = 0; i < project.activeLayer.children.length; i++) {
		var item = project.activeLayer.children[i]
        
        // Reduce the size
        item.bounds.width -= 3
        item.bounds.height -= 3

		if (item.bounds.width <= 3) {
			item.remove()
		}
	}
}