
document.querySelector("#SignUpForm").style.display = "none";

let togglerBtn = document.querySelector(".toggleBtn");
// console.log(togglerBtn);
let currentForm = "#SignInForm";

togglerBtn.addEventListener("click", toggleForms);

function toggleForms() {
  document.querySelector(currentForm).style.display = "none";
  currentForm = currentForm === "#SignInForm" ? "#SignUpForm" : "#SignInForm";
  document.querySelector(currentForm).style.display = "flex";
  changeHeading();
}

function changeHeading() {
  if (currentForm === "#SignUpForm") {
    document.querySelector(".formHeading").innerHTML = "sign up here";
    togglerBtn.innerHTML = "click here to sign in";
    // console.log("sign up active");
  } else {
    document.querySelector(".formHeading").innerHTML = "sign in here";
    togglerBtn.innerHTML = "click here to sign up";
    // console.log("sign in active");
  }
}

let signupBtn = document.querySelector(".signupbtn");
let registered_users = [];

signupBtn.addEventListener("click", adduser);
function adduser() {
  var name = document.querySelector("#rname");
  var course = document.querySelector("#rcourse");
  var username = document.querySelector("#rusername");
  var password = document.querySelector("#rpassword");
  registered_users.push([name.value, course.value, username.value, password.value]);
  console.log(registered_users);
  name.value="";
  course.value="";
  username.value="";
  password.value="";
}


let signinBtn=document.querySelector(".signinbtn");
signinBtn.addEventListener("click",finduser);
function finduser(){
  const name= document.querySelector("#username");
  const pass=document.querySelector("#password");
  let verified=true;
  if(name.value==="" || pass.value===""){
    alert("invalid entry");
    return;
  }
  for(i=0;i<registered_users.length;i++){
     if(registered_users[i][2]=== name.value && registered_users[i][3]===pass.value){
      verified=true;
      break;
     }
     else{
      verified=false;
     }
  }
  if(verified){
    alert("welcome here");
  }
  else{
    alert("not found");
  }
 name.value="";
 pass.value="";
}