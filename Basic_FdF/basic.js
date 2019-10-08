// $(document).ready(function(){
// $("#present").on('click', function() {
// $(this).text("You clicked on the Present box")});
// $("#present1").on('click', function() {
// $(this).text("You clicked on the Santa Claus")});
// $("#present2").on('click', function() {
// $(this).text("You clicked on the Christmas bell")});
// });


$(document).ready(function() {
for (var i = 0; i < 3; i++) {
	$("body").append("<div></div");	
	$("div").addClass("santa")
	$("div").addClass("gift")
	$(".gift").prepend("<img src='https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878' width='100'>");
	$("<img src='https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png' width='100'>").appendTo($(".santa"));

};
$('.santa').dblclick(function() {
        $(this).hide()
        });
});

$('.div').click(function() {
        $(this).slideUp()
        });
        
