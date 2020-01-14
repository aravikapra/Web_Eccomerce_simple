document.getElementById('total_bayar').innerHTML = shoppingCart.totalCart();
 var diskon=0;
 var Totalbayar = 0;

    $('#diskon').click(function(event){

      if($('#diskon').val()==1){
        diskon = shoppingCart.totalCart()*0.3;
      }else if($('#diskon').val()==2){
        diskon = shoppingCart.totalCart()*0.5;
      }else{
        diskon = 0;
      }
      Totalbayar = shoppingCart.totalCart()- diskon;
      document.getElementById('total_bayar').innerHTML = Totalbayar;
      
    })
    
    function bayar(val){
      document.getElementById('kembali').innerHTML = val - Totalbayar;
    }
    
