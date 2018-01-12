const apiKey = require('./../.env').apiKey;

export class DoctorSearch {
  constructor(condition, name) {
    this.condition = condition;
    this.name = name;
  } //constructor

  getDocResults(success, error) {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.name}&query=${this.condition}&location=45.5231%2C-122.6765%2C10&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log(this.url);
        console.log(response.data[0].profile);
        console.log("success");
        // success(response);
      },
      error: function() {
        console.log("error");
        // error(response);
      }
    });//$.ajax
  }//getDocResults
};//class DoctorSearch
