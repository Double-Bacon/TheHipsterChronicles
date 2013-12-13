private var pauseEnabled = false;	

function ReiniciarNivel(){

	Application.LoadLevel(Application.loadedLevel);
	Time.timeScale = 1.0;
	pauseEnabled = true;
}

function ReanudarNivel(){
    //Screen.showCursor = false;
	pauseEnabled = false;
	Time.timeScale = 1;
	(GetComponent("moveleftright") as MonoBehaviour).enabled = true;
}

function Start(){
	pauseEnabled = false;
	Time.timeScale = 1.0;
	//Screen.showCursor = false;
}

function Update(){

	//boton que llama a el menu
	if(Input.GetKeyDown("p")){
		
		if(pauseEnabled == false){
			pauseEnabled = true;
			Time.timeScale = 0.0;
			(GetComponent("moveleftright") as MonoBehaviour).enabled = false;
			//Screen.showCursor = true;
		}
	}
}
//private var showGraphicsDropDown = false;  //para modo bajar graficos

function OnGUI () {

	if(pauseEnabled == true){

	// botones del menu
	
		// Resumen

		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 110,250,50), "Continuar")){
			//Vuelve al juego
					
			if(pauseEnabled == true){
				ReanudarNivel();			
				//Screen.showCursor = false;			
			}
		}

// boton calidad visual del juego
	
		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 60 ,250,50), "Calidad Grafica")){
			/*
			if(showGraphicsDropDown == false){
				showGraphicsDropDown = true;
			}
			else{
				showGraphicsDropDown = false;
			}*/
		}
/*
//funcion para la calidad de imagen del juego
		if(showGraphicsDropDown == true){
			if(GUI.Button(Rect(Screen.width /2 - 500,Screen.height /3.5 ,250,50), "Fastest")){
				QualitySettings.currentLevel = QualityLevel.Fastest;
			}
			if(GUI.Button(Rect(Screen.width /2 - 500,Screen.height /3.5 + 50,250,50), "Fast")){
				QualitySettings.currentLevel = QualityLevel.Fast;
			}
			if(GUI.Button(Rect(Screen.width /2 - 500,Screen.height /3.5 + 100,250,50), "Simple")){
				QualitySettings.currentLevel = QualityLevel.Simple;
			}
			if(GUI.Button(Rect(Screen.width /2 - 500,Screen.height /3.5 + 150,250,50), "Good")){
				QualitySettings.currentLevel = QualityLevel.Good;
			}
			if(GUI.Button(Rect(Screen.width /2 - 500,Screen.height /3.5 + 200,250,50), "Beautiful")){
				QualitySettings.currentLevel = QualityLevel.Beautiful;
			}
			if(GUI.Button(Rect(Screen.width /2 - 500,Screen.height /3.5 + 250,250,50), "Fantastic")){
				QualitySettings.currentLevel = QualityLevel.Fantastic;
			}
			
			if(Input.GetKeyDown("escape")){
				showGraphicsDropDown = false;
			}
			
		}
*/

		// volver a menu principal

		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 10,250,50), "Reiniciar nivel" )){
			//llamar a reiniciar nivel
			
			ReiniciarNivel();
		}


		// salir del juego

		if (GUI.Button (Rect (Screen.width /2 - 150,Screen.height /2 +40,250,50), "Salir al menu principal")){
			Application.LoadLevel("PruebaMenu");
		}

	
	}

}
