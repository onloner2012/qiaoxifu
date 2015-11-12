$(function(){
	$("input[type='text']").not(".no").each(function(){
		$(this).placeholder();
	});
	$(".tabs").each(function(){
		$(this).tabs();
	});
	resize();
	$(window).resize(function(event) {
		resize();
	});




xulin_banner($('.banner_r2'));





});

/*main*/
//

/*call*/
//
function resize(){
	var ht=$(window).height();
	$(".flht").height(ht);
}





/*
banner图轮播函数和说明

effect_val : 这是轮播的特效速度，默认为1000毫秒
interval_val : 这是轮播的间隔速度，默认为3000毫秒
text_explain : 是否需要文字说明 值为'yes'是要，不写或其他值为不要，说明文字直接给相应图片的text属性值
icon_cut : 是否需要小图标切换，值为'yes'是要，不写或其他值为不要
a_href : 是否需要a标签链接，值为'yes'是要，不写或其他值为不要，链接地址可以直接给相应图片的href属性值
lr_button : 是否需要左右点击按键，值为'yes'是要，不写或其他值为不要
effect : 是什么特效，'slide'为滑动特效，'fade'为淡隐特效
*/
function xulin_banner(box,obj){
	var effect_val = obj&&obj.effect_val ? obj.effect_val : 1000;
	var interval_val = obj&&obj.interval_val ? obj.interval_val : 3000;
	var text_explain = obj&&obj.text_explain ? obj.text_explain : 'no';
	var icon_cut = obj&&obj.icon_cut ? obj.icon_cut : 'no';
	var a_href = obj&&obj.a_href ? obj.a_href : 'no';
	var lr_button = obj&&obj.lr_button ? obj.lr_button : 'no';
	var effect = obj&&obj.effect ? obj.effect : 'fade';		//值为'fade'时为淡隐效果；值为'slide'时为滑动效果
	
	var img = box.find('img');
	var length = img.length;
	var href = [];
	var txt = [];
	var src = [];
	(function(){
		for(var i = 0; i < length; i++){
			href[i] = img.eq(i).attr('href');
		};
	})();
	(function(){
		for(var i = 0; i < length; i++){
			txt[i] = img.eq(i).attr('text');
		};
	})();
	(function(){
		for(var i = 0; i < length; i++){
			src[i] = img.eq(i).attr('src');
		};
	})();
	img.remove();
	box.append('<div class="img"></div>');
	var div = box.find('div.img');
	div.append('<ul></ul>');
	var ul = div.find('ul');
	(function(){
		for(var i = 0; i < length; i++){
			ul.append('<li></li>');
		};
	})();
	var li = ul.find('li');
	var width = box.width();
	var height = box.height();
	box.css({
		'position' : 'relative'
	});
	div.css({
		'overflow' : 'hidden',
		'width' : '100%',
		'height' : height,
		'position' : 'absolute',
		'left' : 0,
		'top' : 0
	});
	ul.css({
		'width' : '100%',
		'height' : height,
		'position' : 'absolute',
		'left' : 0,
		'top' : 0
	});
	li.css({
		'width' : '100%',
		'height' : height,
		'position' : 'absolute',
		'backgroundRepeat' : 'no-repeat',
		'backgroundPosition' : 'center center',
		'left' : 0,
		'top' : 0
	});
	(function(){
		for(var i = 0; i < length; i++){
			li.eq(i).css({'backgroundImage' : 'url("' + src[i] + '")'});
		};
	})();
	if(text_explain == 'yes'){		//文字说明
		box.append('<div class="text"></div>');
		var text = box.find('div.text');
		text.append('<p></p>');
		var p = text.find('p');
		text.append('<span></span>');
		var span = text.find('span');
		text.css({
			'width' : '100%',
			'height' : '30px',
			'position' : 'absolute',
			'left' : 0,
			'bottom' : 0
		});
		p.css({
			'width' : '100%',
			'height' : '30px',
			'background' : '#000',
			'opacity' : 0.8,
			'position' : 'absolute',
			'left' : 0,
			'bottom' : 0
		});
		span.css({
			'position' : 'absolute',
			'left' : '30px',
			'bottom' : '5px',
			'color' : '#f00'
		});
		if(txt[0]){
			span.text(txt[0]);
		}else{
			span.text('这是第1张图片');
		}
		
	};
	if(icon_cut == 'yes'){		//底部切换图标
		box.append('<dl></dl>');
		var dl = box.find('dl');
		(function(){
			for(var i = 0; i < length; i++){
				dl.append('<dt></dt>');
			};
		})();
		var dt = dl.find('dt');
		dl.css({
			'float' : 'left',
			'position' : 'absolute',
			'bottom' : '8px'
		});
		dt.css({
			'float' : 'left',
			'width' : '20px',
			'height' : '15px',
			'margin' : '0 5px',
			'background' : '#f00',
			'cursor' : 'pointer',
			'overflow' : 'hidden'
		});
		dl.css({
			'left' : (width - dl.width())/2
		});
		dt.eq(0).css({'background' : '#0f0'});
	};
	if(a_href == 'yes'){		//a标签点击
		li.append('<a href="#"></a>');
		var a = li.find('a');
		a.css({
			'float' : 'left',
			'width' : '100%',
			'height' : height
		});
		(function(){
			for(var i = 0;i < length; i++){
				if(href[i]){
					a.eq(i).attr('href' , href[i]);				
				};
			};
		})();
	};
	if(lr_button == 'yes'){		//左右按键
		box.append('<div class="left"></div>');
		box.append('<div class="right"></div>');
		var left = box.find('div.left');
		var right = box.find('div.right');
		left.css({
			'width' : '40px',
			'height' : '40px',
			'background' : '#f00',
			'cursor' : 'pointer',
			'position' : 'absolute',
			'left' : '30px'
		});
		right.css({
			'width' : '40px',
			'height' : '40px',
			'background' : '#f00',
			'cursor' : 'pointer',
			'position' : 'absolute',
			'right' : '30px'
		});
		left.css({
			'top' : (height - left.width())/2
		});
		right.css({
			'top' : (height - left.width())/2
		});
	};
	//初始化
	li.hide();
	li.eq(0).show().addClass('cur');
	var start = 1;

	function next(start,width){
		if(effect == 'fade'){
			ul.find('li.cur').stop(true,true).fadeOut(effect_val);
			li.eq(start).stop(true,true).fadeIn(effect_val);
		}else if(effect == 'slide'){
			ul.find('li.cur').stop(true,true).animate({'left' : -width},effect_val,function(){
				$(this).hide();
			});
			li.eq(start).stop(true,true).animate({'left' : width},0,function(){
				li.eq(start).stop(true,true).animate({'left' : 0},effect_val)
			}).show();
		};
		li.removeClass('cur');
		li.eq(start).addClass('cur');
		if(text_explain == 'yes'){
			if(txt[start]){
				span.text(txt[start]);
			}else{
				span.text('这是第' + (start + 1) + '张图片');
			};
		};
		if(icon_cut == 'yes'){
			dt.css({'background' : '#f00'});
			dt.eq(start).css({'background' : '#0f0'});
		};
	};
	function repeat(){
		start = ul.find('li.cur').index() + 1;
		if(start == length){start = 0};
		next(start,width);
	};
	var swf = setInterval(function(){
		repeat();
	},interval_val);
	box.hover(function(){
		clearInterval(swf);
	},function(){
		swf = setInterval(function(){
			repeat();
		},interval_val);
	});
	if(icon_cut == 'yes'){
		dt.mouseover(function(){
			if($(this).index() != ul.find('li.cur').index()){
				start = $(this).index();
				if($(this).index() < ul.find('li.cur').index()){
					next(start,-width);
				}else if($(this).index() > ul.find('li.cur').index()){
					next(start,width);
				};
			};
		});
	};
	if(lr_button == 'yes'){
		left.click(function(){
			start = ul.find('li.cur').index() - 1;
			if(start < 0){start = length -1};
			next(start,-width);
		});
		right.click(function(){
			repeat();
		});
	};
};
