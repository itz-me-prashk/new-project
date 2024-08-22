
var paras      = document . querySelectorAll   ('.icons p')
var add1       = document . getElementById     ("pop")
var add2       = document . getElementById     ("form")
var addbtn     = document . getElementById     ("new")
var cnbtn      = document . getElementById     ("cancel")
var save1      = document . getElementById     ("save")
var xmark1     = document . querySelector      ("x-mark")
var op         = document . querySelector      ('.x')
var op1        = document . querySelector      ('.x1')
var checkbox   = document . querySelectorAll   ('.checkbox')
var sidebar    = document . querySelector      ('.sidebar')
var usrs       = document . querySelectorAll   ('.dt p ')
var icons      = document . querySelectorAll   ('.icons  li ')

var container  = document . getElementById     ('container')
var author     = document . querySelector      (".bname")	
var title      = document . querySelector      (".btitle")	
var descript   = document . querySelector      (".cont")	

var content    = document . querySelector      ("#container")	
var save       = document . querySelector      (".save")	
var ediths     = document . querySelector      ('.edith')
var headings   = document . querySelectorAll   ('.headings')

var text1 = document.querySelector('.x1')

var contents   = document . querySelectorAll   ('.text121')

var uploadBtn1  = document . getElementById    ('imginp');
var fileInput1  = document . getElementById    ('fileInput');
var uploadBtn2  = document . querySelector     ('.f12');
var fileInput2  = document . querySelector     ('.f2');
var userpopup   = document . querySelector     ('.userpopup');
var imagecolor  = document . querySelector     ('.img2')
var archeive    = document . querySelector     ('.archive');
var trash       = document . querySelector     ('.trash');
var remainder   = document . querySelector     ('.Remainder');

var archeive1   = document . querySelector     ('.archiveopt2');
var trash1       = document . querySelector     ('.trashopt2');
var remainder1   = document . querySelector     ('.Remainderopt2');

var i1          = document . querySelector     ('.i1');
var i2          = document . querySelector     ('.i2');
var i3          = document . querySelector     ('.i3');
var i4          = document . querySelector     ('.i4');
var i5          = document . querySelector     ('.i5');

var maxpopup    = document . querySelector     ('.maximize');
var maxwindow   = document . querySelector     ('.maximize-window');

var maxpophead=document.querySelector('.maxpophead')
var maxpopp=document.querySelector('.maxpopp')

function move() {
	op1.style.display='inline-block'
	op.style.display='none'
	for(var i=0;i<paras.length;i=i+1){
		paras[i].style.display='none'
		
	}
	for(var i=0;i<usrs.length;i=i+1){
		usrs[i].style.display='none'
	}

	for (var j = 223.9;j>70;j=j-1){
		
		sidebar.style.width=j+'px'
		container.style.marginLeft=j+76.31 + 'px'
		trash.style.marginLeft=j+76.31 + 'px'
		archeive.style.marginLeft=j+76.31 + 'px'
		remainder.style.marginLeft=j+76.31 + 'px'

	}
	for (var l =0 ; l<icons.length ; l=l+1){
		icons[l].style.padding='30px'
		
	}
	for (var m =0 ; m<text1.length; m=m+1){

	}
	op1.style.marginLeft='65px'
	op1.style.zIndex='13'
	container.zIndex='12'

}

function none() {
	op1.style.display='none'
	op.style.display='block'
	for(var i=0;i<paras.length;i=i+1){
		paras[i].style.display='inline-block'
	}
	for(var i=0;i<usrs.length;i=i+1){
		usrs[i].style.display='block'
	}
	for (var j = 70;j<=223.9;j=j+1){
		
		sidebar.style.width=j+'px'
		container.style.marginLeft=j+76.31 + 'px'
		trash.style.marginLeft=j+76.31 + 'px'
		archeive.style.marginLeft=j+76.31 + 'px'
		remainder.style.marginLeft=j+76.31 + 'px'

	}
	for (var l =0 ; l<icons.length ; l=l+1){
		icons[l].style.padding=''
	}

} 
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
	
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
  	var openDropdown = dropdowns[i];
  	if (openDropdown.classList.contains('show')) {
  		
    	openDropdown.classList.remove('show');
  	}
	}
	}
}
function list()
{
	add1.style.display="block"
	add2.style.display="block"
}

addbtn.addEventListener("click",function(){
	topFunction()
	add1.style.display="block"
	add2.style.display="block"
})

cnbtn.addEventListener("click",function(){
	add1.style.display="none"
	add2.style.display="none"
	i1.style.borderLeft='solid 3px white'
	i2.style.borderLeft='none'
	i3.style.borderLeft='none'
	i4.style.borderLeft='none'
	i5.style.borderLeft='none'

	i1.style.color='white'
	i2.style.color='grey'
	i3.style.color='grey'
	i4.style.color='grey'
	i5.style.color='grey'

	archeive.style.display='none'
	content.style.display='block'
	trash.style.display='none'
	remainder.style.display='none'
})


function search(event)
{ 
    for(i=0;i<headings.length;i=i+1)
{
    if(headings[i].textContent.indexOf(event.target.value)<0)
	{
	    contents[i].style.display="none"
	}
	else{
	    contents[i].style.display="inline-block"
	}
}


} 
uploadBtn1.addEventListener('click', () => {
	event.preventDefault()
  fileInput1.click();

});
uploadBtn2.addEventListener('click', () => {
	event.preventDefault()
  fileInput2.click();
});

function func1(){
	i1.style.borderLeft='solid 3px white'
	i2.style.borderLeft='none'
	i3.style.borderLeft='none'
	i4.style.borderLeft='none'
	i5.style.borderLeft='none'

	i1.style.color='white'
	i2.style.color='grey'
	i3.style.color='grey'
	i4.style.color='grey'
	i5.style.color='grey'

	archeive.style.display='none'
	content.style.display='block'
	trash.style.display='none'
	remainder.style.display='none'
}
function func2(){
	i2.style.borderLeft='solid 3px white'
	i1.style.borderLeft='none'
	i3.style.borderLeft='none'
	i4.style.borderLeft='none'
	i5.style.borderLeft='none'

	i2.style.color='white'
	i1.style.color='grey'
	i3.style.color='grey'
	i4.style.color='grey'
	i5.style.color='grey'

	archeive.style.display='none'
	content.style.display='none'
	trash.style.display='none'
	remainder.style.display='block'

}
function func3(){
	i3.style.borderLeft='solid 3px white'
	i2.style.borderLeft='none'
	i1.style.borderLeft='none'
	i4.style.borderLeft='none'
	i5.style.borderLeft='none'

	i3.style.color='white'
	i1.style.color='grey'
	i2.style.color='grey'
	i4.style.color='grey'
	i5.style.color='grey'

	archeive.style.display='block'
	content.style.display='none'
	trash.style.display='none'
	remainder.style.display='none'
}
function func4(){
	i4.style.borderLeft='solid 3px red'
	i2.style.borderLeft='none'
	i3.style.borderLeft='none'
	i1.style.borderLeft='none'
	i5.style.borderLeft='none'

	i4.style.color='red'
	i1.style.color='grey'
	i2.style.color='grey'
	i3.style.color='grey'
	i5.style.color='grey'

	archeive.style.display='none'
	content.style.display='none'
	trash.style.display='block'
	remainder.style.display='none'
}
function func5(){
	i5.style.borderLeft='solid 3px white'
	i2.style.borderLeft='none'
	i3.style.borderLeft='none'
	i4.style.borderLeft='none'
	i1.style.borderLeft='none'

	i5.style.color='white'
	i4.style.color='grey'
	i1.style.color='grey'
	i2.style.color='grey'
	i3.style.color='grey'
	
}

function popup2(){
	userpopup.style.display='block'
	
	for (var n = 0;n<=300;n=n+1){
		userpopup.style.width= n +'px'
		
	}
	for (var o = 0;o<=400;o=o+1){
		userpopup.style.height= o +'px'
		
	}
	topFunction()
}

function popup2close(){
	userpopup.style.display='none'
	for (var n2 = 300;n2>=0;n2=n2-1){
		userpopup.style.width= n2 +'px'
		
	}
	for (var o2 = 400;o2>=0;o2=o2-1){
		userpopup.style.height= o2 +'px'
		
	}
}
// var some=querySelectorAll('.max')
function max(event) {
	topFunction()
	// console.log(event)
	maxwindow.style.display='block'
	maxpopup.style.display='flex'
	maxpophead.textContent=event.target.offsetParent.children[0].innerText
	maxpopp.textContent=event.target.offsetParent.children[1].innerText 
	
	// event.target.offsetParent.childNodes[7].children[1].defaultChecked='false'
	// console.log(event)
	
}
function min() {
	maxwindow.style.display='none'
	maxpopup.style.display='none'
}


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function dellselected(event) {
	
		if (event.target.checked ==true)
		{
			console.log(event.target.offsetParent.children[2].innerText)
		}
		
	
}


// save.addEventListener("click",function(){
// 		var div = document.createElement("div")
// 		div.setAttribute("class","text1")
		
// 		div.innerHTML=`<h2>${title.value}</h2>
// 		               <h5 >${author.value}</h5>
// 		               <p>${descript.value}</p>
// 		               <button onclick="delall(event)" class="callit" >Delete</button>
// 		               <button class="edith" >Edit</button>`
// 		content.append(div)
		
		
// 		add1.style.display="none"
// 	    add2.style.display="none"
		
// 	})