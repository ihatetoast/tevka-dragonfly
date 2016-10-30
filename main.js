
$(document).ready(function() {
	console.log("document is a go-go");
	

	//user clicks on a body part
	$(".wingLeft").on('click', function(){
		//triggers tevka to say something
		$("#tevka").text('Did you know that his wings have a nodus and a pterostigma? The pterostigma is that darker color near the tip.');
		function clearLeftWings(){
			$("#tevka").text('Don\'t you feel a lot smarter now? Keep on clickin\' on.');
		}
		//clear but prompt to do more:
		setTimeout(clearLeftWings, 3500);
	})
		$(".wingRight").on('click', function(){
		//triggers tevka to say something
		$("#tevka").text('Oh, that tickles him.');
		function clearRightWings(){
			$("#tevka").text('Thank you. Dagobert loves a little goochi goo. Click on with your bad self.');
		}
		//clear but prompt to do more:
		setTimeout(clearRightWings, 2000);
	})
		$(".abdomen").on('click', function(){
		//triggers tevka to say something
		$("#tevka").text('I like long abdomens, and I cannot lie. His abdomen is segmented; the very end are his naughty bits.');
		function clearAbdomen(){
			$("#tevka").text('He\'s male, so he has claspers. They kind of make him seem desperate. Click some more.');
		}
		//clear but prompt to do more:
		setTimeout(clearAbdomen, 3500);
	})
		$(".thorax").on('click', function(){
		//triggers tevka to say something
		$("#tevka").text('His wings and legs attach to my thorax. Between the abdomen and thorax is the petiole, and between the head and thorax is the prothorax.');
		function clearThorax(){
			$("#tevka").text('He likes to impress you with his big words and six-pack thorax. Click again, Flynn.');
		}
		//clear but prompt to do more:
		setTimeout(clearThorax, 3500);
	})
		$(".headFly").on('click', function(){
		//triggers tevka to say something
		$("#tevka").text('His head is huge compared to the thorax! He likes to say that he sees with compound eyes and beer goggles with compound goggles.');
		function clearHead(){
			$("#tevka").text('He doesn\'t. He\'s really a good dragonfly and prefers good pond and lake water. Clickie clickie.');
		}
		//clear but prompt to do more:
		setTimeout(clearHead, 3500);
	})
});