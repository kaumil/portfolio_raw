passage_data = "My name is Kaumil Trivedi. I currently work as AI Developer at Areli Commerce Private Limited, where I have been working for the past 1.5 years. I have 2yrs of professional work experience in the fields of Data Science, Machine Learning and Deep Learing. My hobbies include watching movies, reading mystery novels and playing badminton."


$(document).on('focus', '.panel-footer input.chat_input', function (e) {
var $this = $(this);
if ($('#minim_chat_window').hasClass('panel-collapsed')) {
    $this.parents('.panel').find('.panel-body').slideDown();
    $('#minim_chat_window').removeClass('panel-collapsed');
    $('#minim_chat_window').removeClass('glyphicon-plus').addClass('glyphicon-minus');
}
});


$(document).on('click', '#new_chat', function (e) {
var size = $( ".chat-window:last-child" ).css("margin-left");
    size_total = parseInt(size) + 400;
alert(size_total);
var clone = $( "#chat_window_1" ).clone().appendTo( ".container" );
clone.css("margin-left", size_total);
});

$(document).ready(function(){
    setTimeout(function(){
        $("#panel").fadeIn(300);
        $("#panel-footer").fadeIn(300);
    },2000);
});

$(document).on('click','.chatbot_icon',function(e){
    $("#panel").slideToggle("medium");
    $("#panel-footer").slideToggle("medium");
});



// send function start  
function send(){
    var chat = $("#btn-input").val(); 
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

    if (chat =="") {
        alert('Empty input message!');
    } else
    {
        var body = 
            '<div class="row msg_container base_sent">' +
                '<div class="col-md-10 col-xs-10 ">' +
                    '<div class="messages msg_sent">' +
                        '<p>'+ chat + '</p>'+
                    '</div>' +
                '</div>' +
            '</div>';
    }
    $(body).appendTo("#messagebody");
    $('#btn-input').val('');
    $("#messagebody").animate({ scrollTop: $("#messagebody")[0].scrollHeight}, 'medium');

    make_response(chat);
    $("#btn-input").value = "";
}


// send function end
$( "#btn-chat" ).click(function() {
    send()
});

$('#btn-input').keypress(function (e) {
    if (e.which == 13) {
        send()
    }
});

function make_response(query){
}


//respond function start
function respond(response){
    
    var body = 
        '<div class="row msg_container base_receive">' +
            '<div class="col-md-10 col-xs-10">' +
                '<div class="messages msg_receive">'+
                    '<p>' + response + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
    
    $(body).appendTo("#messagebody");
    $('#btn-input').val('');
    $("#messagebody").animate({ scrollTop: $("#messagebody")[0].scrollHeight}, 'medium');
}
//respond function end