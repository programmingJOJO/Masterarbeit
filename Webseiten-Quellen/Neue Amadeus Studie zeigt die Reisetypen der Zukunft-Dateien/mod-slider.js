// MODULE SLIDER

$(function(){
		$(".01").click(function(){
			$("#01").css("display","block");
			$(".01").addClass("on");
			$(".01").removeClass("off");
			
			$("#02").css("display","none");
			$(".02").addClass("off");
			$(".02").removeClass("on");
			
			$("#03").css("display","none");
			$(".03").addClass("off");
			$(".03").removeClass("on");
		});
		$(".02").click(function(){
			$("#02").css("display","block");
			$(".02").addClass("on");
			$(".02").removeClass("off");
			
			$("#01").css("display","none");
			$(".01").addClass("off");
			$(".01").removeClass("on");
			
			$("#03").css("display","none");
			$(".03").addClass("off");
			$(".03").removeClass("on");
		});
		$(".03").click(function(){
			$("#03").css("display","block");
			$(".03").addClass("on");
			$(".03").removeClass("off");
			
			$("#01").css("display","none");
			$(".01").addClass("off");
			$(".01").removeClass("on");
			
			$("#02").css("display","none");
			$(".02").addClass("off");
			$(".02").removeClass("on");
		});
});
