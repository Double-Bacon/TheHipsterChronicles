#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
Debug.Log("OnTriggerEnter");
		Destroy(other.gameObject);
}

function OnCollisionEnter()
{
 
		Debug.Log("OnCollisionEnter");
}

function OnTriggerEnter2D (other : Collider2D){
	Debug.Log("OnTriggerEnter2D."+other.name);
	if(!other.name.Contains("Player")){
		Destroy(other.gameObject);
		Destroy(this.transform.gameObject);		
	}
	
}
