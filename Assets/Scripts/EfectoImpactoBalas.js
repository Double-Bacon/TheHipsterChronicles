var timeRecharge :float = 3;
var timeRechargeVomit :float = 0.5;
var timeRechargeSpeed :float = 5;

var time :float = 0;
var timeVomit :float = timeRechargeVomit;
var timeSpeed :float = timeRechargeSpeed;

var countVomit :float = 5;

var vomit :int = 0;
var vomitPartSyst :ParticleSystem;

var speed :int = 0;
var inicCountSpeed :int = 0;

//var playerControl : = (GetComponent("PlayerControl") as MonoBehaviour);

function Start(){

	 vomitPartSyst = GameObject.Find("Vomito").GetComponent(ParticleSystem);
}

function Update(){
	
	if(vomit == 1){
		
		if(time <= 0){
			vomitPartSyst.Play();			
			timeVomit -= Time.deltaTime;
		}else
			time -= Time.deltaTime;
		
		if(timeVomit <= 0){
			vomitPartSyst.Stop();
			time = timeRecharge;
			timeVomit = timeRechargeVomit;
			countVomit -= 1;
		}			
			
		if(countVomit == 0)
			vomit = 0;
					
	}
	/*
	if(speed == 1){
		if(inicCountSpeed == 0){
			(GetComponent("PlayerControl") as MonoBehaviour).speed /= 2;
			timeSpeed = timeRechargeSpeed;
			inicCountSpeed = 1;
		}else{
			 timeSpeed -= Time.deltaTime;
			 if(timeSpeed <= 0){
			 	(GetComponent("PlayerControl") as MonoBehaviour).speed *= 2;
			 	inicCountSpeed = 0;
			 	speed = 0;
			 }
		}
	}*/
}


function OnTriggerEnter2D (coll : Collider2D){

	if(coll.gameObject.name.Contains("Bala_Speed")){
		speed = 1;
	}else{
	 if(coll.gameObject.name.Contains("BalaVomit"))
		vomit = 1;		
	}
}
