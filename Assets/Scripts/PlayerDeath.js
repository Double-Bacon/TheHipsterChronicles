private var dying : boolean;
private var jumpSpeed : float;
private var fallSpeed : float = 2.0;
private var t : float = 0.85;
var movCameraScript : movimientoCamara;
var boxCollider : BoxCollider2D;
var circleCollider : CircleCollider2D;
var pauseScript : Pause;

function Start(){
	dying = false;
	jumpSpeed = 70.0;
}

function Update(){
	if(dying){
		var rig : Rigidbody2D = GetComponent(Rigidbody2D);
		var movement = Vector2(0, jumpSpeed);
		jumpSpeed *= t;
		rig.AddForce(movement);
	}
}

function die (){
	dying = true;
	movCameraScript.stopCamera();
	boxCollider.enabled = false;
	circleCollider.enabled = false;
	pauseScript.enabled = false;
	print("He muerto!! :'(");
}