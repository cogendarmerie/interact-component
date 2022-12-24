$("section.card .rating > p").click(function(){
    $("#active-rating").removeAttr("id");
    $(this).attr("id", "active-rating");
});

$("button").click(function(){
    $("section.card#note").addClass("hide");
    $("section.card#thank-you").addClass("show");
    $("section.card#note").attr("data-status", "hide");
    $("section.card#thank-you").attr("data-status", "show");
    $("#note_selection").text($("#active-rating").text());
});