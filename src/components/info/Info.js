import BackCards from './BackCards';

const Info = (props) => {
    return(
        <div className='flex column align-center around fh fw'>
            <div className='centralizer f-s-display roboto-bold'>
                Instructions
            </div>
            <ul>
                <li className='f-s-footer roboto-light p-v-5'>
                    Choose the amount to bet by selecting one of the coins
                </li>
                <li className='f-s-footer roboto-light p-v-5'>
                    Once the cards are drawn, you can swap for new ones
                </li>
                <li className='f-s-footer roboto-light p-v-5'>
                    You can click on the cards to "HOLD" or "REVEAL" them
                </li>
                <li className='f-s-footer roboto-light p-v-5'>
                    When the swap is complete, check the prizes table above
                </li>
                <li className='f-s-footer roboto-light p-v-5'>
                    If you find a 
                        <span className='p-h-5'>
                            <img className='info-icon' src={props.blackChip} alt='nothing' />
                        </span>
                    or a 
                        <span className='p-h-5'>
                            <img className='info-icon' src={props.redChip} alt='nothing' />
                        </span>
                    you will trigger the bonus game
                </li>
                <li className='f-s-footer roboto-light p-v-5'>
                    A random card wil be drawn and you have to guess the color
                </li>
                <li className='f-s-footer roboto-light p-v-5'>
                    If you get correctly you double the value, if not you loose
                </li>
                <li className='f-s-footer roboto-light p-v-5'>
                    You can double-up up to 5 times
                </li>
                <li className='f-s-footer roboto-light p-v-5'>
                    Each
                        <span className='p-h-5'>
                            <img className='info-icon' src={props.blackChip} alt='nothing' />
                        </span>
                    or  
                        <span className='p-h-5'>
                            <img className='info-icon' src={props.redChip} alt='nothing' />
                        </span>
                    contributes to the amount of the bonus game
                </li>
            </ul>
            <div className='roboto f-s-medium'>
                Choose card style:
            </div>
            <BackCards 
                backCards={props.backCards} 
                backCardIndex={props.backCardIndex}
                setBackCard={props.setBackCard}/>
        </div>
    )
}

export default Info;