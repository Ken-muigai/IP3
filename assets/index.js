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

// $(document).ready(function(){
//     $("#img1").mouseover(function(){
//         $('#img1').hide();
//         $("#overlayeight").show();
//     }).mouseout(function(){
//         $("#overlayeight").hide();
//         $("#img1").show();

//     })
// })

$(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });