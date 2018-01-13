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
        let responseArray = [];

        function defineURL(a){
          if (a === undefined) {
            return "none provided";
          } else {
            return a;
          }
        }

        for (var i = 0; i < response.data.length; i++) {
          let firstName = response.data[i].profile.first_name;//name info;
          let lastName = response.data[i].profile.last_name;//name info;
          let title = response.data[i].profile.title;//name info;
          let phone = response.data[i].practices[0].phones[0].number;//phone info;
          let newPatientQ = response.data[i].practices[0].accepts_new_patients;//new patient query;
          let website = response.data[i].practices[0].website;//website info;
          let street = response.data[i].practices[0].visit_address.street;//physical address info;
          let street2 = response.data[i].practices[0].visit_address.street2;//physical address info;
          let city = response.data[i].practices[0].visit_address.city;//physical address info;
          let state = response.data[i].practices[0].visit_address.state;//physical address info;
          let zip = response.data[i].practices[0].visit_address.zip;//physical address info;
          let newPatients;
          if (newPatientQ) {
            newPatients = "Yes";
          } else {
            newPatients = "No";
          }
          let thisURL = defineURL(website);
          const streetArray = [];
          if (street2 === undefined) {
            streetArray.push(street);
          } else {
            streetArray.push(`${street}, ${street2}`);
          }
          const addressArray = [`${streetArray}, ${city}, ${state}, ${zip}`];
          const newArray = [firstName, lastName, title, phone, thisURL, addressArray, newPatients];
          responseArray.push(newArray);
        }
        success(responseArray);
      },
      error: function(err) {
        const errMessage = `We're sorry, it appears we are having problems connecting to our database. Please try again.`;
        error(errMessage);
      }
    });//$.ajax
  }//getDocResults
}//class DoctorSearch
