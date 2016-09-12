/**
 * Created by xzh on 2016/9/12.
 */
$(function () {
    var s=[{data1:"2016-04-01",data2:"2016-06-05",remark:"前端基础学习",content:"这个时候，我快结束了在新疆油田一年的实习经历，由于行业惨淡，决定自学前端知识，在网上参加了网络课，每天刻苦练习"},{data1:"2016-06-25",data2:"2016-09-18",remark:"海尔小薇公司实习",content:"在海尔找了一份实习，跟着公司做前端的项目"}];
    var html='';
    for (var i = 0; i < s.length; i++) {
        var data1 = s[i].data1;
        var data2 = s[i].data2;
        var remark = s[i].remark;
        var content = s[i].content;
        html += `<div class='appcon'>
                              <div class='app-time'> 
                                   <p>${data1}</p> 
                                    <p >${data2}</p> 
                              </div> 
                               <div class='app-more'> 
                                   <p>
                                       <span >
                                         ${remark}
                                       </span>
                                        <i></i>
                                    </p> 
                                     <p>${content}</p> 
                                   </div>
                         </div>`
    }
    $('.timeline').append(html);

    $('i').click(function () {
        var  $ltext =$(this).parent().next();
        if($ltext.width()==300){
            $ltext.addClass('long-text');
            $ltext.css({
                'width':'350px',
                'max-height':'100px',
                'color':'white'
            });
            $(this).css({'transform': 'rotate(90deg)'});
        }else{
            $ltext.removeClass('long-text');
            $ltext.css({
                'width':'300px',
                'max-height':'50px',
                'color':'#06CBD6'
            });
            $(this).css({'transform': 'rotate(0deg)'});
        }
    });
});
