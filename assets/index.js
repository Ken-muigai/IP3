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
    $(".img1").mouseover(function(){
      $("#overlayone").show();
    }).mouseout(function(){
      $("#overlayone").hide();
    });
    $(".img2").mouseover(function(){
      $("#overlaytwo").show();
    }).mouseout(function(){
      $("#overlaytwo").hide();
    });
    $(".img3").mouseover(function(){
      $("#overlaythree").show();
    }).mouseout(function(){
      $("#overlaythree").hide();
    });
    $(".img4").mouseover(function(){
      $("#overlayfour").show();
    }).mouseout(function(){
      $("#overlayfour").hide();
    });
    $(".img5").mouseover(function(){
      $("#overlayfive").show();
    }).mouseout(function(){
      $("#overlayfive").hide();
    });
    $(".img6").mouseover(function(){
      $("#overlaysix").show();
    }).mouseout(function(){
      $("#overlaysix").hide();
    });
    $(".img7").mouseover(function(){
      $("#overlayseven").show();
    }).mouseout(function(){
      $("#overlayseven").hide();
    });
    
    $(".img8").mouseover(function(){
      $("#overlayeight").show();
    }).mouseout(function(){
      $("#overlayeight").hide();
    });
  });