const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err)
	{
		return console.log('error occured',err);
	}
	const db=client.db('TodoApp');

	//deletemany
	/*db.collection('todos').deleteMany({text:'delete'}).then((result)=>{
		console.log('deleted sucessfully',result);
	})*/
    

    //deleteone
	db.collection('todos').deleteOne({text:'delete'}).then((result)=>{
		console.log('deleted sucessfully',result);
	})

	//findoneanddelete
	db.collection('todos').findOneAndDelete({completed:'false'}).then((result)=>{
		console.log('deleted sucessfully',result);
	})


})