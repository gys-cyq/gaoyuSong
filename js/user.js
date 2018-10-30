layui.config({
	base : "js/"
}).use(['layer','jquery','laypage'],function(){
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		$ = layui.jquery;

	//加载页面数据
	var userData = '';
	$.get("./json/user.json", function(data){
		alert('bbb');
		var newArray = [];
		userData = data;
		if(window.sessionStorage.getItem("addNews")){
			var addNews = window.sessionStorage.getItem("addNews");
			userData = JSON.parse(addNews).concat(userData);
			userList();
		}
	})

	function user(that){
		//渲染数据
				function renderDate(data,curr){
					var dataHtml = '';
					if(!that){
						currData = userData.concat().splice(curr*nums-nums, nums);
					}else{
						currData = that.concat().splice(curr*nums-nums, nums);
					}
					if(currData.length != 0){
						for(var i=0;i<currData.length;i++){
							dataHtml += '<tr>'
					    	+'<th align="left">'+currData[i].num+'</th>'
					    	+'<th>'+currData[i].name+'</th>';
					    	dataHtml += '<th>'+currData[i].depart+'</th>';
					    	dataHtml += '<th>'+currData[i].role+'</th>'
					    	+'<th>'
							+  '<a class="layui-btn layui-btn-mini news_edit"><i class="iconfont icon-edit"></i> 编辑</a>'
							+  '<a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon">&#xe600;</i> 收藏</a>'
							+  '<a class="layui-btn layui-btn-danger layui-btn-mini news_del" data-id="'+data[i].newsId+'"><i class="layui-icon">&#xe640;</i> 删除</a>'
					        +'</th>'
					    	+'</tr>';
						}
					}else{
						dataHtml = '<tr><th colspan="8">暂无数据</th></tr>';
					}
				    return dataHtml;
				}
		
				//分页
				var nums = 13; //每页出现的数据量
				if(that){
					userData = that;
				}
				laypage({
					cont : "page",
					pages : Math.ceil(userData.length/nums),
					jump : function(obj){
						$(".news_content").html(renderDate(userData,obj.curr));
				    	form.render();
					}
				})
			}
})
