var leftCollider: BoxCollider2D;
var rightCollider : BoxCollider2D;

function disableLeftCollider(){
	print("Deshabilitando collider izquierdo");
	leftCollider.enabled = false;
}

function enableLeftCollider(){
	print("Habilitando collider izquierdo");
	leftCollider.enabled = true;
}

