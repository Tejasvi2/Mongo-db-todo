var mongoose=require('mongoose');
const MyUser=mongoose.model('MyUser',{
	Name:{
		type:String,
		minlength:1,
		required:true,
		trim:true
	},
	Email:{
		type:String,
		minlength:1,
		required:true,
		trim:true
	}
})


/*var myuserdata=new MyUser({
	Name:'my name is tejuu ',
	Email:'tej@gmail.com'
});

myuserdata.save().then((res)=>{
	console.log(JSON.stringify(res,undefined,2));
});*/

module.exports={MyUser};
