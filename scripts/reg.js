
var reg = {
	splitPhone: function (tel) {
		//  format: 3 3 4
		// 1. 取出数据，删除空格 telInput --> tel
		// 2. 格式化(插入空格)后再传回去，密码强度校验
	},
	clearSpace: function (tel) {
		// return result;
	},
	checkPwdStrength: function ($pwd) {
		var numRegx = /\d/, 
			lowerCaseRegx = /[a-z]/, 
			capitalRegx = /[A-Z]/, 
			specialRegx = /\W/;
		var pwd = $.trim($pwd.val()), len = pwd.length;
		
		var hasNum = numRegx.test(pwd),
			hasLowerCase = lowerCaseRegx.test(pwd),
			hasCapital = capitalRegx.test(pwd),
			hasSpecial = specialRegx.test(pwd);

		var pwdStrength1 = false, pwdStrength2 = false, pwdStrength3 = false;	
		if (len != 0) {
			pwdStrength1 = true;
		}
		if (len > 6 && len <=16) {
			pwdStrength2 =  hasNum && hasLowerCase && hasCapital;
		};
		if (len >= 12 && len <=16) {
			pwdStrength3 = hasNum && hasLowerCase && hasCapital && hasSpecial;
		}
		reg.updateColorForStrengthCheck($("#pwdStrength1"), pwdStrength1);
		reg.updateColorForStrengthCheck($("#pwdStrength2"), pwdStrength2);
		reg.updateColorForStrengthCheck($("#pwdStrength3"), pwdStrength3);
	},

	updateColorForStrengthCheck: function ($ele, flag) {
		if (flag) {
			if (!$ele.hasClass("uc-green")) {
				$ele.removeClass("uc-grey").addClass("uc-green");
			}
		} else {
			if (!$ele.hasClass("uc-grey")) {
				$ele.removeClass("uc-green").addClass("uc-grey");
			}
		}
	},
	updateValImg: function ($input, flag) {
		// update validation image
		var $ele = $input.siblings("i");
		if (flag) {
	    	if (!$ele.hasClass("uc_successIcon")) {
				$ele.removeClass("uc_errorIcon").addClass("uc_successIcon");
			}
		} else {
			if (!$ele.hasClass("uc_errorIcon")) {
				$ele.removeClass("uc_successIcon").addClass("uc_errorIcon");
			}
		}
	},
	validateTel: function (argument) {
		// 验证130-139,150-159,180-189号码段的手机号码
		var telRegex = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		var $tel = $("#telInput"), tel = $tel.val(), flag = true, msg = "";
		// if ($.trim(tel) == "") {
		// 	msg = '请输入手机号码';
		// 	flag = false;
		// }
	    if(!telRegex.test(tel)) { 
	        msg = '请输入有效的手机号码';
	        flag = false; 
	    }
	    $tel.siblings(".errorInfo").text(msg);
	    reg.updateValImg($tel, flag);
	    return flag;
	},
	validatePwd:function (argument) {
		var $pwd = $("#pwd"), pwd = $pwd.val(), flag = true, msg = "", len = $pwd.val().length;
		if ($.trim(pwd) === "") {
			msg = '请输入密码';
			flag = false;
		} else if (pwd.indexOf(" ") !== -1) {
			msg = '密码不能包含空格';
			flag = false;
		} else if (len > 16 || len < 6) {
			msg = "密码长度应该在6-16位之间";
			flag = false;
		}

		// body...
		$pwd.siblings(".errorInfo").text(msg);
		reg.updateValImg($pwd, flag);
		return flag;
	},
	validatePwd2: function (argument) {
		var pwd = $("#pwd").val(),
		$pwd2 = $("#pwd2"), pwd2 = $pwd2.val(), flag = true, msg = "";
		if ($.trim(pwd) != $.trim(pwd2)) {
			msg = '两次输入的密码不一致';
			flag = false;
		};
		$pwd2.siblings(".errorInfo").text(msg);
		reg.updateValImg($pwd2, flag);
		return flag;
	},

	validateImgCode: function (argument) {
		var $imgCode = $("#imgCode"),flag = true, msg = "";
		if (false) {
			msg = "请输入正确的图片验证码";
		}
		reg.updateValImg($imgCode, flag);
		return flag;
	},
	validateSmsCode: function (argument) {
		var $smsCode = $("#smsCode"),flag = true, msg = "";
		if (false) {
			msg = "请输入正确的短信验证码";
		}
		return flag;
	},
	checkAgreement: function (argument) {
		return $.trim($("#agreement").val()) == "true";
	},
	clearError: function (argument) {
		$(".errorInfo").text('');
	},

	init: function (argument) {
		var $tel = $("input#telInput"), $pwd = $("#pwd");
		// split telphone number
		$tel.keyup(function(){
		  	var tel = $tel.val();
		  	reg.splitPhone(tel);
		  	// $("input").css("background-color","#D6D6FF");
		});
		
		// password strength check
		$pwd.keyup(function (argument) {
			var $pwd = $("#pwd");
			reg.checkPwdStrength($pwd);
		});
		
		$("#agree").click(function (argument) {
			$(".agreeIco").toggleClass("uc_checkmarker_false").toggleClass("uc_checkmarker_true");
			var $agreement = $("#agreement");
			$agreement.val( $agreement.val() != "true" ? "true":"false" );
		});
		$("#agree>a").click(function (event) {
			event.stopPropagation();
		});

		$tel.blur(function(){ reg.validateTel(); });
		$pwd.blur(function(){ reg.validatePwd(); });
		$("#pwd2").blur(function(){ reg.validatePwd2(); });

		// validation & submit form
		$("#regSubmit").click(function (argument) {
			console.log("submit form.");
			var flag = true;
			reg.clearError();
			flag = reg.validateTel() && reg.validatePwd() && reg.validatePwd2() && 
				reg.validateImgCode() && reg.validateSmsCode();
			if (flag) {
				// submit form
				$.post("#", $("#regForm").serialize(), function(data){
					// data.success
				});
			}
		});
	}
};

$(document).ready(function(){
  console.log("page load...");
  reg.init();
});