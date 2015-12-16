window.onload=function(){
	var textt=document.getElementById('text');
	var fabu=document.getElementById('fabu');
	textt.onfocus=function(){
		textt.style.border='1px solid #F4722E';
    textt.style.color='black';
		this.value='';
	};
	textt.onblur=function(){
		textt.style.border='1px solid #c4c4c4';
    textt.style.color='#C4C4C4';
	}
	textt.onkeyup=function(){
	  var shuzi=document.getElementById('shuzi1');
	  var shuzi1=document.getElementById('shuzi');
	  var cont=140-textt.value.length;
	  if(cont<0){
	  	shuzi.innerHTML='已经超出';
	  }else{
      shuzi.innerHTML='还可以输入';
    }
	  shuzi1.innerHTML=Math.abs(cont);
    if(this.value){
      fabu.style.background='#F4722E';
      fabu.style.curson='pointer';
      fabu.setAttribute('cilk',true);
    }else{
      fabu.style.background='#ffc09f';
      fabu.style.curson='text';
      fabu.removeAttribute('cilk');
    }
	};
var wenzhangg=document.getElementById('wenzhangg');
fabu.onclick=function(){
  if(!this.hasAttribute('cilk')){return;}
  var els=document.createElement('div');
      els.setAttribute('class','xiao');
      els.innerHTML='<div class="touxiang"></div><div class="hui"></div><div class="hui1"></div><div class="mingzi">张磊微博！</div><div class="wenzi">'+textt.value+'</div> <div class="zan">赞</div>';
  var top=wenzhangg.firstElementChild;
       wenzhangg.insertBefore(els,top);
       this.value='';
       shuzi.innerHTML=140;
       this.removeAttribute('cilk');
}
wenzhangg.onclick=function(e){
  if(e.target.getAttribute('class')!=='zan'){return;}
    if(!e.target.hasAttribute('data')){
  	 var span=document.createElement('span');
     span.innerHTML='1';
     e.target.appendChild(span);
     e.target.setAttribute('data',1);
 }else{
  var data=Number(e.target.getAttribute('data'));
  e.target.innerHTML='赞<span>'+(data+1)+'</span>';
  e.target.setAttribute('data',data+1);
     }

   };
wenzhangg.onmousedown=function(e){
  e.preventDefault();
}
};

