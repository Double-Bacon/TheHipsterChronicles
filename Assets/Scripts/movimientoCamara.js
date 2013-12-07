#pragma strict

var prueba : float =5;
var running : boolean;

function Start(){
	running = true;
}

function Update () {
	if(running){
		transform.Translate(Vector3(1,0,0) * Time.deltaTime*prueba);
	}
} 

function stopCamera(){
	running = false;
}

function resumeCamera(){
	running = true;
}