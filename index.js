const generalBtn=document.getElementById("general");
const financeBtn=document.getElementById("finance");
const buisnessBtn=document.getElementById("buisness");
const entertainmentBtn=document.getElementById("entertainment");
const gamingBtn=document.getElementById("gaming");
const sportsBtn=document.getElementById("sports");
const technologyBtn=document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newstype=document.getElementById("newstype");
const newsdetails=document.getElementById("newsdetails");

var newsdata=[];

generalBtn.addEventListener("click",function(){
    fetchgeneralnews();

});
financeBtn.addEventListener("click",function(){
    fetchfinancenews()
});
buisnessBtn.addEventListener("click",function(){
    fetchbusinessnews()
});
entertainmentBtn.addEventListener("click",function(){
    fetchentertainmentnews()
});
gamingBtn.addEventListener("click",function(){
    fetchgamingnews()
});
sportsBtn.addEventListener("click",function(){
    fetchsportsnews()
});
technologyBtn.addEventListener("click",function(){
    fetchtechnologynews()
});


const fetchgeneralnews=async()=>{
    const response=await fetch("https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=news",
    {
        method: "GET",
        headers: {
            "x-api-key": "5nNsWHQn7UhZ7lFc-Fl2-0_WqoccT73QCNAAww60ah8",
        },
    });
    newsdata=[];
    if(response.status>=200 && response.status<300){
           const a=await response.json();
           console.log(a);
           newsdata=a.articles;

    }else{
        console.log(response.status,response.statustext);
    }

    displaynews();

}
const fetchbusinessnews=async()=>{
    const response=await fetch("https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=business",
    {
        method: "GET",
        headers: {
            "x-api-key": "5nNsWHQn7UhZ7lFc-Fl2-0_WqoccT73QCNAAww60ah8",
        },
    });
    newsdata=[];
    if(response.status>=200 && response.status<300){
           const a=await response.json();
           newsdata=a.articles;
    }else{
        console.log(response.status,response.statustext);
    }

    displaynews();

}

const fetchsportsnews=async()=>{
    const response=await fetch( "https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=sport",
    {
        method: "GET",
        headers: {
            "x-api-key": "5nNsWHQn7UhZ7lFc-Fl2-0_WqoccT73QCNAAww60ah8",
        },
    });
    newsdata=[];
    if(response.status>=200 && response.status<300){
           const a=await response.json();
           newsdata=a.articles;
    }else{
        console.log(response.status,response.statustext);
    }

    displaynews();

}
const fetchfinancenews=async()=>{
    const response=await fetch("https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=finance",
    {
        method: "GET",
        headers: {
            "x-api-key": "5nNsWHQn7UhZ7lFc-Fl2-0_WqoccT73QCNAAww60ah8",
        },
    });
    newsdata=[];
    if(response.status>=200 && response.status<300){
           const a=await response.json();
           newsdata=a.articles;
    }else{
        console.log(response.status,response.statustext);
    }

    displaynews();

}
const fetchgamingnews=async()=>{
    const response=await fetch("https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=gaming",
    {
        method: "GET",
        headers: {
            "x-api-key": "5nNsWHQn7UhZ7lFc-Fl2-0_WqoccT73QCNAAww60ah8",
        },
    });
    newsdata=[];
    if(response.status>=200 && response.status<300){
           const a=await response.json();
           newsdata=a.articles;
    }else{
        console.log(response.status,response.statustext);
    }

    displaynews();

}
const fetchtechnologynews=async()=>{
    const response=await fetch(
		"https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=tech",
		{
			method: "GET",
			headers: {
				"x-api-key": "5nNsWHQn7UhZ7lFc-Fl2-0_WqoccT73QCNAAww60ah8",
			},
		}
	)
    newsdata=[];
    if(response.status>=200 && response.status<300){
           const a=await response.json();
           newsdata=a.articles;
    }else{
        console.log(response.status,response.statustext);
    }

    displaynews();

}
const fetchentertainmentnews=async()=>{
    const response=await fetch("https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=entertainment",
    {
        method: "GET",
        headers: {
            "x-api-key": "5nNsWHQn7UhZ7lFc-Fl2-0_WqoccT73QCNAAww60ah8",
        },
    });
    newsdata=[];
    if(response.status>=200 && response.status<300){
           const a=await response.json();
           newsdata=a.articles;
    }else{
        console.log(response.status,response.statustext);
    }

    displaynews();

}


function displaynews(){

    newsdetails.innerHTML="";
   
    newsdata.forEach(news =>{

       

        var col=document.createElement("div");
        col.className="col col-lg-4 col-sm-12 col-md-6 col-11 ";

        var card=document.createElement("div");
        card.className=" p-2 card";

        var image = document.createElement('img');
        image.className="img";
        image.setAttribute("width","100%");
        image.src=news.media;

        var cardbody=document.createElement("div")

        var newsheading=document.createElement("h4")
        newsheading.className="news-title"
        newsheading.innerHTML=news.title;


        var date=news.published_date.split("T");
        var dateheading=document.createElement("h5");
        dateheading.className="text-primary";
        dateheading.innerHTML=date[0];

        var body=document.createElement("p");
        body.className="text";
        body.innerHTML=news.summary;

        var  link=document.createElement('a')
        link.className="btn btn-dark";
        link.setAttribute("target","_blank");
        link.href=news.link;
        link.innerHTML="read more";


        cardbody.appendChild(dateheading);
        cardbody.appendChild(newsheading);
        cardbody.appendChild(body);

        card.appendChild(image);
        card.appendChild(cardbody);

        col.appendChild(card);

        newsdetails.appendChild(col);



    



        


    })
}



if ("serviceWorker" in navigator ){
    navigator.serviceWorker.register("./sw.js").then(registration =>{
        console.log("service worker registered!");
        console.log(registration);
    }).catch(error =>{
        console.log("service worker registeration failed");
        console.log(error);

    });
}