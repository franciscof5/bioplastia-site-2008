//Deslizador mootools, fx.slide
window.addEvent('domready', function() {
	var status = {
		'true': 'open',
		'false': 'close'
	};
	
	//-vertical
	var myVerticalSlide1 = new Fx.Slide('item1');
	var myVerticalSlide2 = new Fx.Slide('item2');
	var myVerticalSlide3 = new Fx.Slide('item3');
	var myVerticalSlide4 = new Fx.Slide('item4');
	var myVerticalSlide5 = new Fx.Slide('item5');
	var myVerticalSlide6 = new Fx.Slide('item6');
	var myVerticalSlide7 = new Fx.Slide('item7');
	
	$('abre1').addEvent('click', function(e){
		e.stop();
		myVerticalSlide1.slideIn();
		myVerticalSlide2.hide();
		myVerticalSlide3.hide();
		myVerticalSlide4.hide();
		myVerticalSlide5.hide();
		myVerticalSlide6.hide();
	});
	$('abre2').addEvent('click', function(e){
		e.stop();
		myVerticalSlide1.hide();
		myVerticalSlide2.slideIn();
		myVerticalSlide3.hide();
		myVerticalSlide4.hide();
		myVerticalSlide5.hide();
		myVerticalSlide6.hide();
		myVerticalSlide7.hide();
	});
	$('abre3').addEvent('click', function(e){
		e.stop();
		myVerticalSlide1.hide();
		myVerticalSlide2.hide();
		myVerticalSlide3.slideIn();
		myVerticalSlide4.hide();
		myVerticalSlide5.hide();
		myVerticalSlide6.hide();
		myVerticalSlide7.hide();
	});
	$('abre4').addEvent('click', function(e){
		e.stop();
		myVerticalSlide1.hide();
		myVerticalSlide2.hide();
		myVerticalSlide3.hide();
		myVerticalSlide4.slideIn();
		myVerticalSlide5.hide();
		myVerticalSlide6.hide();
		myVerticalSlide7.hide();
	});
	$('abre5').addEvent('click', function(e){
		e.stop();
		myVerticalSlide5.slideIn();
		
		myVerticalSlide1.hide();
		myVerticalSlide2.hide();
		myVerticalSlide3.hide();
		myVerticalSlide4.hide();
		myVerticalSlide6.hide();
		myVerticalSlide7.hide();
	});
	$('abre6').addEvent('click', function(e){
		e.stop();
		myVerticalSlide6.slideIn();
		
		myVerticalSlide1.hide();
		myVerticalSlide2.hide();
		myVerticalSlide3.hide();
		myVerticalSlide4.hide();
		myVerticalSlide5.hide();
		myVerticalSlide7.hide();
	});
	$('abre7').addEvent('click', function(e){
		e.stop();
		myVerticalSlide7.slideIn();
		
		myVerticalSlide1.hide();
		myVerticalSlide2.hide();
		myVerticalSlide3.hide();
		myVerticalSlide4.hide();
		myVerticalSlide5.hide();
		myVerticalSlide6.hide();
		
	});
	
	/*$('item1').slide('show').slide('out');*/
	$('item2').slide('hide').slide('out');
	$('item3').slide('hide').slide('out');
	$('item4').slide('hide').slide('out');
	$('item5').slide('hide').slide('out');
	$('item6').slide('hide').slide('out');
	$('item7').slide('hide').slide('out');
	
});