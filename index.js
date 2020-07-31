// var rect ={
//     perimeter : (x,y) => (2*(x+y)),
//     area : (x,y) => (x*y)
// };
const rect = require('./rectangle');
const solveRect=(l,b)=>{
    console.log("solving rectangle length l = "+ l + " solving rectangle breadth b = " + b);
   rect(l,b,(err, rectangle) =>{
       if(err){
           console.log(err.message)
       }else{
           console.log("Area = " + rectangle.area(l,b));
           console.log("Perimeter = " + rectangle.perimeter(l,b))
       }
   })
   
}
solveRect(4,4);
solveRect(4,-5);