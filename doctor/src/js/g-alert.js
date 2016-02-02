/**
 * Created by gardenliu on 2016/1/20.
 * exp：
 *
 * 单个按钮
 new alertTips({
        state:0,//0：错误icon，1：对号icon，-1：没有icon
        tit:'预约挂号成功<br> 您的预约密码是 <span class="fc-green">1245t5</span><br> 请凭借预约密码到分诊台办理挂号!',
        btnName:['再次预约','查看预约']
    },function(res){   //回调函数--res返回两个值--true--false；
        alert(res)
  });

双向按钮
 new alertTips({
        state:0,//0：错误icon，1：对号icon，-1：没有icon
        tit:'预约挂号成功',
        btnName:'确定'
    },function(res){   //回调函数--res返回一个值--true
        alert(res)
  });
 * 如果state为0，icon为X，其他情况为对号
 * */
function alertTips(t,e){return"undefined"==t.tit.toString()||"undefined"==t.btnName.toString()||"undefined"==t.state.toString()?!1:(this.icon=t.state,this.title=t.tit,this.btn=t.btnName,this.fn=e,this.iconcode=this.icon?"&#xe600;":"&#xe601;",void this.init())}alertTips.prototype={init:function(){var t=document.createElement("div");t.className="alert-tips";var e=this.createEle(this.btn);t.innerHTML=e,document.body.appendChild(t),this.btnAction(t)},createEle:function(t){var e;return e=t instanceof Array?'<div class="alert-main"><h4 class="alert-more-line" style="padding-top: .8rem;font-size: .9rem">'+this.title+'</h4> <p class="fc-green" style="padding:.8rem"> <a class="btn fl bg-gray fc-white" style="width: 43%">'+this.btn[0]+'</a> <a  class="btn fr fc-white bg-green" style="width: 43%">'+this.btn[1]+"</a> </p>":'<div class="alert-main"><h4><i class="iconfont fc-green">'+this.iconcode+"</i>"+this.title+'</h4> <p class="fc-green">'+this.btn+"</p></div>"},btnAction:function(t){var e=this,n=t.querySelector("p.fc-green");n.addEventListener("click",function(n){if(0==this.children.length)"function"==typeof e.fn&&(e.fn(!0),document.body.removeChild(t));else{if("function"!=typeof e.fn)return!1;n.target.classList.contains("fl")?(e.fn(!1),document.body.removeChild(t)):n.target.classList.contains("fr")&&(e.fn(!0),document.body.removeChild(t))}})}};