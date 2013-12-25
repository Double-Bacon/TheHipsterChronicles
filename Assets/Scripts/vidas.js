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

//function OnCollisionEnter2D(coll: Collision2D) {
//
//	Debug.Log("Vidas.js--> OnCollisionEnter2D:"+coll.gameObject.name);
//	if ((coll.gameObject.tag.Contains("Trampa") || coll.gameObject.name.Contains("Enemigo1")) && !noHarmModeScript.getEnabled()){
//
//		numVidas--;
//		
//		noHarmModeScript.startNoHarmMode();
//	}
//} 


function OnTriggerEnter2D (coll : Collider2D){
	Debug.Log("Vidas.js--> OnCollisionEnter2D:"+coll.gameObject.name);
	if ((coll.gameObject.tag.Contains("Trampa") || coll.gameObject.name.Contains("Enemigo1")) && !noHarmModeScript.getEnabled()){

		numVidas--;
		
		noHarmModeScript.startNoHarmMode();
	}
	
	
}