
    // var totalQuestions = $('.questions'),size();
    // var currentQueston = 0;
    // $questions = $('.questions');
    // $questions.hide();
    // $($questions.get(currentQuestions)).fadeIn();
    // $('.next').click(function () {
    //   $($questions.get(currentQuestions +1;
    //     if (currentQuestions == totalQuestions {
    //       var result sum_values()
    //       alert(result);
    //     } else {
    //       $($questions.get(currentQuestion)).fadeIn();
    //     }
$(document).ready(function() {
  $("form#quiz").submit(function() {    
    event.preventDefault();
    const answer1 = parseInt($("input:radio[name=question1]:checked").val());
    console.log(answer1);
    const answer2 = parseInt($("input:radio[name=question2]:checked").val());
    console.log(answer2);
    const answer3 = parseInt($("input:radio[name=question3]:checked").val());
    console.log(answer3);
    const total = answer1 + answer2 + answer3;
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