//Para acceder a la función del script de la cámara, tengo que buscar la cámara, y luego sacar su cript.
var cameraCollidersControllerScript;
var obstacleTag : String;
var deathPlaneTag : String;
var playerColliderBox : BoxCollider2D;
var circleCollider : CircleCollider2D;

function Start(){
	cameraCollidersControllerScript = GameObject.Find("Main Camera").GetComponent(CameraCollidersController);
	obstacleTag = "Obstacle";
	deathPlaneTag = "Death Plane";
}

function OnTriggerEnter2D (collider : Collider2D){	
	if(collider.tag == deathPlaneTag){
		//LLamar al script de morirse.
		print("Me he muerto!!");
	}
	if (collider.tag == obstacleTag){
		//Deshabilitar collider izquierdo de la cámara.
		print("He chocado contra un obstáculo");
		cameraCollidersControllerScript.disableLeftCollider();
	}
}
function OnTriggerExit2D (collider : Collider2D){
	if(collider.tag == obstacleTag){
		//Habilitar collider izquierdo de la cámara
		print("He esquivado el obstáculo contra el que me choqué.");
		cameraCollidersControllerScript.disableLeftCollider();
		
	}
}
