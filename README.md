# fetch-restcountries
!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="index.css">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css?_cacheOverride=1658941904743" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
     <link rel="stylesheet" href="http://127.0.0.1:5500/index.css?_cacheOverride=1658941904743"> -->

</head>
<body>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <script src="script.js"></script> 
        </div>
        
      </div>
    </div>
  </div> 
</body>
</html>


script.js
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
           
           
    style.css:
    
    body {
  background-color: rgb(188, 188, 99);
  scroll-padding: 20px;
  display:grid;
  grid-template-columns: max-content;
  text-align:center;
}

.div {
  color :brown;
  display:grid;
  grid-template-columns: max-content;
}

.box-part {
  background-color: rgb(191, 200, 123);
  margin: 20px;
  padding: 40px 5px;
  display:grid;
  grid-template-columns: max-content;

}
.box{
  flex-direction: row;
  display:grid;
  grid-template-columns: max-content;
}
.grid{
  .grid{
    grid-template-columns:repeat(2fr);
  }
}
  
.text {
  margin: 20px 0px;
}
h4{
  text-decoration:solid;
  background-color: darksalmon;
  color:darkgoldenrod;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: larger;
}
h5{
  flex-direction:left ;
color:rgb(229, 20, 20);
}
h6{
  color:rgb(201, 109, 38);

}
p{
  color:blue;
}

.box {
  padding-top:60px ;

}
.button{
outline-color: blueviolet;
color: darkkhaki;
}
.div{
  flex-wrap: wrap;
  flex-direction: right;

}

           
           
           
