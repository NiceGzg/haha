function getclass(parentID,clName){
	var parent=document.getElementById(parentID);
	var tags=parent.all?parent.all:parent.getElementsByTagName('*');
	var arr=[];
	for (var i = 0; i < tags.length; i++) {
		if (tags[i].className==clName) {
			arr.push(tags[i]);
		};
	};
	return arr;
}
var cons=getclass('grzc2','grzc211');
var cons1=getclass('grzc2','grzc212');
var cons2=getclass('grzc2','grzc21');
for (var i = 0; i < cons2.length; i++) {
	cons2[i].onmouseover=function(){
		for (var i = 0; i < cons2.length; i++) {
			if (this==cons2[i]) {
				cons[i].style.backgroundImage='url(images/grz35.png)';
				cons1[i].style.display='block';
			} else{
				cons[i].style.backgroundImage='';
				cons1[i].style.display='none';
			};
		};
	}
};
for (var i = 0; i < cons2.length; i++) {
	cons2[i].onmouseout=function(){
		for (var i = 0; i < cons2.length; i++) {
			if (this==cons2[i]) {
				cons[i].style.backgroundImage='';
				cons1[i].style.display='none';
			};
		};
	}
};
var outer1=document.getElementById('outer1');
var inner1=document.getElementById('inner1');
var imgs1=inner1.getElementsByTagName('img');
var num4=document.getElementById('num4');
var li1s=num4.getElementsByTagName('li');
var time3=null,time4=null,b=0;
function move1(){
	var start=inner1.scrollLeft;
	var end=imgs1[0].offsetWidth*b;
	var stepmin=0;
	var stepmax=20;
	var change=end-start;
	var everystep=change/stepmax;
	clearInterval(time4);
	time4=setInterval(function(){
		stepmin++;
		if (stepmin>=stepmax) {
			stepmin=stepmax;
			clearInterval(time4);
		};
		start=start+everystep;
		inner1.scrollLeft=start;
	},10);
	for (var i = 0; i < li1s.length; i++) {
		li1s[i].className='';
	};
	li1s[b].className='show';
}
function moveauto1(){
	clearInterval(time3);
	time3=setInterval(function(){
		b++;
		if (b>=imgs1.length) {
			b=0;
		};
		move1();
	},2000);
}
moveauto1();
for (var i =0; i < li1s.length; i++) {
	li1s[i].onclick=function(){
		clearInterval(time3);
		clearInterval(time4);
		for (var i =0; i < li1s.length; i++) {
			if (li1s[i]==this) {
				b=i;
				move1();
				moveauto1();
			};
		};
	}
};
outer1.onmouseover=function(){
	clearInterval(time3);
	clearInterval(time4);
}
outer1.onmouseout=function(){
	move1();
	moveauto1();
}
var outer2=document.getElementById('outer2');
var inner2=document.getElementById('inner2');
var imgs2=inner2.getElementsByTagName('img');
var num6=document.getElementById('num6');
var li2s=num6.getElementsByTagName('li');
var time5=null,time6=null,c=0;
function move2(){
	var start=inner2.scrollLeft;
	var end=imgs1[0].offsetWidth*c;
	var stepmin=0;
	var stepmax=20;
	var change=end-start;
	var everystep=change/stepmax;
	clearInterval(time6);
	time6=setInterval(function(){
		stepmin++;
		if (stepmin>=stepmax) {
			stepmin=stepmax;
			clearInterval(time6);
		};
		start=start+everystep;
		inner2.scrollLeft=start;
	},10);
	for (var i = 0; i < li2s.length; i++) {
		li2s[i].className='';
	};
	li2s[c].className='show2';
}
function moveauto2(){
	clearInterval(time5);
	time5=setInterval(function(){
		c++;
		if (c>=imgs2.length) {
			c=0;
		};
		move2();
	},2000);
}
moveauto2();
for (var i =0; i < li2s.length; i++) {
	li2s[i].onclick=function(){
		clearInterval(time5);
		clearInterval(time6);
		for (var i =0; i < li2s.length; i++) {
			if (li2s[i]==this) {
				c=i;
				move2();
				moveauto2();
			};
		};
	}
};
outer1.onmouseover=function(){
	clearInterval(time5);
	clearInterval(time6);
}
outer1.onmouseout=function(){
	move2();
	moveauto2();
}
var body=document.getElementsByTagName('body')[0];
var grzdj=document.getElementById('grzdj');
grzdj.onclick=function(){
	body.scrollTop=0;
}
var gcsc3y000=document.getElementById('gcsc3y000');
var gcsc3y00=document.getElementById('gcsc3y00');
var li0s=gcsc3y00.getElementsByTagName('li');
var gcsc3y01=document.getElementById('gcsc3y01');
var time7=null,time8=null;
var maxh=gcsc3y00.offsetHeight;
gcsc3y01.innerHTML=gcsc3y00.innerHTML;
function movetop(){
	gcsc3y000.scrollTop++;
	if (gcsc3y000.scrollTop>=maxh) {
		gcsc3y000.scrollTop=0;
	};
	if (gcsc3y000.scrollTop%(li0s[0].offsetHeight+3)==0) {
		clearInterval(time7);
		clearTimeout(time8);
		time8=setTimeout(function(){
			time7=setInterval(movetop,10);
		},1000)
	};
}
time7=setInterval(movetop,10);
gcsc3y000.onmouseover=function(){
	clearInterval(time7);
	clearTimeout(time8);
}
gcsc3y000.onmouseout=function(){
	time7=setInterval(movetop,10);
}