
var $tel = $("input#tel");

$(document).ready(function(){
  console.log("ok");

  $tel.keyup(function(){
  	var tel = $tel.val();
  	reg.splitPhone(tel);
  	$("input").css("background-color","#D6D6FF");
  });

});

var reg = {
	splitPhone: function (tel) {
		//  format: 3 3 4
		// 1. 取出数据，删除空格
		// 2. 格式化(插入空格)后再传回去，密码强度校验
	},
	clearSpace: function (tel) {
		// return result;
	},

	validateTel: function (argument) {
		// 验证130-139,150-159,180-189号码段的手机号码
		var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
	    if(!myreg.test($("#phone").val())) 
	    { 
	        alert('请输入有效的手机号码！'); 
	        return false; 
	    } 
	}
}