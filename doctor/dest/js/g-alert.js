/**
 * Created by gardenliu on 2016/1/20.
 * json={state:0,tit:"修改成功",btnName:"确定"}
 * exp：
 * alertTips(
 *    {
 *       state:0,//0：错误icon，1：对号icon，-1：没有icon
 *       tit:'标题文字',
 *       btnName:'按钮名称'//如果是string类型，单个按钮，如果是array，多项按钮
 *    }
 * )
 * 如果state为0，icon为X，其他情况为对号
 * */
function alertTips(json,fn){
    if(json.tit.toString()=="undefined" || json.btnName.toString()=="undefined"||json.state.toString()=="undefined") return false;
    this.icon=json.state;
    this.title=json.tit;
    this.btn=json.btnName;
    this.fn=fn;
    this.iconcode=this.icon?'&#xe600;':'&#xe601;';//如果有其他icon，可根据情况替换
    this.init();
}
alertTips.prototype={
    init:function(){
        var alertEle=document.createElement('div');
        alertEle.className='alert-tips';
        var html=this.createEle(this.btn);
        alertEle.innerHTML=html;
        document.body.appendChild(alertEle);
        this.btnAction(alertEle);
    },
    createEle:function(btn){
        var html;
        if(btn instanceof Array){
            html='<div class="alert-main"><h4 class="alert-more-line" style="padding-top: .8rem;font-size: .9rem">'+this.title+'</h4> <p class="fc-green" style="padding:.8rem"> <a class="btn fl bg-gray fc-white" style="width: 43%">'+this.btn[0]+'</a> <a  class="btn fr fc-white bg-green" style="width: 43%">'+this.btn[1]+'</a> </p>';
        }else{
            html='<div class="alert-main"><h4><i class="iconfont fc-green">'+this.iconcode+'</i>'+this.title+'</h4> <p class="fc-green">'+this.btn+'</p></div>';
        }
        return html;
    },
    btnAction:function(obtn){
        var _this=this;
        var objBtn=obtn.querySelector('p.fc-green');
        objBtn.addEventListener('click',function(ev){
            if(this.children.length==0) {
                if(typeof _this.fn=='function'){
                    _this.fn(true);
                    document.body.removeChild(obtn);
                };
            }
            else{
                if(typeof _this.fn!='function') return false;
                    if(ev.target.classList.contains('fl')){
                        _this.fn(false);
                        document.body.removeChild(obtn);
                    }else if(ev.target.classList.contains('fr')){
                        _this.fn(true);
                        document.body.removeChild(obtn);
                    }
            }
        })
    }
}