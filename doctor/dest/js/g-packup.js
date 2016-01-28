/**
 * Created by gardenliu on 2016/1/22.
 */
function PackUp(obj){
    this.obj=obj;
    this.cirlelist=obj.querySelector('.circle-list');
    this.packbtn=obj.querySelector('.pack-up');
    this.init();
}
PackUp.prototype={
    init:function(){
        var _this=this;
        this.cirlelist.addEventListener('click',this.cirleAction);
        this.packbtn.addEventListener('click',function(ev){
            _this.packAction(ev);
        });
    },
    cirleAction:function(ev){
        if(ev.target.nodeName!='LI') return false;
        var len=this.children.length;
        while(len--){
            this.children[len].className='';
        }
        ev.target.className='cirle';
    },
    packAction:function(ev){
        var height=this.cirlelist.offsetHeight,
            icon=ev.currentTarget.children[1];
        if(this.obj.style.cssText==''){
            this.obj.style.height=height+'px';
            icon.innerHTML='&#xe607;';
        }else{
            this.obj.style.height='';
            icon.innerHTML='&#xe602;';
        }
    }
};