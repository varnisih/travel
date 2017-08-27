function byId(id){
    return typeof(id)==="string"?document.getElementById(id):id;
}

var index=0;
var timer=null;
var pics=byId("banner").getElementsByTagName("div");
var len=pics.length;
console.log(pics);
function slideImg(){
    var main=byId("main");
    main.onmouseover=function(){
	if(timer) clearInterval(timer);
    }
    main.onmouseout=function(){
	timer=setInterval(function(){
	    index++;
	    if(index>=len){
		index=0;
	    }
	    console.log(index);
	    changeImg();
	},3000);
	
    }
    main.onmouseout();
}
function changeImg(){
    for(var i=0;i<len;i++)
    {
	pics[i].style.display="none";
    }
    pics[index].style.display="block";
}


slideImg();
