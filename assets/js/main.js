scrollToElementId(getAnchor());

/*setTimeout(function(){
        let element = document.getElementById('animated-thumbnails');
        console.log(element);
        lightGallery(document.getElementById('animated-thumbnails'), {
            thumbnail:true,
            download:false
        });
    }, 3000);*/

lightGallery(document.getElementById('animated-thumbnails'), {
    thumbnail:true,
    download:false
});

document.addEventListener('click', function (event) {
    // click on a header link
    if( event.target.matches('.header a') ) {
      // Don't follow the link
      event.preventDefault();

      var id = event.target.attributes.href.value.slice(1);
      scrollToElementId(id);
    }
    
    // click on a contact link
    if( event.target.matches('a.contact-link') ) {
      // Don't follow the link
      event.preventDefault();

      var id = event.target.attributes.href.value.slice(1);
      scrollToElementId(id);
    }

    // other click to manage ...
    
    
    

}, false);

/**************
*  Functions  *
**************/
function scrollToElementId(elementId) {
  var element = document.getElementById(elementId);
  if(element) element.scrollIntoView({behavior: "smooth"});
}

function getAnchor() {
  var currentUrl = document.URL,
  urlParts = currentUrl.split('#');
  return (urlParts.length > 1) ? urlParts[1] : null;
}
