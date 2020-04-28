//Click listener that checks/unchecks todos
$("ul").on("click", "li", function () {
   $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event) {
    //removes the span and the li containing the span
    $(this).parent().fadeOut(400, function() {
        $(this).remove();
    });
    //stops event bubbling- where the span event triggers li events, etc..
    event.stopPropagation();
});

$("input[type = 'text']").on("keypress", function(event) {
   if(event.which === 13) {
       //get the input text
        let todoText = $(this).val();
        //clear input
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
   }
});

$("#plus").on("click", function() {
    $("input[type = 'text']").fadeToggle();
})