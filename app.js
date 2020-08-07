
let projects = [
    {
        title: "Credit Card Default Prediction and Analysis",
        description : "Analyzing clients dataset and predicting whether the client is defaulted or not based on various personal and economic attributes. Various classifiers - Random Forest, Support Vector Machine, Logistic Regression, Naive Bayes, K-nearest neighbours were trained to analyse how well they perform and was performed using libraries - pandas, NumPy, matplotlib, scikit learn",
        image: "./images/credit.png"
    },
    {
        title: "Sentiment Analysis",
        description : "Analysing IMDb movie review data and predicting whether the review is positive or negative by using logistic regression classifier estimator for scikit learn for document classification",
        image: "./images/sentiment.jpg"
    },
    {
        title: "Recurrent Neural Network",
        description : "Created, trained and evaluated a Recurrent Neural Network using Keras with TensorFlow where model infer the meaning of various characters from a sequence of text input (string data showing the addition of two numbers) and then learn addition from the data",
        image: "./images/rnn1.png"
    },
    {
        title: "Image Compression",
        description : "Compressing high-quality image data by implementing -means clustering unsupervised learning algorithm using the scikit learn module and python along with interactive GUI components for interactive controls",
        image: "./images/ic5.jpg"
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


let blog = [
    {
        title: "Blog Title",
        description : "Descprition .......................",
        image: "./images/blog2.jpg"
    },
    {
        title: "Blog Title",
        description : "Descprition .......................",
        image: "./images/blog2.jpg"
    },
    {
        title: "Blog Title",
        description : "Descprition .......................",
        image: "./images/blog2.jpg"
    }
]
for(let i = 0; i< blog.length; i++) {
    let parentDiv = document.createElement("div");
    parentDiv.setAttribute("class", "project-item");

    let childDiv = document.createElement("div");
    childDiv.setAttribute("class", "project-info");
    parentDiv.appendChild(childDiv);

    let heading1 = document.createElement("h1");
    heading1.innerText = blog[i].title;
    childDiv.appendChild(heading1);

    let para = document.createElement("p");
    para.innerText = blog[i].description;
    childDiv.appendChild(para);
   

    let imagediv = document.createElement("div");
    imagediv.setAttribute("class","project-img");
    parentDiv.appendChild(imagediv);

    let image = document.createElement("img");
    image.setAttribute("src", blog[i].image);
    image.setAttribute("alt","img")
    imagediv.appendChild(image);

    document.getElementById("all-blogs").appendChild(parentDiv);
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
        content : "Faridabad",
        content1 : "Delhi NCR",
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