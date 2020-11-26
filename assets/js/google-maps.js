function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 24.585830, lng: 73.694540};

    var map = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Frazor Office' // Title Location
    });
}