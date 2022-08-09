var axios = require("axios");

const api_key = "";

/**
 * refer to https://developers.google.com/maps/documentation/directions/get-directions#DirectionsRequests for more info
 */

// coordinates of start point appended with '%2C'
const startPoint = "6.872953175022746%2C79.89189584835482";

// coordinates of end point appended with '%2C'
const endPoint = "6.902482423043792%2C79.86118508324611";

var config = {
  method: "get",
  url: `https://maps.googleapis.com/maps/api/directions/json?origin=${startPoint}&destination=${endPoint}&key=${api_key}`,
  headers: {},
};

var polyline = require("google-polyline");

axios(config)
  .then(function (response) {
    var encodedString = response.data.routes[0].overview_polyline.points;
    var results = polyline.decode(encodedString);
    console.log(results);
  })
  .catch(function (error) {
    console.log(error);
  });

module.exports = {};
