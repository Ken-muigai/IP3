$(document).ready(function(){
    $('#image').click(function(){
        $('#image').hide()
        $('#paragraph').show();
    });

    $('#paragraph').click(function(){
        $('#image').show()
        $('#paragraph').hide();
    })

})
