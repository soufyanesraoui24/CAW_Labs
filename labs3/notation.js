function mean(score) {

    let average =0;
    for (let i = 0; i < score.length; i++) {
         average +=  score[i];
        
    }
    console.log(average / (score.length));
    
}

module.exports= mean
