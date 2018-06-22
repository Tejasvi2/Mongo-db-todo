var mongoose=require('mongoose');
var Mytodo=mongoose.model('Mytodo',{
text: {
	type:String,
	 required: true,
	minlength:1,
	trim:true
},
completed:{
    type:Boolean,
    default:false
},
completedAt:{
 type:Number,
 default:null
}



});
/*var newMytodo=new Mytodo({
	text:'tejuu'
});


newMytodo.save().then((res)=>{
	console.log(res);
},(e)=>{
	console.log('error');
})*/

/*var oneMoretodo=new Mytodo({
	text:' bropsi  ',
	
});

oneMoretodo.save().then((res)=>{
	console.log(JSON.stringify(res,undefined,2));
},(e)=>{
	console.log('error');
});
*/

module.exports={Mytodo};