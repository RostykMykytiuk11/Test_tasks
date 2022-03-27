function mersen(n){
    let arr = []
    if(n<=0 || isNaN(n)){
        return("Please Enter correct data")
    }
    else{
        for(let i=1;i<n;i++){  
            if(Math.pow(2,i)-1>n) break         
            else{
                arr.push(Math.pow(2,i)-1)
            }     
        }
        return arr    
    }
}
module.exports = {mersen}

