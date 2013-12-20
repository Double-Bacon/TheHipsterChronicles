var timeRecharge :float = 3;
var time :float = timeRecharge;
var velocityBullet :float = 20; 

var exitBullet :GameObject; 
var enemy :GameObject;
var bullet :GameObject;
	var newShot :GameObject = null;
function Update () {
	time -= Time.deltaTime;

	if(time <= 0){
		newShot = Instantiate(bullet, exitBullet.transform.position, enemy.transform.rotation);
		newShot.AddComponent("EliminarBala");  //añadir tiempo de vida a la bala
		
		time = timeRecharge;
		print (time);	
	}
	if(newShot != null)
		newShot.transform.Translate(new Vector3(-velocityBullet, 0, 0)*Time.deltaTime);  //aplicar velocidad
}