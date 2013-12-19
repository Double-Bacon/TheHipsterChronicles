var timeRecharge :float = 1;
var time :float = timeRecharge;
var velocityBullet :float = 20;

var exitBullet :GameObject; 
var enemy :GameObject;
var bullet :GameObject;

function Update () {
	time -= Time.deltaTime;

	if(time <= 0){
		var newShot :GameObject = Instantiate(bullet, exitBullet.transform.position, enemy.transform.rotation);
		newShot.AddComponent("EliminarBala");  //añadir tiempo de vida a la bala
		newShot.rigidbody.AddRelativeForce(new Vector3(-velocityBullet, 0, 0), ForceMode.VelocityChange);  //aplicar velocidad
		 
		time = timeRecharge;	
	}
}