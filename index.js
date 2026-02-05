document.getElementById("btn").onclick = function () {

    let name = document.getElementById("name").value;
    let usn = document.getElementById("usn").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    console.log(name, usn, email, phone, address);

    document.getElementById("output").innerHTML =
        "Name: " + name + "<br>" +
        "USN: " + usn + "<br>" +
        "Email: " + email + "<br>" +
        "Phone: " + phone + "<br>" +
        "Address: " + address;
}
