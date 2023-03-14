const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const addBtn=document.getElementById("add");

const body=document.getElementById("body");

let counter= 1;
/*
addBtn.addEventListener("click", function(e){
    e.preventDefault();
    let innerHTML = "";
    innerHTML+=
    `<tr>
      <th scope="row">${counter}</th>
      <td>${firstname.value}</td>
      <td>${lastname.value}</td>
      <td>${email.value}</td>
    </tr>`

    body.innerHTML+=innerHTML;
    firstname.value="";
    lastname.value="";
    email.value="";
    counter++;
})
*/

addBtn.addEventListener("click",function(e){
    e.preventDefault();
    let newTr = document.createElement("tr");
    let counterTh= document.createElement("td");
    let nameTd = document.createElement("td");
    let surnameTd = document.createElement("td");
    let EmailTd = document.createElement("td");
    

    counterTh.innerHTML=counter;
    counter++;

    nameTd.innerHTML=firstname.value
    surnameTd.innerHTML=lastname.value;
    EmailTd.innerHTML=email.value;
    
    newTr.append(counterTh,nameTd,surnameTd,EmailTd)
    body.append(newTr)
    firstname.value=""
    lastname.value=""
    email.value=""



    


})