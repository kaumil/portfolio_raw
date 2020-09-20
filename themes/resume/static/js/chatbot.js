var passage_data = "I am Kaumil Trivedi. My name is Kaumil Trivedi. I am 23yrs old.I currently work as AI Developer at Areli Commerce Private Limited. I have been working since the past 1.5yrs of experience at my current company. I have 2yrs of professional work experience.I have experience in the fields of Data Science, Machine Learning and Deep Learing. My skills include Python, Tensorflow, PyTorch, Django, Flask, MySQL, MongoDB, Docker and AWS. I have done projects on face-emotion recognition, sentiment analysis, and blogging platform. Yes I have done certifications in the fields of Data Science and Machine Learning. I have gained certifications from deeplearning.ai, Stanford University and Indian Institute of Technology in the domains of Deep Learning, Machine Learning and Data Science. I have published a paper on Hybrid Binary Classifiers using SVMs and Decision Trees. I have had the opportunity to give an interview at R3plica on AI. My previous work experience was at Turabit Solutions Pvt Ltd and Softvan Inc. Education: Did Schooling at HBK in Ahmedabad and Undergraduation from Gujarat Technological University."


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
    $("#sym-microphone").toggle();
    setTimeout(function(){
        $("#panel").fadeIn(300);
        $("#panel-footer").fadeIn(300);
    },1000);
    qna.load().then(model => {
        window.value = model
    });
});

$(document).on('click','.chatbot_icon',function(e){
    $("#panel").slideToggle("medium");
    $("#panel-footer").slideToggle("medium");
});



// send function start  
function send(){
    var chat = $("#btn-input").val(); 

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
        
        make_response(chat);
        $("#btn-input").value = "";

    }
    $(body).appendTo("#messagebody");
    $('#btn-input').val('');
    $("#messagebody").animate({ scrollTop: $("#messagebody")[0].scrollHeight}, 'medium');

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

    window.value.findAnswers(query, passage_data).then(answers => {
        if (answers.length == 0){
            setTimeout(respond("I am sorry my bot is unable to answer that question. Please feel free to reach me!"),2000);
        }
        else{
            var max = 0;
            var response = "";
            answers.forEach(function(element){
                if (max < element.text.length){
                    max = element.text.length;
                    response = element.text;
                }                
            });
            if (query.toLowerCase().includes("project")){
                $("#link-projects")[0].click();
            }
            else if(query.toLowerCase().includes("certification")){
                $("#link-certifications")[0].click();
            }
            else if(query.toLowerCase().includes("publication")){
                $("#link-publications")[0].click();
            }
            else if(query.toLowerCase().includes("article")){
                $("#link-articles")[0].click();
            }
            else if(query.toLowerCase().includes("experience")){
                $("#link-experience")[0].click();
            }
            else if(query.toLowerCase().includes("educat")){
                $("#link-education")[0].click();
            }
            else if(query.toLowerCase().includes("skill")){
                $("#link-skills")[0].click();
            }
            setTimeout(respond(response),2000);
        }
    });
    
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