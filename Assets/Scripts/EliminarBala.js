var lifeTime :float = 3;

function Start () {

	Destroy(this.gameObject, lifeTime);
}

function OnTriggerEnter2D (coll : Collider2D){

	if(coll.gameObject.tag.Contains("Obstacle") || coll.gameObject.tag.Contains("Obstacle"))
		Destroy(this.gameObject);
		
}
		
		