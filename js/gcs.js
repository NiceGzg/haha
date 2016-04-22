var gcsc00=document.getElementById('gcsc00');
var ps=gcsc00.getElementsByTagName('p');
var gcsc1=document.getElementById('gcsc1');
var inner=document.getElementById('inner');
var imgs=inner.getElementsByTagName('img');
var num=document.getElementById('num');
var lis=num.getElementsByTagName('li');
var left=document.getElementById('left');
var right=document.getElementById('right');
var time1=null,time2=null,a=0;
function move(){
	var start=inner.scrollLeft;
	var end=imgs[0].offsetWidth*a;
	var stepmin=0;
	var stepmax=20;
	var change=end-start;
	var everystep=change/stepmax;
	clearInterval(time2);
	time2=setInterval(function(){
		stepmin++;
		if (stepmin>=stepmax) {
			stepmin=stepmax;
			clearInterval(time2);
		};
		start=start+everystep;
		inner.scrollLeft=start;
	},10);
	for (var i = 0; i < lis.length; i++) {
		lis[i].className='select';
		lis[a].className='';
	};
	for (var i = 0; i < ps.length; i++) {
		ps[i].style.display='none';
		ps[a].style.display='block';
	};
	
}
function moveauto(){
	clearInterval(time1);
	time1=setInterval(function(){
		a++;
		if (a>=imgs.length) {
			a=0;
		};
		move();
	},2000);
}
moveauto();
left.onclick=function(){
	clearInterval(time1);
	clearInterval(time2);
	a--;
	if (a<0) {
		a=imgs.length-1;
	};
	move();
	moveauto();
}
right.onclick=function(){
	clearInterval(time1);
	clearInterval(time2);
	a++;
	if (a>=imgs.length) {
			a=0;
		};
	move();
	moveauto();
}
for (var i = lis.length - 1; i >= 0; i--) {
	lis[i].onclick=function(){
		clearInterval(time1);
		clearInterval(time2);
		for (var i = lis.length - 1; i >= 0; i--) {
			if (lis[i]==this) {
				a=i;
				move();
				moveauto();
			};
		};
	}
};
gcsc1.onmouseover=function(){
	clearInterval(time1);
	clearInterval(time2);
}
gcsc1.onmouseout=function(){
	move();
	moveauto();
}
var outer1=document.getElementById('outer1');
var inner1=document.getElementById('inner1');
var con1=document.getElementById('con1');
var imgs1=inner1.getElementsByTagName('img');
var num4=document.getElementById('num4');
var li1s=num4.getElementsByTagName('li');
var time3=null,time4=null,b=0,bb=1;
var firstImg1=con1.children[0].cloneNode(true);
var lastImg1=con1.children[imgs1.length-1].cloneNode(true);
con1.appendChild(firstImg1);
con1.insertBefore(lastImg1,con1.children[0]);
inner1.scrollLeft=imgs1[0].offsetWidth;
function move1(){
	var start=inner1.scrollLeft;
	var end=imgs1[0].offsetWidth*bb;
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
		// start=start+everystep;
		// inner1.scrollLeft=start;
		inner1.scrollLeft=Tween.Bounce.easeOut(stepmin,start,change,stepmax);
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
		if (b>=li1s.length) {
			b=0;
		};
		bb++;
		if (bb>=imgs1.length) {
			bb=2
			inner1.scrollLeft=imgs1[0].offsetWidth;
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
				bb=i+1;
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
var con2=document.getElementById('con2');
var imgs2=inner2.getElementsByTagName('img');
var num6=document.getElementById('num6');
var li2s=num6.getElementsByTagName('li');
var time5=null,time6=null,c=0,cc=1;
var firstImg2=con2.children[0].cloneNode(true);
var lastImg2=con2.children[imgs2.length-1].cloneNode(true);
con2.appendChild(firstImg2);
con2.insertBefore(lastImg2,con2.children[0]);
inner2.scrollLeft=imgs2[0].offsetWidth;
function move2(){
	var start=inner2.scrollLeft;
	var end=imgs1[0].offsetWidth*cc;
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
		// start=start+everystep;
		// inner2.scrollLeft=start;
		inner2.scrollLeft=Tween.Bounce.easeOut(stepmin,start,change,stepmax);
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
		if (c>=li2s.length) {
			c=0;
		};
		cc++;
		if (cc>=imgs2.length) {
			cc=2;
			inner2.scrollLeft=imgs2[0].offsetWidth;
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
				cc=i+1;
				move2();
				moveauto2();
			};
		};
	}
};
outer2.onmouseover=function(){
	clearInterval(time5);
	clearInterval(time6);
}
outer2.onmouseout=function(){
	move2();
	moveauto2();
}
var mask=document.getElementById('mask');
var dld=document.getElementById('dld');
var dld1=document.getElementById('dld1');
var li3s=dld1.getElementsByTagName('li');
var dar=document.getElementById('dar');
var li4s=dar.getElementsByTagName('li');
var close=document.getElementById('close');
var dl=document.getElementById('dl');
var aq=document.getElementById('aq');
var rx=document.getElementById('rx');
var dldh=document.getElementById('dldh');
var body=document.getElementsByTagName('body')[0];
inner.onclick=function(){
	mask.style.display='block';
	dl.style.display='block';
	li3s[0].className='show';
	dld.style.display='block';
}
close.onclick=function(){
	mask.style.display='none';
	for (var i = 0; i < li4s.length; i++) {
		li3s[i].className='';
		li4s[i].style.display='none';
	};
	dld.style.display='none';
}
for (var i = 0; i < li3s.length; i++) {
	li3s[i].onclick=function(){
		for (var i = 0; i < li3s.length; i++) {
			if (this==li3s[i]) {
				li3s[i].className='show';
				li4s[i].style.display='block';
			} else{
				li3s[i].className='';
				li4s[i].style.display='none';
			};
		};
	}
};
dldh.onclick=function(){
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

