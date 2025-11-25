function addEntry() {
    let name = document.getElementById("name").value;
    let purpose = document.getElementById("purpose").value;

    if (name === "" || purpose === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("logTable");
    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = purpose;
    row.insertCell(2).innerHTML = new Date().toLocaleTimeString();
    let exitCell = row.insertCell(3);
    exitCell.innerHTML = "-";

    let actionCell = row.insertCell(4);
    let btn = document.createElement("button");
    btn.innerHTML = "Mark Exit";
    btn.className = "exit-btn";

    btn.onclick = function () {
        exitCell.innerHTML = new Date().toLocaleTimeString();
        btn.disabled = true;
    };

    actionCell.appendChild(btn);

    document.getElementById("name").value = "";
    document.getElementById("purpose").value = "";
}
