function onKeyDown(event) {
	var shape = new Shape.Circle(view.viewSize * Point.random(), 30);
    shape.strokeColor = 'black';
    return false;
}