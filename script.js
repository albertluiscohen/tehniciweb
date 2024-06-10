// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    if (window.innerWidth >= 992) {
      document.getElementById("navbar0").style.marginTop = "-50px";
      document.getElementById("navbar").style.marginTop = "-45px";
      // document.getElementById("navbar").style.padding = "30px 10px";
      // document.getElementById("logo").style.fontSize = "25px";
      // document.getElementById("logo119").style.height = "50px";
    }
  } else {
    document.getElementById("navbar0").style.marginTop = "0px";
    document.getElementById("navbar").style.marginTop = "0px";
    // document.getElementById("navbar").style.padding = "50px 10px";
    // document.getElementById("logo").style.fontSize = "35px";
    // document.getElementById("logo119").style.height = "75px";
  }
}
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function getRequest(url) {
	let innerHtml = document.getElementById('inner-html');

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.responseType = "html";
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      //console.log(xhr.response);
	  innerHtml.innerHTML = xhr.response;
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };
}


document.addEventListener("DOMContentLoaded", () => {
  //getRequest("https://scoalagimnaziala119.ro/?page_id=24");
});