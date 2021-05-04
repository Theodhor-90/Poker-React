import CardBody from './CardBody';

const CardContainer = (props) => {
    return(
        <div className='flex column'>
            <CardBody backCard={props.backCard} card={props.cardInGame ? props.cardInGame : null}/>
            <div className='centralizer card-holder p-v-10'></div>
        </div>
    )
}

export default CardContainer;