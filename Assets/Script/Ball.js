function OnCollisionEnter(collisionInfo:Collision){
//ヒット、ストライク、ボール分岐
	if(collisionInfo.gameObject.tag=="Hit"){
	//gemeObjectへメッセージを送信する
		collisionInfo.gameObject.SendMessage("Hit");
		Debug.Log(collisionInfo.gameObject.tag);
		Destroy(gameObject);
	}
	else if(collisionInfo.gameObject.tag=="Strike")
	{
		collisionInfo.gameObject.SendMessage("StrikeJudgment");
		Debug.Log(collisionInfo.gameObject.tag);
		Destroy(gameObject);
	}
	else
	{
		collisionInfo.gameObject.SendMessage("BallJudgment");
		Debug.Log(collisionInfo.gameObject.tag);
		Destroy(gameObject);
}
}

