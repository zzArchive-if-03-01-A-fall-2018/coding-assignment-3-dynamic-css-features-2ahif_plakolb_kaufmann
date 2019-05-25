// Changes from printed marker based to host marker based
function checkToggleSwitch() {
  // Get the checkbox
  var check_box = document.getElementById("checkbox");
  var host_button = document.getElementById("hostbutton");
  var host_href = "web_app_host.html";
  // If the checkbox is checked, display the output text
  if (check_box.checked == true)
  {
    text1.style.display = "block";
    text2.style.display = "block";
    host_button.href = "#";           //Disable host button
    console.log("Checkbox checked");
  }
  else
  {
    text1.style.display = "none";
    text2.style.display = "none";
    host_button.href = host_href;   //Enable host button
  }
}

function testFunc() {
  console.log("test");
  if (confirm('Are you sure you want to save this thing into the database?')) {
    // Save it!
} else {
    // Do nothing!
}
  //location.reload(true);
}
