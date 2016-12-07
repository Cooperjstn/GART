var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}

var addGalleryForm = function(){
   var values = [
      {attr: 'galleryName', labelName:"Gallery"},
      {attr: 'artist' , labelName: "Artist"},
      {attr: 'genre', labelName: "Genre"},
      {attr: 'time', labelName: "Date and Time"}
   ]

   var galleryStr = '';
   galleryStr += '<div class="row">'
   galleryStr +=    '<form class="col-sm-offset-3 col-sm-6 galleryListB" id="new-gallery-form">'
   galleryStr +=   '<a href="#"><i class="fa fa-home fa-3x" aria-hidden="true"></i></a>'
   galleryStr +=     '<h2 class="">Submit New Gallery</h2>'

   forEach(values, function(field){
    //console.log(field)
      galleryStr +=     '<div class="form-group">'
      galleryStr +=       ' <label for="' + field.column + '">' + field.labelName + '</label>'
      galleryStr +=        '<input type="text" class="form-control" name="'+field.attr+'">'
      galleryStr +=      '</div>'
   })

   galleryStr +=      '<button type="submit" class="btn btn-default ">Submit Gallery</button>'
   galleryStr +=    '</form>'
   galleryStr += '</div>'

   document.querySelector('#app-container').innerHTML = galleryStr
}
