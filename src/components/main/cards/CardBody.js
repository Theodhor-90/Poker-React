const CardBody = (props) => {
    let image;
    if(props.card)
    {
        image = './cards/' + props.card.card.image + '.png'
    }
    return(
        
        <div className='centralizer'>
            <div className={`relative flip-container card ${props.card ? 'flip-back' : ''}`}>
                <img className='absolute flip-front card ' src={props.backCard} alt='nothing' />
                <img className='absolute flip-back card  ' src={image } alt={image} /> 
            </div>
        </div>
    )
}

export default CardBody;