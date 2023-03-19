$(document).ready(function(){

    $("button").click(function(e){
    e.preventDefault();
    let input = $("input").val();
    let selectedTemp = $("select").children("option:selected").val();
    $.ajax({
        url: `http://api.weatherapi.com/v1/current.json?key=6d46d3be56f4482d928133933231903&q=${input}`,
            method: "get",
            success: function(city){
                    let weather = `
                    <div id="print">
                    <p>City: ${city.location.name}</p>
                    <p>Country: ${city.location.country}</p>
                    <p>Weather: ${city.location.country}</p>
                    <p>Weather: ${Select(selectedTemp, city.current.temp_c, city.current.temp_f)}</p>
                    <p>Condition: ${city.current.condition.text}</p>
                    </div>
                    `
                    $(".weather").html(weather);
    },
        error: function(data){
            console.log(data);
        }
       })
       function Select(temp, response, response2) {
        if (temp=="celcius"){
            return response;
        } else {
            return response2;
        }
   }
})})