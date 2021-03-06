import React from 'react';
import Footer from '../modules/footer.js'
import $ from 'jquery'

$(document).ready(function (){

  // create a LatLng object containing the coordinate for the center of the map
  var latlng = new google.maps.LatLng(-33.86455, 151.209);

  // prepare the map properties
  var options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  // initialize the map object
  var map = new google.maps.Map(document.getElementById('google_map'), options);

  // add Marker
  let markerShape = "images/joshLogo.svg"
  var markerLogo = {
    path: "M74.978,37.5V100h18.75V37.5H74.978z M89.561,45.834h-6.25V50h6.25v4.167h-3.125v4.167h3.125V62.5h-6.25  v4.167h6.25v4.166h-3.125V75h3.125v4.167h-6.25v4.166h6.25V87.5h-3.125v4.166h3.125v4.167H79.145V41.667h10.416V45.834z M41.111,48.539c-5.442-7.942-12.465-9.623-17.427-9.623c-3.235,0-5.497,0.741-5.593,0.773  c-0.307,0.102-0.586,0.276-0.814,0.505l-1.473,1.473h-1.221c0-1.151-0.932-2.083-2.083-2.083H8.333  c-1.151,0-2.083,0.932-2.083,2.083v6.25C6.25,49.068,7.182,50,8.333,50H12.5c1.151,0,2.083-0.932,2.083-2.083h2.083v14.245  l-1.975,5.929c-0.071,0.212-0.108,0.436-0.108,0.659v29.166c0,1.152,0.932,2.084,2.083,2.084H25c1.151,0,2.083-0.932,2.083-2.084  V68.75c0-0.224-0.037-0.447-0.108-0.659L25,62.162V49.149c0.903-0.386,1.961-0.581,3.158-0.581c4.905,0,10.302,3.186,10.355,3.218  c0.325,0.195,0.684,0.289,1.043,0.293c1.17,0.094,2.15-0.907,2.15-2.079C41.707,49.431,41.479,48.914,41.111,48.539z M58.26,60.588c1.029-1.677,1.978-3.805,1.994-6.092c0.014-2.233-0.86-4.301-2.531-5.969  c-0.539-0.541-1.2-1.082-1.904-1.652c-2.256-1.822-3.735-3.174-3.735-5.208c0-2.689,2.569-5.867,3.558-6.864  c0.81-0.813,0.808-2.132-0.006-2.946c-0.816-0.81-2.13-0.81-2.942,0.004c-0.488,0.488-4.777,4.916-4.777,9.807  c0,4.175,3.052,6.645,5.281,8.447c0.58,0.472,1.133,0.911,1.579,1.359c0.887,0.887,1.314,1.863,1.31,2.982  c-0.012,2.254-1.737,4.703-2.838,5.969c-7.212,0.11-13.666,1.624-13.666,10.408v8.334c0,10.241,5.455,20.833,14.583,20.833  c9.473,0,14.583-10.734,14.583-20.833v-8.334C68.75,63.367,64.088,61.153,58.26,60.588z M64.583,70.833v2.084H56.25v-8.289  C63.303,64.93,64.583,66.874,64.583,70.833z M52.083,64.628v8.289H43.75v-2.084C43.75,66.874,45.029,64.93,52.083,64.628z   M54.167,95.833c-6.433,0-10.417-8.65-10.417-16.666v-2.084h20.833v2.084C64.583,86.088,61.352,95.833,54.167,95.833z",
    fillColor:"#2c3e50",
    fillOpacity: 0.8,
    scale: .5,
    strokeColor: '#7f8c8d'
  };
  var marker = new google.maps.Marker({
    position: latlng, 
    map: map, 
    icon:markerLogo
  });

  // add listener for a click on the pin
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });

  // add information window  
  var infowindow = new google.maps.InfoWindow({
    content:  '<div className="info"><strong>This is my company</strong><br><br>My company address is here<br> 32846 Sydney</div>'
  });  
});



class Contact extends React.Component {
  render(){
    return(
      <div id="contact" className="pad-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>Parallax scrolling effect is in action</h3>
              <h4>The next is the address on Google maps</h4>
            </div>
          </div>
        </div>
      
      <div id="google_map"></div>

      <Footer/>

      </div>



    )
  }
}

export default Contact