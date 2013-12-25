var timeRecharge :float = 3;
var timeRechargeVomit :float = 0.5;

var time :float = 0;
var timeVomit :float = timeRechargeVomit;

var countVomit :float = 5;

var vomit :int = 0;
var vomitPartSyst :ParticleEmitter;

function Start(){

	 vomitPartSyst = GameObject.Find("Vomito").GetComponent(ParticleEmitter);
}

function Update(){
	
	if(vomit == 1){
		
		if(time <= 0){
			vomitPartSyst.enabled = true;			
			timeVomit -= Time.deltaTime;
		}else
			time -= Time.deltaTime;
		
		if(timeVomit <= 0){
			vomitPartSyst.enabled = false;
			time = timeRecharge;
			timeVomit = timeRechargeVomit;
			countVomit -= 1;
		}			
			
		if(countVomit == 0)
			vomit = 0;
			
	}
}


function OnTriggerEnter2D (coll : Collider2D){

	if(coll.gameObject.name.Contains("Bala_Dist")){
		
	}else{
	 if(coll.gameObject.name.Contains("BalaVomit"))
		vomit = 1;		
	}
}
