const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err)
	{
		return console.log('error occured',err);
	}
	const db=client.db('TodoApp');

	//
	/*db.collection('todos').findOneAndUpdate(
	{
		_id:new ObjectID('5b2b6a4c2e974014546a2c63')
	},{
			$set:{
				completed:true
			}
		},{
			returnOriginal:false
		}).then((result)=>{
		console.log('updated sucessfully',result)
	});*/

		db.collection('Users').findOneAndUpdate({_id:new ObjectID('5b2b4cbb2ff4cb392012e401')},{
			$set:{
				name:'tejj'
			},
			$inc:{
				age:1
			}
		},{
			returnOriginal:false
		}).then((result)=>{
		console.log('updated sucessfully',result)
		});

});