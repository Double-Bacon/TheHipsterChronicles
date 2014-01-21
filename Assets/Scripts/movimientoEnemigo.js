#pragma strict

var sizeZone: float = 5.0;
var speed :float;
var posMinX :float;
var posMaxX :float;

function Start () {
	
	posMaxX = this.gameObject.transform.position.x + sizeZone;
	posMinX = this.gameObject.transform.position.x - sizeZone;
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
	
	if(col.gameObject.tag.Contains("Trampa") || col.gameObject.tag.Contains("Obstacle"))
		speed *= -1;

}