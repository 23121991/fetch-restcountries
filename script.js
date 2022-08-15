var res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => data.json())
  .then((data1) => foo(data1));
function foo(data1) {
  for (var i = 0; i <= data1.length; i++) {
    console.log(data1[i]);
    var div = document.createElement("div");
  //   // div.innerhtml =
      // array.forEach(element) => {
      //   console.log(i,data1[i]);
      //   var div= document.createElement("div");
        div.setAttribute("class","col-lg-3","col-md-3","col-sm-3");
div.innerHTML =`<div class="box">
<div class ="container">
  <div class="row">
  <div class="col-lg-3","col-md-3","col-sm-3">
  <div class= "box">
    <div class="card group">
    <div class="card">
      <div class="card-body">
      <div><img src= ${data1[i].flags.svg} height=150px width=150px "alt="...";></div>
       <h4 class="card title">${data1[i].name.common}</h4>
         <h5 class="region">Region:${data1[i].region}</h5>
          <h6 class="capital">Capital:${data1[i].capital}</h6>
            <p class="latitude">Latitude:${data1[i].latlng[0]};</p>
              <p class="longitude">Longitude:${data1[i].latlng[1]}</p>
               <p="countrycode">Country Code:${data1[i].cca3}</p>
                 <button type="click" "btn btn-primary">
                 <a href="https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=dea32e72b6b3bf87cb81963918204b5f">click for weather</a> </button>
            </div>
          </div>
          
        </div>
        </div>
       </div>
       </div>
     </div>`
     document.body.append(div);
       
      };  
    
    }
           