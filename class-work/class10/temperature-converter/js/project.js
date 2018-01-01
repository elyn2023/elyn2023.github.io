$('#button1').click(function(){
    var temp1 = $('#c-input').val();
    $('#f-solution').html( parseInt(temp1) * 1.8 + 32 );
    $('#image').attr('src','img/fire.jpg');
    
    
})

$('#button2').click(function(){
    var temp2 = $('#f-input').val();
    $('#c-solution').html( (parseInt(temp2)-32)*5/9 );
    $('#image').attr('src','img/ice.jpg');

})