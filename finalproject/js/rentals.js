fetch("/finalproject/data/rental.json")
.then(response => response.json())
.then(json => {
    var table = document.getElementById("table");
    json.rentals.forEach((item) => {
        var hRow = document.createElement("tr");
        for (var key in item) {
            var rValue = document.createElement("td");
            if (key == "name" || key == "maxPersons") {
                rValue.innerHTML = item[key];
            } else {
                rValue.innerHTML = "$" + item[key];
            }
             
            hRow.appendChild(rValue);
        }
        
        table.appendChild(hRow);
    })
})