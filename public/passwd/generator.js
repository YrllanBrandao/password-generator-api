function generatePassword (passwordLenght)
{
 
  const lowers = ['a','b','c','d','e','f','g','h', 'i', 'j','k','l','m','n','o','p','q', 'r','s','t','u','v','w','x','y','z'];
  const uppers = ['A','B','C','D','E','F','G','H', 'I', 'J','K','L','M','N','O','P','Q', 'R','S','T','U','V','W','X','Y','Z'];
  const symbols = ['*','#','@','$','+','/','?','-','.','_','&',':',';'];

   const nums = [0,1,2,3,4,5,6,7,8,9];
   
   
   const newPassword = [];
     
     for(let i= 0; i < passwordLenght;i++)

     {
        
       const option = Math.floor(((Math.random()*4)+1));
       
        switch(option)
        {
          case 1://gera letras com minúsculo
            const n = Math.floor((Math.random()*uppers.length-1)+1);
            
            const index = lowers[n];
            newPassword.push(index);
            
            
            
            break
          
          case 2:// gera com letras maiúsculas
          const o = Math.floor((Math.random() * lowers.length-1) + 1);
          
          const index2 = uppers[o];
          newPassword.push(index2);
            
            
            break;
          
          case 3://gera com numeros
            
            const m = Math.floor((Math.random() * nums.length-1) );
            
            const index3 = nums[m];
            newPassword.push(index3);
            break;
            
           case 4: //gera com simbolos
            
              const y = Math.floor((Math.random() * symbols.length-1) + 1);
              
            const indice4 = symbols[y];
            newPassword.push(indice4);
            break;
        }
    }
  
 
    return newPassword.join().replaceAll(",", "");
}


module.exports = generatePassword;


