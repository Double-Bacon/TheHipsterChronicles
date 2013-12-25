#pragma strict

var prueba : float =5;

function Update () {
		transform.Translate(Vector3(0,0,0) * Time.deltaTime*prueba);
}