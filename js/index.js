
$(function(){
	var $table=$('.table'),
	    database,
	    stuRestful={
	    	add:'/php/addStudents.php',
	    	del:'/php/delStudent.php',
	    	select:'/php/selectorStudent.php',
	    	update:'/php/upStudent.php',
	    }
	    $.ajaxSetup({
	    	async:false
	    })
	$table.bind('xuanran',function(e,d){
		$(this)
		.find('tbody')
		.empty()
		.html(d.data.map(function(value){
			return '<tr class="row"><td class="col-lg-2" ><input type="text" name="xuehao" data-rol="'+value.id+'" value="'+value.xuehao+'"/></td><td class="col-lg-2"> <input type="text" data-rol="'+value.id+'" value='+value.name+' name="name"></td><td class="col-lg-2"> 男<input data-rol="'+value.id+'" type="radio" name="sex'+value.id+'" value="nan" id="sex">女<input data-rol="'+value.id+'" type="radio" name="sex'+value.id+'" value="nv" id="sex"></td><td class="col-lg-2"> <input type="text" name="age" data-rol="'+value.id+'" value="'+value.age+'"/></td><td class="col-lg-2"><input type="text" name="score" data-rol="'+value.id+'" value="'+value.score+'"/></td><td class="col-lg-2"><input type="checkbox" name="item" value='+value.id+'></td></tr>'
		}).join(''));
	   var x = $table.find('input[name^=sex]')
               .prop('checked',true);
       database.forEach(function(value,i){
      if( value.sex == "nan" ){
        x.eq(i*2).prop('checked',true);
      }
    })
	})
	var getData=function(){
		$.ajax({
			url:stuRestful.select,
			dataType:'json',
		})
		.done(function(json){
            database=json;
            $table.trigger('xuanran',{data:database})
		})
	};
	setTimeout(function(){
		getData();
	},0)
	

	$('#newadd').click(function(){
		$.get(stuRestful.add).done(function(){
			getData()
		})
	})

	$('#del').click(function(){
		
		var ids=$('input[name=item]:checked').map(function(){
             return $(this).val()
		}).get();
		//console.dir(ids)
		if(!ids.length){
			alert('请选择！！！')
			return;
		}
		$.ajax({
			url:stuRestful.del,
			type:'post',
			data:{x:ids},
		}).done(function(){
           $tip.prop('checked',false)
		   database=database.filter(function(v){
				return $.inArray(v.id,ids)==-1;
			})
			$table.trigger('xuanran',{data:database})
		})

	})
	
   var $tip=$('#tip');
   $tip.click(function(){
   	$table.find('input[name=item]').prop('checked',$(this).prop('checked'))
   })
   $table.delegate('input[name=item]','click',function(){
   	if($table.find('input[name=item]:checked').length==database.length){
   		$tip.prop('checked',true)
   	}
   	if(!$(this).prop('checked')){
   		$tip.prop('checked',false)
   	}
   })

  var t;
   $table.delegate('input[name=name],input[name=xuehao],input[name=age],input[name=score]','keyup',function () {
   	   clearTimeout(t);
   	    var id=$(this).attr('data-rol')
   	   var that=this;
   	  
   	   t=setTimeout(function(){
         $.ajax({
         	url:stuRestful.update,
         	type:'post',
         	data:{shuxing:$(that).prop('name'),value:$(that).val(),id:id},

         }).done(function(d){
            
         })
   	   },1000)
   })
   $table.delegate('input[name^=sex]','click',function(){
      var id=$(this).attr('data-rol');
      var that=this;
      $.ajax({
         	url:stuRestful.update,
         	type:'post',
         	data:{shuxing:'sex',value:$(that).val(),id:id},

         }).done(function(){
         })
   })
    
	$(document).ajaxSend(function(){
		$("#tongbu").text('同步中...')
	})

	$(document).ajaxSuccess(function(){
		$("#tongbu").text('同步完成')
	})
})