var express=require('express');
var bodyParser=require('body-parser');
var {mongoose}=require('./db/mongoose.js');

var {Mytodo}=require('./models/todos.js');

var {MyUser}=require('./models/Users.js');

var app=express();

app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
/*console.log(req.body);*/
var todo = new Mytodo({
	text:req.body.text
});
todo.save().then((doc)=>{
	res.send(doc)
},(err)=>{
	res.send(err)
})
});

app.post('/Users',(req,res)=>{
	var user=new MyUser({
		Name:req.body.Name,
		Email:req.body.Email
	});
	user.save().then((doc)=>{
	res.send(doc)
},(err)=>{
	res.send(err)
}) 
})

app.listen(3000,()=>{
	console.log('connected to 3000');
});






