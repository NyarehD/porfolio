  // Making the input function
      function addINput(num) {
      document.getElementById('inputNo').value += num;
      }
      // Making the all clear function
      function cls() {
        document.getElementById('inputNo').value = " ";
      }
// Making the calculate function works
function calculating(){
  document.getElementById('inputNo').value=eval(document.getElementById('inputNo').value);
}