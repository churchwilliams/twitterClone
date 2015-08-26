$(document).ready(function(){

	$('#tweet-submit, #char-count').hide();

//SHOW tweet button and char count when TEXTFIELD is clicked. Textfield DOUBLE in size
	$('#text-area').on('click', function(){
		$('#tweet-submit, #char-count').show();
		$('.tweet-compose').css('height', '5em');
	});

//COUNT down for 140
//Numbers Under 10 will be RED
	var i = 140;
	$('#text-area').keypress(function(){
		$('#char-count').html(i -= 1);

		if(i < 11){
			$('#char-count').css('color', 'red');
		}
	});

//disable tweet button if more than 140 characters exist

$('#text-area').keyup(function(){
	if ($(this).val().length > 140){
		$('#tweet-submit').prop('disabled', true);
	}
	else {
		$('#tweet-submit').prop('disabled', false);
	}
});

//Tweet button CONSOLE LOG #text-area.length
// $('#tweet-submit').on('click', function(){
// 	console.log($('#text-area').val().length);
// });


// //Step 5 When the user successfully inputs characters and clicks the “Tweet” button, a new tweet should be created and added to the tweet stream in the main column, 
// using the user’s fake profile image in the top left and username/fullname.
// HINT: jQuery ".prepend" method

$("#tweet-submit").click(function() {
		var newestTweet = $('<div class="tweet">' +
						'<div class="content">' +
							'<img class="avatar" src="img/alagoon.jpg" />' +
							'<strong class="fullname">Eric Williams &nbsp;</strong>' +
							'<span class="username">@churchwilliams</span>' +

							'<p class="tweet-text">' + $("#text-area").val() + '</p>' +

							'<div class="tweet-actions">' +
								'<ul>' +
									'<li><span class="icon action-reply"></span> Reply</li>' +
									'<li><span class="icon action-retweet"></span> Retweet</li>' +
									'<li><span class="icon action-favorite"></span> Favorite</li>' +
									'<li><span class="icon action-more"></span> More</li>' +
								'</ul>' +
							'</div>' +

							'<div class="stats">' +
								'<div class="retweets">' +
									'<p class="num-retweets">30</p>' +
									'<p>RETWEETS</p>' +
								'</div>' +
								'<div class="favorites">' +
									'<p class="num-favorites">6</p>' +
									'<p>FAVORITES</p>' +
								'</div>' +
								'<div class="users-interact">' +
									'<div>' +
										'<img src="img/alagoon.jpg" />' +
										'<img src="img/vklimenko.jpg" />' +
									'</div>' +
								'</div>' +

								'<div class="time">' +
									'1:04 PM - 19 Sep 13' +
								'</div>' +
							'</div>' +
							'<div class="reply">' +
								'<img class="avatar" src="img/alagoon.jpg" />' +
								'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
							'</div>' +
						'</div>' +
					'</div>');
		$('#stream').prepend(newestTweet);
	});

$('#stream').on('mouseenter', '.tweet', function(){
		$(this).children('.content').children('.tweet-actions').css("display", "block");
	}).on('mouseleave', '.tweet', function(){
		$(this).children('.content').children('.tweet-actions').css("display", "none");
	}).on('click', '.tweet', function(){
		$(this).children('.content').children('.stats').css("display", "block");
	})


});

