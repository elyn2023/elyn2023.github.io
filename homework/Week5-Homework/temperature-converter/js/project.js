$('#button1').click(function(){
    var temp1 = $('#c-input').val();
    $('#f-solution').html( parseInt(temp1) * 1.8 + 32 );

})

$('#button2').click(function(){
    var temp2 = $('#f-input').val();
    $('#c-solution').html( (parseInt(temp2)-32)*5/9 );

})