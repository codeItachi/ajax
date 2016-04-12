/*1.定义一个call函数 function call(x){return x};
2.创建一个script脚本
3.script脚本的src指定成要获取数据的地址
4. <script>  src可以跨域
call({x:1,x:2});
</script>
5.插入到页面中执行*/
// jsonp  原理
// jsonp 协议并不使用 xmlHttpRequest
$(function(){
	var data;
	xx=function(x){
		data=x;
	}
	$('<script>')
	.attr('src','http://192.168.4.22/php/jsonp.js')
	.appendTo(document.body)
})