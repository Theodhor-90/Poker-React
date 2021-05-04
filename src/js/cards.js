
const values = [2,3,4,5,6,7,8,9,10,11,12,13,14];

const seeds = ['C','D','S','H'];




function cardImage(value,seed){
    if(value<11){
        return value + seed
    } else if(value===11){
        return 'J' + seed
    } else if(value===12){
        return 'Q' + seed
    } else if(value===13){
        return 'K' + seed
    } else return 'A' + seed
}

const cards = [];

seeds.forEach(seed => {
    values.forEach(value =>{
        const card ={};
        card.value = value;
        card.seed = seed;
        card.image = cardImage(value,seed);
        cards.push(card);  
    })
})

function newDeck(){
    return cards;
}

export default newDeck;