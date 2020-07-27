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

$(document).ready(function(){
    $('#serviceImage').click(function(){
        $("#serviceImage").hide();
        $("#serviceParagraph").show();
    })

    $("#serviceParagraph").click(function(){
        $("#serviceParagraph").hide();
        $("#serviceImage").show();
    })
})

$(document).ready(function(){
    $('#serviceImage').click(function(){
        $("#serviceImage").hide();
        $("#serviceParagraph").show();
    })

    $("#serviceParagraph").click(function(){
        $("#serviceParagraph").hide();
        $("#serviceImage").show();
    })
})

$(document).ready(function(){
    $('#lastimage').click(function(){
        $("#lastimage").hide();
        $("#lastpara").show();
    })
    $("#lastpara").click(function(){
        $("#lastpara").hide();
        $("#lastimage").show();
    })
})