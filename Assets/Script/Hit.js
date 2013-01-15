private var nowPosition:Vector3;
var rand:float=Random.Range(1.0,5.0);
function Awake(){
//初期値を取得
nowPosition=transform.position;

}

function Update(){

var offs=Vector3(Mathf.Cos(Time.time),Mathf.Sin(Time.time),0)*rand;
transform.position=nowPosition+offs;
}

function Hit(){
Debug.Log("ヒット");
}