/**
 * Created by gardenliu on 2016/1/20.
 * json={state:0,tit:"修改成功",btnName:"确定"}
 * exp：
 * new alertTips(
 *    {
 *       state:0,//0：错误icon，1：对号icon，-1：没有icon
 *       tit:'标题文字',
 *       btnName:'按钮名称'//如果是string类型，单个按钮，如果是array，多项按钮
 *    }
 * )
 * 如果state为0，icon为X，其他情况为对号
 * */
function alertTips(t){return"undefined"==t.tit.toString()||"undefined"==t.btnName.toString()||"undefined"==t.state.toString()?!1:(this.icon=t.state,this.title=t.tit,this.btn=t.btnName,this.iconcode=this.icon?"&#xe600;":"&#xe601;",void this.init())}alertTips.prototype={init:function(){var t=document.createElement("div");t.className="alert-tips";var e=this.createEle(this.btn);t.innerHTML=e,document.body.appendChild(t),this.btnAction(t)},createEle:function(t){var e;return e=t instanceof Array?'<div class="alert-main"><h4 class="alert-more-line" style="padding-top: .8rem;font-size: .9rem">'+this.title+'</h4> <p class="fc-green" style="padding:.8rem"> <a href="'+this.btn[0].link+'" class="btn fl bg-gray fc-white" style="width: 43%">'+this.btn[0].name+'</a> <a href="'+this.btn[1].link+'" class="btn fr fc-white bg-green" style="width: 43%">'+this.btn[1].name+"</a> </p>":'<div class="alert-main"><h4><i class="iconfont fc-green">'+this.iconcode+"</i>"+this.title+'</h4> <p class="fc-green">'+this.btn+"</p></div>"},btnAction:function(t){var e=this;t.addEventListener("click",function(t){return"P"!=t.target.nodeName?!1:void("string"==typeof e.btn&&document.body.removeChild(this))})}};