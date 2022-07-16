//profile effects
function show() {
	document.querySelector(".name").style.visibility ="visible";

}
function hide(){
	document.querySelector(".name").style.visibility = "hidden";
}

//hiding horizontal nav bar
function navbars() {
	if(document.querySelector(".temp1").innerHTML !== " "){
		document.querySelector(".temp1").innerHTML = " ";
		
		//displaying vertical bar
		document.querySelector(".temp2").innerHTML = `
		<div class="vnav">
		<ul>
			<li><a href=""><img src="home-icon.png" class="icon"></a></li>
			<li><a href="login_signup.html" target=""><img src="exam-icon.jpg" class="icon"></a></li>
			<li><a href="#"><img src="branches-icon.jpg" id="img" class="icon icon3"></a>
			<div class = "dropside">
				<ul>
					<li><a>Red Team
						<div class = "dropside-sub">
							<ul>
								<li><a>Pentesters</a></li>
								<li><a>Security Analytics</a></li>
							</ul>
						</div>
					</a></li>
					<li><a>Blue Team
						<div class = "dropside-sub1">
							<ul>
								<li><a>Defenders</a></li>
								<li><a>Reporters</a></li>
							</ul>
						</div>
					</a></li>
					<li><a>Incident Response Team</a></li>
					<li><a>Consultant Team</a></li>
				</ul>
			</div>
			</a></li>
			<li><a><img src="contact-icon.png" class="icon"></a></li>
		</ul>
		</div>`

		document.querySelector(".vnav").style="height:536px;";//566
		document.querySelector(".right").style="width:25%;";
		// document.querySelector(".right").style = "height:536px"

	}
	else{
		document.querySelector(".temp1").innerHTML = 
		`
		<div class="navigation">
		<ul>
			<li><a href=""><img src="home-icon.png" class="icon"></a></li>
			<li><a href="login_signup.html" target=""><img src="exam-icon.jpg" class="icon"></a></li>
			<li><a href="#"><img src="branches-icon.jpg" id="img" class="icon icon3"></a>
			<div class = "dropdown">
				<ul>
					<li><a>Red Team
						<div class = "dropdown-sub">
							<ul>
								<li><a>Pentesters</a></li>
								<li><a>Security Analytics</a></li>
							</ul>
						</div>
					</a></li>
					<li><a>Blue Team
						<div class = "dropdown-sub1">
							<ul>
								<li><a>Defenders</a></li>
								<li><a>Reporters</a></li>
							</ul>
						</div>
					</a></li>
					<li><a>Incident Response Team</a></li>
					<li><a>Consultant Team</a></li>
				</ul>
			</div>
			</a></li>
			<li><a><img src="contact-icon.png" class="icon"></a></li>
		</ul>
	</div>`;
		//hiding vertical bar
		document.querySelector(".temp2").innerHTML = " ";
		document.querySelector(".right").style="width:30%;";
		// document.querySelector(".right").style = "height:500px"
	}

/*
	if(document.querySelector(".navigation").style.visibility === "hidden"){
		document.querySelector(".navigation").style.visibility = "visible";
		//displaying vertical bar
	}
	else{
		document.querySelector(".navigation").style.visibility = "hidden";
		//hiding vertical bar
	}
*/
}

// slide
var time = 3000;
var i = 0;
var images = ["img1.jpg","img2.jpg","img3.jpg"];
function slide(){
	document.sliding.src=images[i];

	if(i< images.length-1)
	{
		i++;
	}
	else{
			i=0;
	}

	setTimeout("slide()",time);
}

window.onload = slide();