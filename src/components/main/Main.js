import CardContainer from './cards/CardContainer';

const Main = (props) => {
    return(
        <div className='flex around back-green p-v-25'>
            {props.cards.map((card,index) => {
                return(
                    <CardContainer key={index} card={card} backCard={props.backCard} cardInGame={props.cardsInGame ? props.cardsInGame[index] : null}/>
                )
            })}
        </div>
    )
}

export default Main;