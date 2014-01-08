var disparoEnemigo :DisparoEnemigo;

function OnTriggerEnter2D (coll : Collider2D){

	if(coll.gameObject.name.Contains("Main Camera")){
		disparoEnemigo.active_shooting = 1;
	}else if(coll.gameObject.name.Contains("Death Y Plane"))
		disparoEnemigo.active_shooting = 0;
}