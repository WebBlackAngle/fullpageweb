//move.js
//set();设置css属性
//move("#exmple-1 .box").set('margin-left',100).end();
//add();增加属性, sub();减少属性
//move("#exmple-1 .box").add('margin-left',100).end();
//rotate();旋转
//move("#exmple-1 .box").rotate(140).end();
//duration(); 动画持续时间
//move("#exmple-1 .box").set('background-color','red').duration('2s').end();
//translate(x,[,y]); 平移动
//move("#exmple-1 .box").translate(300,80).end();
// 也可以用x 和y move#x()/move#y();来实现translate
//move("#exmple-1 .box").x(300),y(80).end();
//skew(x[,y]),表示倾斜
//move("#exmple-1 .box").x(300).skew(50).set('height',20).end();
//scale(x[,y]);缩放
//scaleX()/scaleY();
//move("#exmple-1 .box").scale(3).end();
//ease(fn);代表不同的效果
// 有default、in、out、in-out、snap、(0,1,10)
//end([fn]);一个动画效果的结束.end里可以放callback
//delay();延迟
//then([fn]);一组动画
//move.select(selector);
//move.defaults
//
//
//
//
//
//
$(function(){
	$('#fullPage').fullpage({
		verticalCentered:false,
		anchors:['page1','page2','page3','page4'],
		navigation:true,
		navigationTooltips:['它,终于来了','真正与你贴近的个人设备','非同一般的精准计时','在三个特点鲜明的系列中找到属于你的风格'],
		afterLoad:function(link,index){
			switch(index){
				case 1:
					move(".section1 h1").scale(1.5).end();
					move(".section1 p").set('margin-top','5%').end();
					break;
				case 2:
					move(".section2 h1").scale(0.7).end();
					break;
				case 3:
					move(".section3 h1").set('margin-left','20%').end();
					move(".section3 p").set('margin-left','20%').end();
					break;
				case 4:
					move(".section4 img.primary").rotate(360).end(function(){
						move(".section4 img.sport").rotate(360).end(function(){
							move(".section4 img.edition").rotate(360).end(function(){
								move(".section4 h4.primary").scale(1.3).end(function(){
									move(".section4 h4.sport").scale(1.3).end(function(){
										move(".section4 h4.edition").scale(1.3).end();
									});
								});
							});
						});
					});
					break;
				default:
					break;
			}
		},
		onLeave:function(link,index){
			switch(index){
				case 1:
					move(".section1 h1").scale(1).end();
					move(".section1 p").set('margin-top','800px').end();
					break;
				case 2:
					move(".section2 h1").scale(1).end();
					break;
				case 3:
					move(".section3 h1").set('margin-left','-1500px').end();
					move(".section3 p").set('margin-left','1500px').end();
					break;
				case 4:
					move(".section4 img.primary").rotate(-360).end();
					move(".section4 img.sport").rotate(-360).end();
					move(".section4 img.edition").rotate(-360).end();
					move(".section4 h4.primary").scale(1).end();
					move(".section4 h4.sport").scale(1).end();
					move(".section4 h4.edition").scale(1).end();
 					break;
				default:
					break;
			}
		},
		afterRender:function(){
		}
	});
});