let button = document.getElementById("search");
var lat,long;
button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
     lat = position.coords.latitude;
     long = position.coords.longitude;


    let output=''
    fetch("https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=geometry:a4cf2dd6ee2d5cd0b9a876c6da2e1640&bias=proximity:67.0265018737081,24.855135150000002&limit=20&apiKey=5de8ece3518b420e81c5266341465736")
  .then(response => response.json())
  .then(result =>

    result.features.forEach(element => {

        output+=`<tr>
            <td><a href=#>${element.properties.name}</a></td>
            <td>${element.properties.street}</td>
            <td>${element.properties.city}</td>
            <td>${element.properties.distance}</td>
          </tr>`
          document.getElementById('table_body').innerHTML=output

  }))
  .catch(error => console.log('error', error));



  });
});

module.exports = output;
