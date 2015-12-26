var memberLog={
	rememberName : function(){
		$('#rememberBtn').on('click',function(){
			if($(this).children("span").hasClass("uc_checkmarker_true")){
				$(this).children("span").removeClass("uc_checkmarker_true").addClass("uc_checkmarker_false");
			}
			else{
				$(this).children("span").removeClass("uc_checkmarker_false").addClass("uc_checkmarker_true");
			}
		});
	},
	moblieCheck : function(){
		 var mobileReg = /^1[3|4|5|8][0-9]\d{8}$/;
		 $("#mobileNum").blur(function(){
		 	if (mobileReg.test($("#mobileNum").val())){
		 		$(this).siblings("i").addClass("uc_successIcon");
		 		$(this).siblings(".errorInfo").text("");
		 	}else{
		 		$(this).siblings(".errorInfo").text("请输入正确的手机号");
		 		$(this).siblings("i").addClass("uc_errorIcon");
		 		return false;
		 	}
		 });
	}
};
var identity={
	sidebar : function(){
		$('.cl_sidebarTit').on('click',function(){
			$('.cl_sidebarTit').children("i").text("+");
			$(this).children("i").text("-");
			$('.cl_sidebarMenu').stop(true,true).slideUp();
			$('.cl_sidebarMenuList').delay(500).removeClass("cl_sidebarOn")
			$(this).next('.cl_sidebarMenu').stop(true,true).slideDown();
			$(this).parent('.cl_sidebarMenuList').addClass("cl_sidebarOn")
		})
	}
}
memberLog.rememberName();
memberLog.moblieCheck();
identity.sidebar();
