jQuery(document).ready(function(){
	jQuery('.slider').contentSlider({
		'width':600,
		'height':300,
		'slide_interval':3000,
		'loader':true,
		'slide_animation_data' : 
				[{
	            	'slide_number':1,
	            	'target_slide_element':'h1',
	            	'animation_position':0,
	            	'animation_type':'rotateInDownLeft'
	          	},{
	            	'slide_number':1,
	            	'target_slide_element':'p',
	            	'animation_position':1,
	            	'animation_type':'rotateInDownLeft'
	            },{
	            	'slide_number':2,
	            	'target_slide_element':'h1',
	            	'animation_position':0,
	            	'animation_type':'bounceInUp'
	            },{
	            	'slide_number':2,
	            	'target_slide_element':'p',
	            	'animation_position':1,
	            	'animation_type':'bounceInUp'
	           },{
	            	'slide_number':3,
	            	'target_slide_element':'h1',
	            	'animation_position':0,
	            	'animation_type':'bounceInRight'
	           },{
	            	'slide_number':3,
	            	'target_slide_element':'p',
	            	'animation_position':1,
	            	'animation_type':'bounceInLeft'
	           }]
	});
});