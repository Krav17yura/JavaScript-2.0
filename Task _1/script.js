let a = "(())",
    count = 0;

    for(let i = 0; i < a.length; i++){
         if (a[i] == "("){
             count++;
         }else if( a[i] == ")"){
             count--;
         }
        if(count < 0){
            
            break;
        }  
    }
    if (count != 0){
        console.log(false);
    }else{
        console.log(true);
    }

   