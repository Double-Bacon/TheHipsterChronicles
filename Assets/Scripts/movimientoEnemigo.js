#pragma strict

var velocity :float;
var posMinX :float;
var posMaxX :float;

function Start () {

	posMaxX = this.gameObject.transform.position.x;
	posMinX = posMaxX - 30.0;
	velocity = -0.02;
}

function Update () {
	
	if(this.gameObject.transform.position.x > posMaxX || this.gameObject.transform.position.x < posMinX)
		velocity *= -1;
	 
	this.gameObject.transform.position.x += velocity;
	//var movement = Vector2(velocity, 0);
	//this.rigidbody2D.AddForce(movement);

}


function OnCollisionEnter2D(col: Collision2D){

	if(col.gameObject.name == "Trampa" || col.gameObject.name == "Caja carton" || col.gameObject.tag == "Coche")
		velocity *= -1;
}