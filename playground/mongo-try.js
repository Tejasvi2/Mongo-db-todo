const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		return console.log('unable to connect');
	}
	console.log('connected');
	const db=client.db('TodoApp')

	/*db.collection('todos').insertOne({
		text:'something',
		completed:'false'
	},(err,result)=>{
		if(err)
		{
			console.log('error',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});*/

	/*db.collection('Users').insertOne({
		name:'tejasvi',
		age:'23',
		location:'mumbai'
	},(err,result)=>{
		if(err){
			return console.log('error is',err)
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});*/
	client.close();
})