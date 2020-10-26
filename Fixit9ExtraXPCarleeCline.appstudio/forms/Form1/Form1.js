// Use the jquery-Validation library To check input data  https;
//jqueryvalidation.org/;
alert("I changed the input headings and also populated the select control. I also had to toggle validation on for the entire project.")
Button14.onclick = function(s) {
  if($("#Container14").valid(s)) {
    NSB.MsgBox("Form checked - all fields OK!");
 } else {
    NSB.MsgBox("Please fix indicated fields.");
  }
};

function Main() {

var validateRules = {  rules: {  Input1: "required",Input2: { required: true,email: true },Textarea1: "required",Select1: "required",},messages: {  Input2: "Please enter a valid email address.",Select1: "Please choose one of the values.",},};

  NSB.validation(Container14, validateRules);

}
