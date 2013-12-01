#pragma strict

var prueba : float =5;

function Update () {

	transform.Translate(Vector3(1,0,0) * Time.deltaTime*prueba);
} 