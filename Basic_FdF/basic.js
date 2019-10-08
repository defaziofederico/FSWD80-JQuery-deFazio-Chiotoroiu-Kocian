// $(document).ready(function(){
// $("#present").on('click', function() {
// $(this).text("You clicked on the Present box")});
// $("#present1").on('click', function() {
// $(this).text("You clicked on the Santa Claus")});
// $("#present2").on('click', function() {
// $(this).text("You clicked on the Christmas bell")});
// });


$(document).ready(function() {
for (var i = 0; i < 9; i++) {
$("body").append("<div>H</div");	

$("div").addClass("santa")
$("div").addClass("gift")
$(".gift").append("<img src='https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878'>");
$("<img src='https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878'>").appendTo($(".gift"));


});