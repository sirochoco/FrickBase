var ballPrefab:GameObject;//ボールのプレファブ

var mouseStart;
var mouseEnd;
var startPoint:Vector3;//初めのクリックした点をワールド座標系に変換したもの
private var getVelocity=false;
var ballVelocity;
var flickTime=0;
var flickLength=0;
var ballSpeed;
var worldAngle;
var thrower=false;
var rotate=false;
var bySpeed:int;

function Awake(){

}

function Update () {

	if(Input.GetButtonDown("Fire1")){
		
		//初速度を取得する
		getVelocity=true;
		//マウスの初期座標
		mouseStart=Input.mousePosition;
		
		//クリックした点をワールド座標系に変換
		var screenPoint=mouseStart;
		screenPoint.z=10;
		startPoint=camera.ScreenToWorldPoint(screenPoint);
		//Debug.Log("startPoint"+startPoint);
		}
		
		if(Input.GetButtonUp("Fire1")){
		//速度の取得をストップ
		getVelocity=false;
		//マウスの最終座標
		mouseEnd=Input.mousePosition;
		
		GetSpeed();
		GetAngle();
		
		//Debug.Log("あなたの投球スピードは"+ballSpeed);
		//Debug.Log("あなたの投球角度は"+worldAngle);
		//Debug.Log("ballVelocity"+ballVelocity);
		//Debug.Log("flickTime"+flickTime);
		thrower=true;
		rotate=true;
		
		//はじめにクリックした位置にボールのインスタンスを生成
		
		var ball:GameObject=Instantiate(ballPrefab,startPoint,transform.rotation);
		ball.rigidbody.velocity=worldAngle*ballSpeed;
	
		//Debug.Log("ball.rigidbody.velocity"+ball.rigidbody.velocity);
		//ball.Update();
		}
		
		if(getVelocity){
		flickTime++;
		}
		
}
		
function GetSpeed(){
	flickLength=(Screen.height-mouseStart.y)-(Screen.height-mouseEnd.y);	
	if(flickTime>0){
	ballVelocity=flickLength/flickTime;		
	}	
		ballSpeed=ballVelocity*bySpeed;
		//ballSpeed=ballSpeed-(ballSpeed*2);	
}

function GetAngle(){
	//worldAngle=Camera.main.ScreenToWorldPoint(Vector3(mouseEnd.x,mouseEnd.y,(Camera.main.nearClipPlane+100)));
	
	worldAngle=camera.ScreenToWorldPoint(Vector3(mouseEnd.x,mouseEnd.y,(camera.nearClipPlane+100))).normalized-startPoint.normalized;		
}		
		//前方向への速度ベクトルを設定する
		//var direction:Vector3=transform.forward;
		//ball.rigidbody.velocity=direction*initialVelocity;

		
