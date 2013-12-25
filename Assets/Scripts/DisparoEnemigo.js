var timeRecharge :float = 3;
var time :float = timeRecharge;
var velocityBullet :float = 20; 

var exitBullet :GameObject; 
var enemy :GameObject;

var bulletDistorsion :GameObject;
var bulletVomit :GameObject;
var newShot_Dist :GameObject = null;
var newShot_Vomit :GameObject = null;

var DistBulletFire :int = 0;

function Update () {
	time -= Time.deltaTime;
	
	if(time <= 0){
		if(DistBulletFire == 1){
			newShot_Dist = Instantiate(bulletDistorsion, exitBullet.transform.position, enemy.transform.rotation);
			newShot_Dist.AddComponent("EliminarBala");  //añadir tiempo de vida a la bala
			DistBulletFire = 0;
		}else{
			newShot_Vomit = Instantiate(bulletVomit, exitBullet.transform.position, enemy.transform.rotation);
			newShot_Vomit.AddComponent("EliminarBala");  //añadir tiempo de vida a la bala
			DistBulletFire = 1;
		}
		time = timeRecharge;
	}
	
	if(newShot_Dist != null)
		newShot_Dist.transform.Translate(new Vector3(-velocityBullet, 0, 0)*Time.deltaTime);  //aplicar velocidad
		
	if(newShot_Vomit != null)
		newShot_Vomit.transform.Translate(new Vector3(-velocityBullet, 0, 0)*Time.deltaTime);  //aplicar velocidad
		
}