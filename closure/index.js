/*
function createCount(){
    let count = 0;

    function increment(){
        count++;
        console.log(count)

    }

    function decrement(){
        count--;
        console.log(count)
    }

    function getCount(){
        return count;
    }

    return {increment,decrement, getCount};
}

const counter = createCount();



counter.increment();
counter.increment();
counter.increment();
counter.decrement();

console.log(`count is ${counter.getCount()}`)

*/
function createGame(){
    let score = 0;

    function increaseScore (points){
        score += points;
        console.log(score)
    }

    function decreaseScore (points){
        score-= points;
        console.log(score);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore}

}

const game = createGame();



game.increaseScore(2);
game.increaseScore(2);
game.increaseScore(23);
game.decreaseScore(2)

console.log(`poin lu sekarang itu ${game.getScore()}`)