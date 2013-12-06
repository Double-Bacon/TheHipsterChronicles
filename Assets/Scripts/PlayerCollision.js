//Para acceder a la función del script de la cámara, tengo que buscar la cámara, y luego sacar su cript.
var cameraCollidersControllerScript;
var obstacleTag : String;
var deathPlaneTag : String;

function Start(){
	cameraCollidersControllerScript = GameObject.Find("Main Camera").GetComponent(CameraCollidersController);
	obstacleTag = "Floor";
	deathPlaneTag = "Death Plane";
	//print("Start");
}

function OnTriggerEnter2D (collider : Collider2D){
	//print("Other collider: " + collider.name);
	if(collider.tag == "DeathPlane"){
		//LLamar al script de morirse.
		print("Me he muerto!!");
	}
}
function OnCollisionEnter2D (collision : Collision2D){
	//print("Entrado" + collision.collider.tag);
	if(collision.collider.tag == obstacleTag){
		print("He chocado contra un obstáculo");
		cameraCollidersControllerScript.disableLeftCollider();
	}
}
function OnCollisionExit2D (collision: Collision2D){
	//print("Salido" + collision.collider.tag);
	if(collision.collider.tag == obstacleTag){
		print("He chocado contra un obstáculo");
		cameraCollidersControllerScript.enableLeftCollider();
	}
}
