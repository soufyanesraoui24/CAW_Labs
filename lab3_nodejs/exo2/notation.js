function mean(score) {

    let average =0;
    for (let i = 0; i < score.length; i++) {
         average +=  score[i];
        
    }
    console.log(average / (score.length));
    
}
// mean([1,2,3,4,5,6,7,8,9])
module.exports= mean
