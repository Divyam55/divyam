
let projects = [
    {
        title: "Project Name",
        description : "Descprition .......................",
        image: "./images/img-1.png"
    },
    {
        title: "Project Name",
        description : "Descprition .......................",
        image: "./images/img-1.png"
    },
    {
        title: "Project Name",
        description : "Descprition .......................",
        image: "./images/img-1.png"
    }
]
for(let i = 0; i< projects.length; i++) {
    let parentDiv = document.createElement("div");
    parentDiv.setAttribute("class", "project-item");

    let childDiv = document.createElement("div");
    childDiv.setAttribute("class", "project-info");
    parentDiv.appendChild(childDiv);

    let heading1 = document.createElement("h1");
    heading1.innerText = projects[i].title;
    childDiv.appendChild(heading1);

    let para = document.createElement("p");
    para.innerText = projects[i].description;
    childDiv.appendChild(para);
   

    let imagediv = document.createElement("div");
    imagediv.setAttribute("class","project-img");
    parentDiv.appendChild(imagediv);

    let image = document.createElement("img");
    image.setAttribute("src", projects[i].image);
    image.setAttribute("alt","img")
    imagediv.appendChild(image);

    document.getElementById("all-projects").appendChild(parentDiv);
}




let contactme = [
    {
        icon : "https://img.icons8.com/bubbles/100/000000/phone.png",
        title : "Phone",
        content : "9999338161",
        content1 : "",
        content2 : "",
    },
    {
        icon : "https://img.icons8.com/bubbles/100/000000/new-post.png",
        title : "Email",
        content: "",
        content1 : "vermadivya555@gmail.com",
        content2 : "divyam@ce.iitr.ac.in",
    },
    {
        icon : "https://img.icons8.com/bubbles/100/000000/map-marker.png",
        title : "Address",
        content : "FBD",
        content1 : "",
        content2 : "",
    }
]

for(let i=0; i<contactme.length; i++){
    let parentDiv = document.createElement("div");
    parentDiv.setAttribute("class","contact-item");

    let contacticon = document.createElement("div");
    contacticon.setAttribute("class","icon");
    parentDiv.appendChild(contacticon);

    let iconimage = document.createElement("img");
    iconimage.setAttribute("src",contactme[i].icon);
    contacticon.appendChild(iconimage);

    let contactinfo = document.createElement("div");
    contactinfo.setAttribute("class","contact-info");
    parentDiv.appendChild(contactinfo);

    let titles = document.createElement("h1")
    titles.innerText = contactme[i].title;
    contactinfo.appendChild(titles);

    let contents = document.createElement("p")
    contents.innerText = contactme[i].content;
    contactinfo.appendChild(contents);

    let contents1 = document.createElement("p")
    contents1.innerText = contactme[i].content1;
    contactinfo.appendChild(contents1);

    let contents2 = document.createElement("p")
    contents2.innerText = contactme[i].content2;
    contactinfo.appendChild(contents2);

    document.getElementById("contacTS").appendChild(parentDiv);
}














const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});





document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 150) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});