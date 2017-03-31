function myStore() {
    document.getElementById('sub').addEventListener("click", priceThis);
}

function priceThis(e) {
    e.preventDefault();
    var x = document.getElementById("book_1").value;
    var y = document.getElementById("book_2").value;
    var z = document.getElementById("book_3").value;


    if ((x == "") || (y == "") || (z == "")) {
        window.alert("Please put 0 for the empty cells!!!");
    } else {
        var output = "";
        output += "<strong>Basic XHTML (Quantity = " + x + "): " + (x * 19.99) + "</strong> <br/>";
        output += "<strong>Intro to PHP (Quantity = " + y + "): " + (y * 86.00) + "</strong><br/>";
        output += "<strong>Advanced JQuery(Quantity = " + z + "): " + (z * 55.00) + "</strong> <br/><br/>";
        output += "<strong>Final Total: $</strong>" + (x * 19.99 + y * 86.00 + z * 55.00);
        document.getElementById("output").innerHTML = output;
    }
}








window.addEventListener("load", myStore, false);
