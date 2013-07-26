/*
 slider.js
 CREATED BY: Espi
 v1 07-25-2013
 * */

(function($) {
    $.fn.contentSlider = function( options ) {
    	var slider = this;
        var settings = $.extend({
            'height': null,
            'width': null,
            'slide_interval':null,
            'loader':null,
            'slide_animation_data' :null
        },options);
        
        var collectedData = {
        	cur_html: this.html(),
        	totalSlides: this.children('div')
        }
        
        var slideTimer = window.setInterval(playSlide,settings.slide_interval);
        var curSlide = 0;
        
        this.html( function() {
            return '<div class="slider-contents">'+collectedData.cur_html+'</div>';
        });
        this.append('<div class="slide-nav"></div>');
        this.find('.slider-contents').children('div').addClass('slides');
        this.find(".slider-contents,.slider-contents .slides").css({'width':settings.width,'height':settings.height});
        for(var i = 0; i < collectedData.totalSlides.length;i++){
			this.find('.slide-nav').append('<a>'+i+'</a>');
		}
		
		//display slider pages if slides are more than 1 BEGIN
		if(collectedData.totalSlides.length > 1){
			this.append('<div class="slider-controller"><a class="prev">prev</a><a class="next">next</a></div>');
		}
		//display slider pages if slides are more than 1 END
		
		//slider page clicked BEGIN
		this.find('.slide-nav a').on("click",function(){
			clearInterval(slideTimer);
			slideTimer = window.setInterval(playSlide,settings.slide_interval);
			curSlide = slider.find(this).index();
			playSlide();
		});
		//slider page clicked END
		
		//next button clicked BEGIN
		this.find('.slider-controller .next').on("click",function(){
			clearInterval(slideTimer);
			slideTimer = window.setInterval(playSlide,settings.slide_interval);
			curSlide = curSlide;
			playSlide();
		});
		//next button clicked END
		
		//prev button clicked BEGIN
		this.find('.slider-controller .prev').on("click",function(){
			clearInterval(slideTimer);
			slideTimer = window.setInterval(playSlide,settings.slide_interval);
			
			if(curSlide==1){
				curSlide = collectedData.totalSlides.length -1;
			}else if(curSlide == 0){
				curSlide = collectedData.totalSlides.length -2;
			}else{
				curSlide = curSlide-2;
			}
			
			playSlide();
		});
		//prev button clicked END
		
		//hide the slides BEGIN
		this.find('.slides').css('display','none');
		//hide the slides END
		
		//display loader BEGIN
		function displayLoader(){
			if(settings.loader==true){
				slider.find('.progress-bar').remove();
				slider.find('.slider-contents').append('<div class="progress-bar">sadasd</div>');
				slider.find('.progress-bar').animate({width:'+=100%'},settings.slide_interval);
			}
		}
		//display loader END

		//Play Slides BEGIN
		function playSlide(){
				displayLoader();
				for(var i = 0; i < settings.slide_animation_data.length;i++){
					slideAnimation(
							settings.slide_animation_data[i].slide_number,
							settings.slide_animation_data[i].target_slide_element,
							settings.slide_animation_data[i].animation_position,
							settings.slide_animation_data[i].animation_type
						);
				}
				slider.find('.slider-contents').children('div').css('display','none');
				slider.find('.slide'+(curSlide+1)).css('display','block');
				if(curSlide>=collectedData.totalSlides.length-1){
					curSlide = 0;
				}else{
					curSlide++;
				}
		}
		//Play Slides END
		
		//slide animation function BEGIN
		function slideAnimation(slide_number,target_slide_element,animation_position,animation_type){
			slider.find('.slide'+slide_number+' '+target_slide_element).removeClass('animated '+animation_type).css('display','none');
			setTimeout(function(){slider.find('.slide'+slide_number+' '+target_slide_element).addClass('animated '+animation_type).css('display','block');},(animation_position*1000));
		}
		//slide animation function END

		//execute slide
		playSlide();
    }
}(jQuery));