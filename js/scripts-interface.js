import { DoctorSearch } from './../js/scripts.js';


$(document).ready(function(){
  $('form#search-form').submit(function(event){
    event.preventDefault();
    $('.result').empty();
    const condition = $('#condition').val();
    const name = $('#name').val();
    console.log(condition, name);
    const thisDocSearch = new DoctorSearch(condition, name);


    thisDocSearch.getDocResults(function(resultArray){
        if (resultArray.length === 0) {
          $('.result').text('Your search terms returned no results. Please try a different set of search terms');
        } else {
          for (var i = 0; i < resultArray.length; i++) {
            $('.result').append(`<ul class='list'> <li>First Name: ${resultArray[i][0]}</li>
            <li>Last Name: ${resultArray[i][1]}</li>
            <li>Title: ${resultArray[i][2]}</li>
            <li>Phone: ${resultArray[i][3]}</li>
            <li>Website: ${resultArray[i][4]}</li>
            <li>Address: ${resultArray[i][5]}</li>
            <li>Accepting new patients?: ${resultArray[i][6]}</li></ul>`
          );

        }
      }
    },
    function(badRequest){
      $('.result').append(badRequest);
    });


  });//form submit
});//docReady
