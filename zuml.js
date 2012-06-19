window.onload = function() {
	var stage = new Kinetic.Stage({
		container: "stage",
		width: 800,
		height: 600
	});
	
	var layer = new Kinetic.Layer();
	
	var rect = new Kinetic.Text({
		text: "Hi! Drag me around!\nTry new line",
		x: 20,
		y: 10,
		width: 300,
		height: 200,
		cornerRadius: 5,
		padding: 5,
		textFill: "white",
		fill: {
			start: {x: 0, y: 0},
			end: {x: 0, y: 200},
			colorStops: [0, "#ea00c6", 1, "#b00095"]
		},
		stroke: "#630254",
		strokeWidth: 3,
		draggable: true
	});
	
	layer.add(rect);
	
	stage.add(layer);
}