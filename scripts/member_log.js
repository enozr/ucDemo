var memberLog={
	rememberName : function(){
		$('#rememberBtn').on('click',function(){
			if($(this).children("span").hasClass("uc_checkmarker_true")){
				$(this).children("span").removeClass("uc_checkmarker_true").addClass("uc_checkmarker_false");
			}
			else{
				$(this).children("span").removeClass("uc_checkmarker_false").addClass("uc_checkmarker_true");
			}
		})
	}
}
memberLog.rememberName();