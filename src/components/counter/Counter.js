const Counter = (props) => {

    const coins = [1,2,5,10];

    return(
        <div className='flex around p-v-25 p-h-25 back-odd roboto'>
            <div className='f-s-footer p-v-10 p-h-10 square-radius back-white centralizer pointer' onClick={props.switchInfo}> 
                Info</div>
            <div className='f-s-footer p-v-10 p-h-10 square-radius back-white centralizer'>
                Stack:<span className='roboto-condensed-bold m-l-5'>100£</span>
            </div>
            <div className='flex'>
                {coins.map((coin, index) => {
                    return(
                        <div key={index} 
                        onClick={() => props.setBet(index)}
                        className={`centralizer back-white coin ${props.betIndex===index ? 'coin-selected' : ''}`}> 
                            £{coin} 
                        </div> 
                    )
                })}
            </div>
            <div 
                className='f-s-footer p-v-10 p-h-10 square-radius back-white centralizer play'
                onClick={props.startGame}
            >Play</div>
        </div>
    )
}

export default Counter;