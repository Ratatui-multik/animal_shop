
	// function for reading from json and apear on the site
	function loadPage(pageNum){

		$.getJSON('scripts/goods.json', function(data) {
			var pageCount = Math.ceil(data.length/6);
			$('div.lib').html("");
			for(var i=pageNum*6;(i<data.length)&&(i<pageNum*6+6);i++){
				$('div.lib').append($('<div   class="col-lg-4 col-md-6 col-xs-12"  ><img class="image" src="'+data[i].url+'"  alt="'+data[i].alt+'" width=100%><div class="visible-xs-block visible-sm-block"><p>'+data[i].name+'</p></div>').hide().fadeIn(800));
			}
			$('ul.pagination').html("");
			//if (pageNum>0) {$('ul.pagination').append('<li><a href="#" onclick="loadPage('+(pageNum-1)+')"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a></li>');}
			for (i=0;i<pageCount;i++){
				var	active ="";
				if(i==pageNum) active='class="active"';
				$('ul.pagination').append('<li '+active+'><a href="#" onclick="loadPage('+i+')">'+(i+1)+'</li>');
			}
			//if (pageCount-1>0) {$('ul.pagination').append('<li><a href="#" onclick="loadPage('+(pageNum+1)+')"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></li>');}

		});


	};

	// $(function showCarousel(){
	// 	$.getJSON('scripts/carousel.json',function(data){
	// 		$('div.carousel-inner').append('<div class="item active"><img src="'+data.sliders[0].url+'" alt=""><div class="carousel-caption">NBA 2017</div></div>');
	// 		for(var i=1;i<data.sliders.length;i++){
	// 			$('div.carousel-inner').append('<div class="item "><img src="'+data.sliders[i].url+'" alt=""><div class="carousel-caption"></div></div>');
	// 		}
	// 	});
	// });

	// $(function modalWindow() { 
	// 	/*open modal*/
	// 	$('div.lib').on('click','div img',function(){
	// 		var windowWidth = $(window).width();
	// 		if(windowWidth > 970){

	// 			var imag = $(this).attr("alt");
	// 			$.getJSON('scripts/photo.json', function(data) {
	// 				for(var i=0;i<data.images.length;i++){
	// 					if(data.images[i].alt === imag) $("#club").html("<img src="+ data.images[i].url +" alt=''>").append("<p><b>Клуб: </b>"+data.images[i].alt+"<br> <b>Описание:</b> "+data.images[i].description+"</p>");
	// 				}
	// 			});


	// 			$('#overlay').fadeIn(400,
	// 				function(){ 
	// 					$('#modal_form') 
	// 					.css('display', 'block') 
	// 					.animate({opacity: 1, top: '50%'}, 200); 
	// 				});
	// 		}
	// 	});		
	// 	/*close modal*/
	// 	$('#modal_close, #overlay').click( function(){
	// 		$('#modal_form')
	// 		.animate({opacity: 0, top: '45%'}, 200,
	// 			function(){
	// 				$(this).css('display', 'none');
	// 				$('#overlay').fadeOut(400);
	// 			}
	// 			);
	// 	});
	// });
	loadPage(0);