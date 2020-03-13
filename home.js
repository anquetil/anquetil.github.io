
$.getJSON("checklist.json", function(data) {
    var html = '';
    var i = 0;
    $.each(data, function(key, value){
        html += '<input type="checkbox" class="checkbox" name="'+i+'">'
        html += '<label class="checkbox-label" for="'+i+'">'+value+'</label><br></br>';
        i += 1;
    });
    $('#checkboxes').html(html);

    $(".checkbox").change(function(){
        if ($('.checkbox:checked').length == $('.checkbox').length) {
            console.log("all checked!!")
            $("#bingo").css("display","inline-block");
        } else {
            $("#bingo").css("display","none");
        }
    });

});


$.getJSON("items.json", function(data) {
    var html = '';
    $.each(data, function(key, value){
        html += '<div class="subsection-title">'+value.title+'</div>';
        html += '<div class= "mini-cards">';
        console.log(value.cards);
        value.cards.forEach(function(cardvalue){
            html += '<div class="mini-card">';
            html += '<a class="card-image" target="_blank" href="'+cardvalue.link+'"><img class="card-image" src="'+cardvalue.image+'"></a>';
            html += '<a class="card-label" target="_blank" href="'+cardvalue.link+'">'+cardvalue.name+'</a>';
            html += '<div class="card-label-caption">'+cardvalue.caption+'</div></div>';

        })
        html += '</div>';
    });
$('#right-content').html(html)});
