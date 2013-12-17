#pragma strict

var speed :float;
var posMinX :float;
var posMaxX :float;

function Start () {
	
	posMaxX = this.gameObject.transform.position.x + 5.0;
	posMinX = this.gameObject.transform.position.x - 5.0;
	speed = -3;

}

function Update () {

	if(this.gameObject.transform.position.x > posMaxX || this.gameObject.transform.position.x < posMinX)
		speed *= -1;
	
	this.gameObject.transform.Translate(Vector3(speed, 0, 0)*Time.deltaTime);
	//this.gameObject.transform.position.x += velocity;
	
	//var movement = Vector2(velocity, 0);
	//this.rigidbody2D.AddForce(movement);
	
}


function OnCollisionEnter2D(col: Collision2D){
	
	if(col.gameObject.tag == "Trampa" || col.gameObject.tag == "Obstacle")
		speed *= -1;

}