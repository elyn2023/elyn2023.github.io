document).ready(function () {$(


$("#button").click(function(){

        
    var temp1 = $('#c-input').val();
    var temp2 = $('#f-input').val();

    if (isNaN(temp1 || temp2) ){
        alert("Ouch! Type a number!")
        $('#f-input').val('')
        $('#c-input').val('')

    }else if (!isNaN(temp1&&temp2) ){
        $('#f-input').val( temp1 * 9 / 5 +32 )
        $('#c-input').val( (temp2-32)*5/9 )


    }


            if( temp1 >=25){
                $('body').css("background","#B70701");
            }else if(temp1<25 && temp1>10 ) {
                $('body').css("background","#C6ED99");
            }else{
                $('body').css("background","#72D0ED");
            }

    
	})





})



// $('#c-input').val( (temp2-32)*5/9 )




// $('#button1').click(function(){
//     var temp1 = $('#c-input').val();
      

//     if( temp1 >=25){
//         $('body').css("background","#B70701");
//     }else if(temp1<25 && temp1>10 ) {
//         $('body').css("background","#C6ED99");
//     }else{
//         $('body').css("background","#72D0ED");
//     }
// })

// $('#button2').click(function(){
//     var temp2 = $('#f-input').val();
//     $('#c-solution').html( (parseInt(temp2)-32)*5/9 );

// })