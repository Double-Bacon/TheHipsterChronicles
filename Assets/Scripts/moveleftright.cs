using UnityEngine;
using System.Collections;

public class moveleftright : MonoBehaviour {

	public float speed = 10.0f;
	public string axisName = "Horizontal";		
	public string jumpButton ="space";
	public float jumpPower = 250.0f;
 	private Animator anim;

	// Use this for initialization 
	void Start () {

		anim = gameObject.GetComponent<Animator>();
	  
	}   

	// Update is called once per frame 
	void Update () {  

		 
		if(Input.GetKeyDown(jumpButton)){
			
			rigidbody2D.AddForce(transform.up*jumpPower); 
		} 

		anim.SetFloat("Speed", Mathf.Abs(Input.GetAxis(axisName)));
		//Debug.Log(Mathf.Abs(Input.GetAxis(axisName)));
		transform.position += transform.right*Input.GetAxis(axisName)*speed*Time.deltaTime;
	}
}
 