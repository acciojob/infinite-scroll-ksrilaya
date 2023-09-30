//your code here!
let scrollcontainer=document.getElementById("infi-list");
let i=0;
function addoneItem(){
	const li = document.createElement("li");
	li.innertext=`Item ${++i}`;
	scrollcontainer.appendchild(li);
}
for (let i=0;i<10;i++){
	addoneItem();
}
scrollcontainer.addEventListener("scroll",()=>{
	const maxscrollHeight = scrollcontainer.scrollHeight-scrollcontainer.clientHeight;
	let currentScrollTop=scrollcontainer.scrollTop;
	let threshold=Math.abs(maxscrollHeight-currentScrollTop);

	if(threshold<=5){
		for(let i=0;i<2;i++){
			addoneItem();
		}
	}
});

