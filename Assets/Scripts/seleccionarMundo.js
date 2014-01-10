
var moverIzquierda=false;
var moverDerecha=false;
var speed : float = 5;
var posicionCamara;
var niveles = 5;
var mimundo1 : GameObject;
var mimundo2 : GameObject;
var mimundo3 : GameObject;
var mimundo4 : GameObject;
var mimundo5 : GameObject;
var nivelActual=1;/*
var texturaprehistoria : Texture2D;
var texturaglacial : Texture2D; 
var texturarenacimiento : Texture2D;
var texturaactual : Texture2D;
var texturafuturo : Texture2D;
*/
//var scriptZoom = gameObject.GetComponent("zoomSeleccionNivel.js");

function OnGUI(){
	 

	
	if(GUI.Button(Rect(Screen.width/10,8*(Screen.height/10),Screen.width/8,Screen.height/8),"Anterior")){
	
		if(moverIzquierda==false&&moverDerecha==false&&nivelActual>1){
			nivelActual--;
			moverIzquierda=true;
		}
	}
	
	if(GUI.Button(Rect((Screen.width-(Screen.width/10)-Screen.width/8),8*(Screen.height/10),Screen.width/8,Screen.height/8),"Siguiente")){
	
		if(moverIzquierda==false&&moverDerecha==false&&nivelActual<niveles){
			nivelActual++;
			moverDerecha=true; 
		}
			
	} 
}  
 
function Start(){

	//mimundo1= Resources.Load("Prefabs/mundo1"); 
	
	posicionCamara = transform.position.x; 
	 
	  Instantiate(mimundo1);
	  Instantiate(mimundo2);
	  Instantiate(mimundo3);
	  Instantiate(mimundo4);
	  Instantiate(mimundo5);
	  
	
/*	 for (var y = 3; y <= niveles; y++) {
	  
            var plano = GameObject.CreatePrimitive(PrimitiveType.Plane);
            plano.transform.position = Vector3 ((y-1)*15,0,15);
            plano.transform.eulerAngles = Vector3 (90,180,0);
            plano.AddComponent("cargarEscena"); 
            plano.name="plano"+y;  
    } 
  */
  
  
 	 
} 

function Update (){


	if(moverIzquierda){ 
	
		if(transform.position.x-posicionCamara>-15){
	
			transform.Translate(Vector3(-5,0,0) * (speed*Time.deltaTime));
		}
		else{
			transform.position.x=posicionCamara-15;
			posicionCamara=transform.position.x;
			moverIzquierda=false;
		}

	}
	if(moverDerecha){
	
		if(transform.position.x-posicionCamara<15){	
			transform.Translate(Vector3(5,0,0) * (speed*Time.deltaTime));
		}
		else{
			transform.position.x=posicionCamara+15;
			posicionCamara=transform.position.x;
			moverDerecha=false;
		}
	}
}