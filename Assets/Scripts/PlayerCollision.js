//Para acceder a la función del script de la cámara, tengo que buscar la cámara, y luego sacar su cript.
var cameraCollidersControllerScript : CameraCollidersController;
var playerDeathScript : PlayerDeath;
var obstacleTag : String;
var deathPlaneTag : String;
var playerColliderBox : BoxCollider2D;
var upperCircleCollider : CircleCollider2D;
var lowerCircleCollider : CircleCollider2D;

function Start(){
	obstacleTag = "Obstacle";
	deathPlaneTag = "Death Plane";
}

function OnTriggerEnter2D (collider : Collider2D){
	if(collider.tag == deathPlaneTag){
		playerDeathScript.die();
	}
	if (collider.tag == obstacleTag){
		//Deshabilitar collider izquierdo de la cámara.
		//print("He chocado contra un obstáculo");
		cameraCollidersControllerScript.disableLeftCollider();
	}
}
function OnTriggerExit2D (collider : Collider2D){
	if(collider.tag == obstacleTag){
		//Habilitar collider izquierdo de la cámara
		//print("He esquivado el obstáculo contra el que me choqué.");
		cameraCollidersControllerScript.enableLeftCollider();
	}
}

function enableUpperCircleCollider (){
	upperCircleCollider.enabled = true;
}

function disableUpperCircleCollider (){
	upperCircleCollider.enabled = false;
}

function enableLowerCircleCollider(){
	lowerCircleCollider.enabled = true;
}

function disableLowerCircleCollider(){
	lowerCircleCollider.enabled = false;
}
