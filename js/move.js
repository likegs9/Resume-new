function Move(ele){this.ele=ele;this.timer=null;this.moveObj=document.querySelector('#move-inner');this.leaderStop=document.querySelector('#leader');this.leaderMove=document.querySelector('#leader-move');this.boundary=parseInt(winWidth*(bgCount.length-1)+'px');this.remove=true;this.count=2;this.classAdd='bg-move'
    this.init();}
Move.prototype.moveInner=function(){var that=this
    var left=parseInt(this.moveObj.style.left);if(left<=-winWidth*this.count+8){var add=document.querySelector('.'+that.classAdd+(that.count+1));if(this.count==7||this.count==8){var ulli=add.getElementsByTagName('ul')[0]
        ulli.style.display='block'}
        this.remove=false
        this.moveInnerStop(function(){add.id='play'+(that.count+1);that.remove=true;that.count++
            that.ele.addEventListener('touchstart',this.moveStart)});}
    if(left<=-this.boundary+8){button.innerHTML='谢谢'
        this.remove=false;clearInterval(this.timer);this.timer=null;return}
    left-=5;this.moveObj.style.left=left+'px'}
Move.prototype.moveInnerStop=function(callback){this.leaderStop.style.display='block';this.leaderMove.style.display='none';clearInterval(this.timer);this.ele.removeEventListener('touchstart',this.moveStart)
    if(typeof callback==='function'){callback()}}
Move.prototype.moveStart=function(e){var that=this;if(this.remove){e.preventDefault();this.leaderStop.style.display='none';this.leaderMove.style.display='block';clearInterval(this.timer)
    this.timer=setInterval(function(){that.moveInner()},10)}}
Move.prototype.init=function(){var that=this;this.ele.addEventListener('touchstart',this.moveStart.bind(this))
    this.ele.addEventListener('touchmove',function(e){e.preventDefault()})
    this.ele.addEventListener('touchend',this.moveInnerStop.bind(this))}
var button=document.querySelector('#inner-button')
var move=new Move(button);