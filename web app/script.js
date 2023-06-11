var bookmark = document.querySelector("#bookmark");

var large = document.querySelector("#large");

var tv = document.querySelector("#tv");

var film = document.querySelector("#film");

var trend = document.querySelector(".trend");

var rec = document.querySelector(".rec");



var recoimg = document.getElementsByClassName("recoimg");

var productRows = document.querySelector(".ou");

var ato = document.querySelector(".ato");


var teev = document.getElementsByClassName("tv");


var lol = document.querySelector(".lol");






var lola = document.querySelector(".lola");


function myCar(hand){

    trend.style.display ="none";

    
    if(hand == "film"){
       
        rec.style.display ="none";
        lol.style.display ="block";

        for(let i = 0; i < recoimg.length; i++){
            recoimg[i].style.display ="none";
         }

 ato.style.display="none";

productRows.style.display="none";


    }



    if(hand == "bookmark"){
        
        lol.style.display ="none";
        lola.style.display ="none";

        for(let i = 0; i < recoimg.length; i++){
           recoimg[i].style.display ="none";
        }

        rec.style.display ="block";
       rec.innerHTML ="Bookmaked";
       

       productRows.style.display="grid";
ato.style.display="grid";
    }


    if(hand == "tv"){
        
        rec.style.display ="none";
        lol.style.display ="none";
        lola.style.display ="block";

        for(let i = 0; i < recoimg.length; i++){
            recoimg[i].style.display ="none";
         }



 ato.style.display="none";

productRows.style.display="none";

    }


}


ato.style.display="none";

productRows.style.display="none";

var mar = document.getElementsByClassName("mar");



for(let i = 0; i < mar.length; i++){
    mar[i].addEventListener("click", function(e){
        
        button = e.currentTarget;
        var men = button.parentElement.parentElement.parentElement;

        
       
        var imag = men.getElementsByClassName("ima")[0].src;
        var title = men.getElementsByClassName("title")[0].innerHTML;
        var spa1 = men.getElementsByClassName("spa1")[0].innerHTML;
        var spa2 = men.getElementsByClassName("spa2")[0].innerHTML;
        var dat = men.getElementsByClassName("dat")[0].innerHTML;
        var genre = men.getElementsByClassName("genre")[0].innerHTML;
        var type = men.getElementsByClassName("type")[0].innerHTML;
        var movieic = men.getElementsByClassName("movieic").i;
       
       

       
        addItemToCart(imag, title, spa1, spa2, genre, type, dat, movieic);

});
}


function addItemToCart (imag, title, spa1, spa2, genre, type, dat, movieic) {
    var productRow = document.createElement('div');
    productRow.classList.add('untouch');
    
    var ime = document.getElementsByClassName('ime');


    for (var i = 0; i < ime.length; i++){
        if (ime[i].src == imag){
          alert ('This item has already been bookmaked')
          return;
        }
      }


    var cartRowItems  =  `
    <div class="untouch">
<div class="beyondo">
<div class="beyond">
<img src="${imag}" class="ime">
                                  
    <div class="mark">
        <i class="fa fa-bookmark  mar"></i>
    </div>

    

    <div class="yu">
    <div class="ty">
        <i class="fa fa-play-circle"></i>
        <h3>Play</h3>
    </div>
    
</div>
</div>

    <div class="ya">
    <div class="de">
        <p class="dat">${dat}</p>
        <span class="spa1">${spa1}</span>
        <i class="fa fa-film  movieic"></i>
        <p class="genre">${genre}</p>
        <span class="spa2">${spa2}</span>
        <p class="type">${type}</p>
    </div>
   
    <h3 class="title" >${title}</h3>
</div>
            
        
</div>
        
    
      </div>`






var productRows = document.querySelector(".ou");



productRow.innerHTML = cartRowItems ;
    productRows.append(productRow);

}












var max = document.getElementsByClassName("boo");

for(let i = 0; i < max.length; i++){
    max[i].addEventListener("click", function(e){
        
        button = e.currentTarget;
        var men = button.parentElement.parentElement.parentElement;

        
       
        var ig = men.getElementsByClassName("po")[0].src;
        var tit = men.getElementsByClassName("tit")[0].innerHTML;
        var te = men.getElementsByClassName("te")[0].innerHTML;
        var lo = men.getElementsByClassName("lo")[0].innerHTML;
        var mo = men.getElementsByClassName("mo")[0].innerHTML;
        var seri = men.getElementsByClassName("seri")[0].innerHTML;
        
       
       

       
        addItem(ig, tit, te, lo, mo, seri);

});
}


function addItem(ig,  tit, te, lo, mo, seri) {
    var productRow = document.createElement('div');
    productRow.classList.add('unto');
    
    var pa = document.getElementsByClassName('pa');


    for (var i = 0; i < pa.length; i++){
        if (pa[i].src == ig){
          alert ('This item has already been bookmaked')
          return;
        }
      }



    var cartRow =  `
    <div class="unto">
    
           <div class="moon">
    <img src="${ig}"  class="pa">

    <div class="overlay">
        <div class="bo">
            <i class="fa fa-bookmark  boo"></i>
        </div>
       

        <div class="pg">
            <div class="des">
                <p class="lo">${lo}</p>
                <span class="te">${te}</span>
                <i class="fa fa-tv"></i>
                <p class="mo">${mo}</p>
                <span class="te">${te}</span>
                <p class="seri">${seri}</p>
            </div>
           
            <h3 class="tit">${tit}</h3>
        </div>
        
    </div>

    
    <div class="yu">
        <div class="ty">
            <i class="fa fa-play-circle"></i>
            <h3>Play</h3>
        </div>
        
    </div>
   </div>
  
      </div>`






var product= document.querySelector(".ato");



productRow.innerHTML = cartRow ;
    product.append(productRow);

}




/*
function myTok(){

    var t, u, a, dor, i;

     dor = document.querySelector(".inp");
     t = dor.value.toLowerCase();
     u = document.querySelector(".recoimg");
     a = u.getElementsByTagName("div");

     for(i= 0; i < a.length; i++){
         txtValue = a[i].src + a[i].innerHTML + a[i].textContent;

         if(txtValue.toLowerCase().indexOf(t) > -1) {
            a[i].style.display = "";
         } else {
            a[i].style.display = "none";
         }
     }
     trend.style.display ="none";

   }*/




   

/*
   var sea = document.querySelector("#sea");

   sea.addEventListener("click", function(){

    let currentvalue = document.querySelector(".inp").value.toLowerCase();
    let title = document.querySelectorAll("h3.title");
    title.forEach(title =>{
        if(title.textContent.toLowerCase().includes(currentvalue)){
            title.parentNode.parentNode.style.display ="block";
        } else {
            title.parentNode.parentNode.style.display = "none";
        }
    });
   });
*/


   dor = document.querySelector(".inp");

   dor.addEventListener("keyup", e =>{
    let currentvalue = e.target.value.toLowerCase();
    let title = document.querySelectorAll("h3.title");
    title.forEach(title =>{
        if(title.textContent.toLowerCase().includes(currentvalue)){
            title.parentNode.parentNode.style.display ="block";
        } else {
            title.parentNode.parentNode.style.display = "none";
        }
    });
    trend.style.display ="none";
   });
  

   
var log = document.querySelector(".img");

var bota = document.querySelector(".bota");
log.onclick = function(){
bota.classList.toggle("nog");
}

