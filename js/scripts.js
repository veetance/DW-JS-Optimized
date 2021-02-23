// console.log("hello!") testing if .js worked//


// $(".joke").text ("What Bow can't be tied?")










// ....unhide from below





// // variables for for logos///////////////
// var $one = $("#l1");
// var $two = $("#l2");
// var $three = $("#l3");
// var $four = $("#l4");



// // variables for for jokes//////////////
// var $strt = $("#clkme");
// var $jk1 = $("#q1");
// var $jk2 = $("#q2");
// var $jk3 = $("#q3");

// // variables for for joke answers//////////////
// var $a1 = $("#a1");
// var $a2 = $("#a2");
// var $a3 = $("#a3");



// // logic for logo//////////////////////

// $one.on("click", function() {
// 	$(this).hide();
// 	$two.show();
// })

// $two.on("click", function() {
// 	$(this).hide();
// 	$three.show();
// })

// $three.on("click", function() {
// 	$(this).hide();
// 	$four.show();
// })

// $four.on("click", function() {
// 	$(this).hide();
// 	$one.show();
// })




// // logic for jokes////////////////////

// $strt.on("click", function() {
// 	$(this).hide();
// 	// $(".joke").text ("What Bow can't be tied?")
//     $jk1.show();
//     $("main").css("background","white");
	
// })

// $jk1.on("click", function() {
// 	$(this).hide();
// 	$a1.show();
// 	$("main").css("background","#F1E292");
// })

// $a1.on("click", function() {
// 	$(this).hide();
// 	$jk2.show();
// 	$("main").css("background","white");
// })

// $jk2.on("click", function() {
// 	$(this).hide();
// 	$a2.show();
// 	$("main").css("background","#F1E292");
// })

// $a2.on("click", function() {
// 	$(this).hide();
// 	$jk3.show();
// 	$("main").css("background","white");
// })

// $jk3.on("click", function() {
// 	$(this).hide();
// 	$a3.show();
// 	$("main").css("background","#F1E292");
// })

// $a3.on("click", function() {
// 	$(this).hide();
// 	$strt.show();
// 	$("main").css("background","white");
	
// })





//////An efficient way of achieving above code result... see below/////////////



var jokes = [
"Will you Smile ?",

"What bow can't be tied?",
"What do you call a pile of kittens?",
"Some people eat snails!"
]

var $jokees = $(".jokees")
var x = 0;
$jokees.text(jokes[x]) //replaces div class jokees in html code//

$jokees.on("click", function() {
x++;
console.log(x)

$(this).text(jokes[x])
})




// console.log(jokes[1]);




