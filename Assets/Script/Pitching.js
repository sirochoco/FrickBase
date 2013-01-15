var ballPrefab:GameObject;//ボールのプレファブ
var initialVelocity:float;//ボールの初速
var startPosition:Vector3;
var screenPoint:Vector3;

function Update () {
	if(Input.GetButtonDown("Fire1")){
		//ボールのプレファブ化
		var ball:GameObject=Instantiate(ballPrefab,startPosition,transform.rotation);
		
		//クリックした点をワールド座標系に変換
		screenPoint=Input.mousePosition;
		screenPoint.z=30;
		var worldPoint=camera.ScreenToWorldPoint(screenPoint);
		//クリックした点への速度ベクトルを設定する
		var direction:Vector3=(worldPoint-startPosition).normalized;
		
		Debug.Log("worldPoint"+worldPoint);
		Debug.Log("direction"+direction);
		
		ball.rigidbody.velocity=direction*initialVelocity;
		
	}
}