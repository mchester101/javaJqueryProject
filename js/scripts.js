
$(document).ready(function() {
  $("form#quiz").submit(function() {    
    event.preventDefault();
    const answer1 = parseInt($("input:radio[name=question1]:checked").val());
    const answer2 = parseInt($("input:radio[name=question2]:checked").val());
    const answer3 = parseInt($("input:radio[name=question3]:checked").val());
    const answer4 = parseInt($)("input:radio[name=question4]:checked").val());
    cosnt answer5 = parseInt($)("input:radio[name=question5]:checked").val());
    const total = answer1 + answer2 + answer3 + answer4 + answer5;
    let result;
    if (total <= 5) {
    result = "You should learn Python!"
  } else if (total >=6 && total <= 15) {
    result = "Your time would be best spent learning Swift."
  } else {
    result = "You would be most happy learning C#."
  }
  $("#output").text(result);

  });
});