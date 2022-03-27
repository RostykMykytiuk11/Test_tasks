function sum(n,m){
    let summ=0
    const newN = n.toString()
    let i = newN.length - 1
    if(m>newN.length){
        return("Please enter the correct data")
    }
    else{

        while(m>0){
            summ += parseInt(newN[i])
            i--
            m--        
        }
        
        return summ
        
        }
} 
module.exports =  {sum}
