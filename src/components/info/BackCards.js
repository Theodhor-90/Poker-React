const BackCards = (props) => {
    return(
        <div className='centralizer '>
            {props.backCards.map((card,index) =>{
                return(
                    <img 
                        onClick={() => {props.setBackCard(index)}}
                        src={card} 
                        key={index}
                        alt='nothing' 
                        className={`back-card m-h-10 ${props.backCardIndex === index ? 'back-card-selected' : 'pointer'}`} />
                )
            })}
        </div>
    )
}

export default BackCards;