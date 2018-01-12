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

        const firstName = response.data[0].profile.first_name;//name info;
        const lastName = response.data[0].profile.last_name;//name info;
        const title = response.data[0].profile.title;//name info;
        const phone = response.data[0].practices[0].phones[0].number;//phone info;
        const newPatientQ = response.data[0].practices[0].accepts_new_patients;//new patient query;
        const website = response.data[0].practices[0].website;//website info;
        const street = response.data[0].practices[0].visit_address.street;//physical address info;
        const street2 = response.data[0].practices[0].visit_address.street2;//physical address info;
        const city = response.data[0].practices[0].visit_address.city;//physical address info;
        const state = response.data[0].practices[0].visit_address.state;//physical address info;
        const zip = response.data[0].practices[0].visit_address.zip;//physical address info;
        let newPatients;
        if (newPatientQ) {
            newPatients = "Yes";
        } else {
            newPatients = "No";
        }
        function defineURL(a){
          if (a === undefined) {
            return "none provided";
          } else {
            return a;
          }
        }
        let thisURL = defineURL(website);
        console.log(newPatients, thisURL);
        const addressArray = [street, street2, city, state, zip];
        const newArray = [firstName, lastName, title, phone, thisURL, addressArray, newPatients];
        console.log(newArray);
        success(newArray);
      },
      error: function(err) {
        const errMessage = `We're sorry, it appears we are having problems connecting to our database. Please try again.`;
        error(errMessage);
      }
    });//$.ajax
  }//getDocResults
}//class DoctorSearch
