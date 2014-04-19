$(document).ready(function(){
  var slide_count=100;
  var time_count=6;
  var slide_count_all=100;
    $("#slideCount").html("<span>"+slide_count+"</span> / "+slide_count_all);
});

$('#startBtn').click(function() {
  $(this).hide();
  var slide_count=100;
  var time_count=6;
  var slide_count_all=100;

  	setInterval(function(){
  	  if(time_count > 0 && time_count < 10 && slide_count != 0){//1秒以上のとき
  	  time_count--;

      	  if(slide_count > 0 && time_count == 0){
      	  slide_count--;
      	  }
          $("#slideCount").html("<span>"+slide_count+"</span> / "+slide_count_all);

  	  }else{
    	  time_count=5;
        }
      $("#timeCount span").html(time_count);
  	},1000);


});