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
        console.log(response.data[0].profile);//name info;
        console.log(response.data[0].practices[0].phones[0].number);//phone info;
        console.log("new patients?" + response.data[0].practices[0].accepts_new_patients);//new patient query;
        console.log(response.data[0].practices[0].website);//website info;
        console.log(response.data[0].practices[0].visit_address);//physical address info;
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
