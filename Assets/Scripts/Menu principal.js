var menuskin : GUISkin;

function OnGUI(){

	GUI.skin = menuskin;
	
	GUI.Box(Rect(Screen.width/2-(Screen.width/4),Screen.height/2-(Screen.height/4),Screen.width/2,Screen.height/2),"Menu Principal");
	
	if(GUI.Button(Rect(Screen.width/2-(Screen.width/12),Screen.height/2-(Screen.height/12+(Screen.height/12)),Screen.width/6,Screen.height/10),"Jugar")){
	
		Application.LoadLevel("Seleccion-mundo");
	
	}
	
	
	if(GUI.Button(Rect(Screen.width/2-(Screen.width/12),Screen.height/2-(Screen.height/12-(Screen.height/12)),Screen.width/6,Screen.height/10),"Salir")){
	
		Application.Quit();
	
	}

}