#pragma strict
var vidasScript : vidas;
var mrenderer : SpriteRenderer;
var modeDuration : float = 3.0;
var blinkInterval : float = 0.2;
private var modeEnabled : boolean;

function Start () {
	modeEnabled = false;
}

function Update () {

}

function getEnabled() : boolean{
	return modeEnabled;
}

function startNoHarmMode(){
	modeEnabled = true;
	InvokeRepeating("blink", 0.01, blinkInterval);
	StartCoroutine(stopNoHarmMode());
}

function blink(){
	mrenderer.enabled = !mrenderer.enabled;
}

function stopNoHarmMode(){
	yield WaitForSeconds(modeDuration);
	modeEnabled = false;
	CancelInvoke("blink");
}