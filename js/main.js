window.onload=function(){
	var oProgress=document.getElementById('prog');
	var oWorks=document.getElementById('works');
	var aLis=oWorks.getElementsByTagName('li');
	for(var i=0;i<aLis.length;i++){
		aLis[i].index=i+1;
		aLis[i].onclick=function(){
			oProgress.className='progress state-'+this.index;
		}
	}
}