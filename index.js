// Quotes about learning from goodreads -- http://www.goodreads.com/quotes/tag/learning

var quotes = [
	"“Wisdom is not a product of schooling but of the lifelong attempt to acquire it.”  <br><br>— Albert Einstein",
	"“Live as if you were to die tomorrow. Learn as if you were to live forever.” <br><br>—  Mahatma Gandhi",
	"“Tell me and I forget, teach me and I may remember, involve me and I learn.” <br><br>— Benjamin Franklin",
	"“Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.”<br><br>— Richard Feynman",
	
	"“It is important that students bring a certain ragamuffin, barefoot irreverence to their studies; they are not here to worship what is known, but to question it.”  <br><br>—  Jacob Bronowski"
];

var index = 0;
var max = quotes.length - 1;
var delay = .02;

function random(min, max){
	return (Math.random() * (max - min)) + min;
}

function cycleQuotes(arr, i, sel){
	var el = $(sel);
	var message = arr[i];
	el.html(message);
	var split = new SplitText(el);
	var time = split.chars.length * delay;
	
	$(split.chars).each(function(i){
		TweenMax.from($(this), time, {
			opacity: 0,
			x: 0,
			y: random(-200, 200),
			z: random(500, 1000),
			// scale: .1,
			delay: i * delay,
			yoyo: true,
			repeat: -1,
			repeatDelay: time * 4,
			ease: Power1.easeOut
		});
	});
	
	index = index == max ?  0 : (index + 1);

	setTimeout(function(){
		
		cycleQuotes(quotes, index, ".split");
	}, ((time * 4) + (time * 4)) * 1000);
	
}

$(window).load(function(){
	cycleQuotes(quotes, index, ".split");
});