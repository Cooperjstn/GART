console.log('wired up!')
console.log($)
console.log(_)
console.log(Backbone)

var idToHash = function(evt){
   window.location.hash = evt.currentTarget.dataset.route
}

var inputRouter = function(){
   var currentHash = window.location.hash.slice(1)

   if (currentHash.length === 0){
      mainDisplayContainer()
      document.querySelector('.gallery').addEventListener('click', idToHash )
      document.querySelector('.artist').addEventListener('click', idToHash )
      document.querySelector('.createShow').addEventListener('click', idToHash )
      document.querySelector('.showGalleries').addEventListener('click',idToHash)
      return;
   }


   switch(currentHash){

      case "login":
         showAuthPage();
         document.querySelector('#auth-form').addEventListener('submit', createUser)
         break;

      case "gallery-form":
         showGallery();
         break;

      case "artist-form":
         showArtist();
         break;

      case "create-form":
         addGalleryForm()
         document.querySelector('#new-gallery-form').addEventListener('submit', function(evt){
           evt.preventDefault()
               var createFormEl = evt.target

               var dataObj = {
                  galleryName: createFormEl.galleryName.value,
                  artist: createFormEl.artist.value,
                  genre: createFormEl.genre.value,
                  time: createFormEl.time.value
                       }
              console.log(dataObj);

              var reqConfig = {
                 url: '/gallery',
                 data: JSON.stringify(dataObj),
                 headers: {
                    "Content-Type": 'application/json'
                 }
              }

         $.post(reqConfig).then(function(serverRes){
            console.log("hello")
            console.log(serverRes)
            mainDisplayContainer()
       })
    })

         break;

       case "show-form":
       $.getJSON('/gallery').then(function(serverRes){
        console.log(serverRes)
        showGalleriesTable(serverRes)
     })
         break;

         default:

     document.querySelector('#app-container').innerHTML = "<h1 class='bg-danger'>PAGE NOT FOUND</h1>";
}
}

var createUser = function(evt){
    evt.preventDefault();
   // console.log("email", evt.target.email.value)
   // console.log("password", evt.target.password.value)
   var dataForServer = {
      email: evt.target.email.value,
      password: evt.target.password.value
   }

   console.log(dataForServer)

   var reqConfig2 = {
      url: '/login',
      data: JSON.stringify(dataForServer),
      headers: {
         "Content-Type": 'application/json'
      }
   }
   $.post(reqConfig2).then(function(serverRes){
      console.log('Success !!!!')
      window.location.hash = '';
      mainDisplayContainer()
   })

}

inputRouter()


window.addEventListener('hashchange', inputRouter)
