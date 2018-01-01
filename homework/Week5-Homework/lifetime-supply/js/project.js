// Store your current age into a variable

// Store a maximum age into a variable

// Store a favorite drink (from a drop-down) into a variable

// Store an amount per day into a variable

// Calculate how much you would drink for the rest of your life!

// Output your results to the user

$('#click-me').click(function(){

var age = $('#age').val();

var maxage = $('#max-age').val();

var drink = $( "#item option:selected" ).text();

// var drink = $('#item').val();

var perday = $('#num-per-day').val();

$('#solution').html(parseInt(perday) * 365 * (parseInt(maxage)-parseInt(age)));
$('#drink').html(drink);
})