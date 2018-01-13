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
            $('.result').append(`<div class="card"><ul class='list'> <li><span class="topic">First Name:</span> ${resultArray[i][0]}</li>
            <li><span class="topic">Last Name:</span> ${resultArray[i][1]}</li>
            <li><span class="topic">Title:</span> ${resultArray[i][2]}</li>
            <li><span class="topic">Phone:</span> ${resultArray[i][3]}</li>
            <li><span class="topic">Website:</span> ${resultArray[i][4]}</li>
            <li><span class="topic">Address:</span> ${resultArray[i][5]}</li>
            <li><span class="topic">Accepting new patients?:</span> ${resultArray[i][6]}</li></ul></div>`
          );
        }
      }
    },
    function(badRequest){
      $('.result').append(badRequest);
    });
  });//form submit
});//docReady
