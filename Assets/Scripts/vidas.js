#pragma strict
static var numVidas=3;

function getVidas(){

	return numVidas;

}
	
function quitaVidas(){

	numVidas--;

}

function Start () {

numVidas=3;
 
}

function Update () {}

function OnCollisionEnter2D(coll: Collision2D) {

	
	if (coll.gameObject.tag == "Trampa"){

		numVidas--;

	}
} 