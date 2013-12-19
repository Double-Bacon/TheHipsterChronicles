#pragma strict
static var numVidas=3;
var noHarmModeScript : PlayerNoHarmMode;

function getVidas(){

	return numVidas;

}


function Start () {

	numVidas=3;
 
}

function Update () {}

function OnCollisionEnter2D(coll: Collision2D) {

	
	if ((coll.gameObject.tag == "Trampa" || coll.gameObject.name == "Enemigo1") && !noHarmModeScript.getEnabled()){

		numVidas--;
		
		noHarmModeScript.startNoHarmMode();
	}
} 