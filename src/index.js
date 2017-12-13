//window.alert("sometext");

alert("I am an alert box!");

<p> Bonjour messieurs dames</p>

/*Survey.Survey.cssType = "bootstrap";

var json = {questions: [
{ type: "matrix", name: "Quality", title: "Please indicate if you agree or disagree with the following statements",
   columns: [{ value: 1, text: "Strongly Disagree" }, 
              { value: 2, text: "Disagree" }, 
              { value: 3, text: "Neutral" }, 
              { value: 4, text: "Agree" }, 
              { value: 5, text: "Strongly Agree" }],
    rows: [{ value: "affordable", text: "1. Product is affordable" }, 
           { value: "does what it claims", text: "2. Product does what it claims" },
           { value: "better then others", text: "3. Product is better than other products on the market" }, 
           { value: "easy to use", text: "4. Product is easy to use" }]}
]};

window.survey = new Survey.Model(json);


survey.onComplete.add(function(result) {
    document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(result.data);
});

survey.onUpdateQuestionCssClasses.add(function(survey, options) {
    var classes = options.cssClasses;

    if (options.question.getType() === "matrix") {
      classes.root = classes.root  + " custom-matrix";
    }
});


$("#surveyElement").Survey({ 
    model: survey 
});*/
