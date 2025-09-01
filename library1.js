function addBook () {
            
    let title = document.getElementById("title").value;
    let student = document.getElementById("student").value;
    let date = document.getElementById("date").value;

    if(title===""|| student=== ""||date===""){
        alert("please fill all fields!!")
        return;
    } 

    let table = document.getElementById("booktable").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    newRow.insertCell(0).innerText = title;
    newRow.insertCell(1).innerText = student;
    newRow.insertCell(2).innerText = date;

    let actionCell = newRow.insertCell(3);
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function(){
        table.deleteRow(newRow.rowIndex - 1);
    };
    actionCell.appendChild(deleteBtn);
        
    document.getElementById("title").value ="";
    document.getElementById("student").value ="";
    document.getElementById("date").value ="";
}