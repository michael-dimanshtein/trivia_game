$(document).ready(function(){





$('#startBtn').on('click',function(){
	console.log('start button');
	//fades out start button 
	$('#startBtn').fadeOut();
	//unhides answer choices
	$('#answerOpt').removeClass('hide');
	//unhides next button
	$('#nextBtn').removeClass('hide');
	//unhides question div
	$('#quest').removeClass('hide');

	questions[n].displayQuestion();
	
 
});

$('#nextBtn').on('click', function(){
	n++;
	questions[n].displayQuestion();


	if(document.getElementById("optionsRadios0").checked){
		userAnswers.push("0");
	}
	if(document.getElementById("optionsRadios1").checked){
		userAnswers.push("1");
	}
	if(document.getElementById("optionsRadios2").checked){
		userAnswers.push("2");
	}
	if(document.getElementById("optionsRadios3").checked){
		userAnswers.push("3");
	}
	console.log(userAnswers);

	// if(n===questions.length){

	// }
	// else{

	// }


});

function Question(question, answers, correct){
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}

Question.prototype.displayQuestion = function(){
	console.log(this.question);

		for (var i = 0; i < this.answers.length; i++) {
		 	console.log(i + ': ' + this.answers[i]);

		 	$('#quest').html(this.question);
		 	$('#ans0').html(this.answers[0]);
		 	$('#ans1').html(this.answers[1]);
		 	$('#ans2').html(this.answers[2]);
		 	$('#ans3').html(this.answers[3]);
		}
}

var q1 = new Question('Is JS the coolest language?', ['yes', 'no', 'some days', 'no days'], 0);
var q2 = new Question('What day is the Monday morning podcast?', ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], 0);
var q3 = new Question('What is the best color?', ['blue', 'purple', 'green', 'red'], 1);

var questions = [q1, q2, q3];
var n = 0;
var userAnswers=[];



//console.log(questions[0].displayQuestion());



/*
var questions = [
('Is JS the coolest language?', ['yes', 'no', 'some days', 'no days'], 0);
('What day is Monday morning podcast', ['Monday'], 0);
('What is the best color', ['blue', 'purple', 'green', 'red'], 1);


]
*/


});





