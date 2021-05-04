// function resetGame(gameParams, newDeck){
//     gameParams.deck = newDeck();
//     gameParams.cardsInGame = [];
//     gameParams.cardsToSwap = [];
//     gameParams.newCards = [];
//     gameParams.gameStage = 0;
// }

export function firstExtractions(gameParams){
    for(let a=0; a<5; a++){
        const card = extraction(gameParams.deck);
        const extract ={
            card: card,
            index: a
        };
        gameParams.cardsInGame.push(extract)    
    }
}   

function extraction(entry){
    const index = Math.floor(Math.random() * (entry.length - 1));
    const extract = entry[index];
    entry.splice(index,1);
    return extract;
}