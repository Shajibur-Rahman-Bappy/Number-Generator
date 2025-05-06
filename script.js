$(document).ready(function(){
    $('#generate').click(function(){
        const holder = parseInt($('#holder').val());
        const output = $('#output');
        output.html('');

        if (isNaN(holder) || holder <= 0){
            output.text("Please enter a valid positive number.");
            return;
        }

        for (let i = 1; i <= holder; i++){
            output.append(i + '<br>');
        }
    });
});