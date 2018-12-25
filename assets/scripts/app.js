	(function($) {
		"use strict";

		var passwordCheck = function() {
			console.log('passwordCheck');
			var answer = $('#password').val();
			console.log(answer);
			if (answer.toLowerCase() == 'Mellon' || answer.toLowerCase() == 'friend') {
				window.location.href = 'homepage.html';
			} else {
				$('.js-durin-form-message').removeClass('hidden');
			}
		};

		$("#durin").submit(function(event) {
			console.log('submit');
			event.preventDefault();
			passwordCheck();
		});

	})(jQuery);
