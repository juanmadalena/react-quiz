export function checkAnswers(ans, questions){
    
    let correctAnswer = 0

    questions?.forEach( (question, index) => {

        if( atob(question?.correctAnswer) == ans[index] ){
            correctAnswer += 1
        }
    });

    return correctAnswer

}