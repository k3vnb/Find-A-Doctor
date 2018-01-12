import { DoctorSearch } from './../js/scripts.js';


$(document).ready(function(){
  $('#condition').val("skin");
  $('#name').val('susan');
  $('form#search-form').submit(function(event){
    event.preventDefault();
    $('.result').empty();
    const condition = $('#condition').val();
    const name = $('#name').val();
    console.log(condition, name);
    const thisDocSearch = new DoctorSearch(condition, name);


    thisDocSearch.getDocResults(function(resultArray){
      $('.result').append(`<ul class='list'> <li>First Name: ${resultArray[0]}</li>
                              <li>Last Name: ${resultArray[1]}</li>
                              <li>Title: ${resultArray[2]}</li>
                              <li>Phone: ${resultArray[3]}</li>
                              <li>Website: ${resultArray[4]}</li>
                              <li>Address: ${resultArray[5]}</li>
                              <li>Accepting new patients?: ${resultArray[6]}</li></ul>`
      );
    },
    function(badRequest){
      $('.result').append(badRequest);
    });


  });//form submit
});//docReady
