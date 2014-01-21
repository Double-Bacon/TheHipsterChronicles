var timeRecharge :float = 3;
var time :float = timeRecharge;
var velocityBullet :float = 20; 
var lifeTime :float = 3;

var exitBullet :GameObject; 
var enemy :GameObject;

var bulletSpeed :GameObject;
var bulletVomit :GameObject;
var newShot_Speed :GameObject = null;
var newShot_Vomit :GameObject = null;

var BulletFire :int = 0;

var active_shooting :float = 0;

function Update () {
  
  if(active_shooting == 1){
  
	time -= Time.deltaTime;
	
	if(time <= 0){
		if(BulletFire == 1){
			newShot_Speed = Instantiate(bulletSpeed, exitBullet.transform.position, enemy.transform.rotation);
			Destroy(newShot_Speed, lifeTime);
			newShot_Speed.AddComponent("EliminarBala");  //añadir tiempo de vida a la bala
			BulletFire = 0;
		}else{
			newShot_Vomit = Instantiate(bulletVomit, exitBullet.transform.position, enemy.transform.rotation);
			Destroy(newShot_Vomit, lifeTime);
			newShot_Vomit.AddComponent("EliminarBala");  //añadir tiempo de vida a la bala
			BulletFire = 1;
		}
		time = timeRecharge;
	}
	
	if(newShot_Speed != null)
		newShot_Speed.transform.Translate(new Vector3(-velocityBullet, 0, 0)*Time.deltaTime);  //aplicar velocidad
		
	if(newShot_Vomit != null)
		newShot_Vomit.transform.Translate(new Vector3(-velocityBullet, 0, 0)*Time.deltaTime);  //aplicar velocidad
  }		
}
