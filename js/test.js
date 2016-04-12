$(function(){
	$.ajax({
		// url:'http://api.map.baidu.com/telematics/v3/weather?location=112.56,37.73&output=json&ak=yRcnjNe2bvp655ycN7UIVDdI',//http请求的位子
		//type:'post',    //http请求的类型
		// data:{id:87},        //要发送的数据 通常一个对象
		// dataType:'json',  //指定服务器返回的类型   若没按规定返回 尝试在本地转换  默认值text
		/*success:function(d){
			console.log(d);
		} ,*///请求成功之后会调用这个函数 调用的时候是传参调用 传递给这个函数的参数为服务器的返回结果
        // async:false, //(默认: true) 默认设置下，所有请求均为异步请求
        /*dataFilter:function(data,type){
        	return '1';
        }*/
         // dataType:'jsonp', //跨域获取 
         // jsonpCallback:'call',
		// ..............................................
		/*error:function(){
			console.log(1)
		} ,*///ajax 请求失败之后调用本函数

		// ..............................................
      
		// accepts:'text/javascript',
        // converters:{'text json':window.String},
       /* url:'/php/selectorStudent.php',
        dataType:'json',
        global:false,
        success:function(d){
        	console.log(d)
        }*/
    })
   // $(document).ajaxSuccess(function(){
   // 	$('table').css('color','purple')
   // })
   // $('h3').load('index.html')
   setTimeout(function(){
   	$.ajax({
   		url:'/php/selectorStudent.php',
   	})
   },0)
   $(document).ajaxStart(function(){
    	console.log('start')
    })
	$(document).ajaxSend(function(){
		console.log('send')
	})

	$(document).ajaxSuccess(function(){
		console.log('success')
	})
	$(document).ajaxComplete(function(){
		console.log('Complete')
	})
})
