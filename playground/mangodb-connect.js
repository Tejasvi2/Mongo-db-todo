const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		return console.log('unable to connect');
	}

	const db=client.db('TodoApp');
	console.log('connected');
    db.collection('todos').find().toArray().then((docs)=>{
    	console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
    	console.log('unable to connect');
    });




	//db.close();
})


