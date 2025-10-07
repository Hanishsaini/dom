const promiseONE = new Promise(function(resolve,reject){
    //DB an async task
    //DB calls
    setTimeout(function(){
        console.log('async task is complete');
        //connecting dot then to the upper resolve 
        resolve()
  
    },1000)
})
//dot then has a direct connection with resolve in upper code
promiseONE.then(function(){
    console.log("promise consumed");
    



//in one 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    })
},1000)

}).then(function(){
    console.log("async is done");
})