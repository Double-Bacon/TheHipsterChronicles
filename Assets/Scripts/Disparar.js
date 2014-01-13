public var posicionDisparo:GameObject;
var VelocidadBala=20;
var emptyObject;
public var bala:GameObject;
function Start () {
	
	//pistola = GameObject.Find("Pistola");
	posicionDisparo = GameObject.Find("PosicionInicialBala");
	//disparo = GameObject.Find("Disparo");
	emptyObject = new GameObject();
	emptyObject.transform.parent = transform;
	
}

function Update () {

if(Input.GetKeyUp(KeyCode.Mouse0)){

	var NuevoDisparo : GameObject = Instantiate(bala, posicionDisparo.transform.position, bala.transform.rotation);
		
	NuevoDisparo.transform.parent = emptyObject.transform;
	NuevoDisparo.transform.localScale = new Vector3(0.15,0.15,0.15);
	NuevoDisparo.transform.parent = emptyObject.transform;
	//NuevoDisparo.gameObject.AddComponent(Rigidbody);
	//NuevoDisparo.GetComponent(Rigidbody).useGravity = false;
	//NuevoDisparo.transform.collider.isTrigger = true;//.gameObject.AddComponent(ColisionDisparo);
	//NuevoDisparo.GetComponent(SphereCollider).

	NuevoDisparo.AddComponent("DestruirDisparo");
	direction =Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x,Input.mousePosition.y,transform.position.z));//  - transform.position;
	direction = new Vector3(direction.x,direction.y,0);	
	NuevoDisparo.transform.LookAt(direction);
	NuevoDisparo.rigidbody.AddRelativeForce(Vector3.forward * VelocidadBala,ForceMode.VelocityChange);
	
}

}