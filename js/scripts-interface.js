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
    console.log(thisDocSearch.getDocResults());

    thisDocSearch.getDocResults(function(resultArray){
      $('.result').append(`<ul> <li>First Name: ${resultArray[0]}</li>
                              <li>Last Name: ${resultArray[1]}</li>
                              <li>Title: ${resultArray[2]}</li>
                              <li>Phone: ${resultArray[3]}</li>
                              <li>Website: ${resultArray[4]}</li>
                              <li>Address: ${resultArray[5]}</li>
                              <li>Accepting new patients?: ${resultArray[6]}</li></ul>`
      );
    },
    function(badRequest){
      alert(badRequest);
    });


  });//form submit
});//docReady













// search name + all fields https://api.betterdoctor.com/2016-03-01/doctors?name=susan&query=rash&location=45.5231%2C-122.6765%2C10&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=519381c5c5159113601c4a5d11b1cc34
//search all fields https://api.betterdoctor.com/2016-03-01/doctors?query=rash&location=45.5231%2C-122.6765%2C10&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=519381c5c5159113601c4a5d11b1cc34
//search name https://api.betterdoctor.com/2016-03-01/doctors?name=jane%20ware&location=45.5231%2C-122.6765%2C10&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=519381c5c5159113601c4a5d11b1cc34
