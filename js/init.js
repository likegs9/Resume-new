var winWidth=document.documentElement.clientWidth;var moveInner=document.querySelector('#move-inner');var bgCount=document.querySelectorAll('.bg-count');var musicCloud=document.getElementById("musicCloud");var musicClick=document.getElementById("musicClick");var letterTop=document.querySelector('.letter-top');var loading=document.querySelector('.loading');var bgMove1=document.querySelector('.bg-move1');document.onreadystatechange=function(){if(document.readyState=="complete"){console.log('谢谢观看我的简历^_^')
    moveInner.style.width=winWidth*bgCount.length+'px';for(var i=0;i<bgCount.length;i++){bgCount[i].style.width=winWidth+'px'}
    loading.className='loading loading-move';bgMove1.id='play1'}}
if(typeof WeixinJSBridge=="object"&&typeof WeixinJSBridge.invoke=="function"){WeixinJSBridge.invoke('getNetworkType',{},function(res){musicCloud.play();});}
musicClick.onclick=function(){console.log(1)
    if(musicCloud.paused){musicCloud.play();musicClick.className='music-sun music-play';}else{musicCloud.pause();musicClick.className='music-sun';}}
letterTop.onclick=function(){this.setAttribute('id','letter-move');this.nextElementSibling.setAttribute('id','letter-move2')}