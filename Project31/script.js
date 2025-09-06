function validateSignup() {
  let form = document.forms["signupForm"];
  let name = form["name"].value.trim();
  let email = form["email"].value.trim();
  let age = form["age"].value;
  let password = form["password"].value.trim();

  let isValid = true;

  if(name === "") {
    showMsg("nameMsg", "⚠️ Name cannot be empty", "error");
    isValid = false;
  } else {
    showMsg("nameMsg", "✅ Name looks good", "success");
  }

  if(email === "") {
    showMsg("emailMsg", "⚠️ Email cannot be empty", "error");
    isValid = false;
  } else if(!validateEmail(email)) {
    showMsg("emailMsg", "⚠️ Invalid email format", "error");
    isValid = false;
  } else {
    showMsg("emailMsg", "✅ Email looks good", "success");
  }

  if(age === "") {
    showMsg("ageMsg", "⚠️ Age is required", "error");
    isValid = false;
  } else if(age < 10 || age > 100) {
    showMsg("ageMsg", "⚠️ Age must be between 10 and 100", "error");
    isValid = false;
  } else {
    showMsg("ageMsg", "✅ Age looks good", "success");
  }

  if(password.length < 6) {
    showMsg("passMsg", "⚠️ Password must be at least 6 characters", "error");
    isValid = false;
  } else {
    showMsg("passMsg", "✅ Password is strong enough", "success");
  }

  if(isValid) {
    showMsg("successMsg", "🎉 Signup Successful! Welcome!", "success");
  } else {
    showMsg("successMsg", "", ""); 
  }

  return false; 
}

function showMsg(id, msg, type) {
  let element = document.getElementById(id);
  element.innerHTML = msg;
  element.className = type;
}

