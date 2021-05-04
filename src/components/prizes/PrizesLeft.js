import { prizes } from '../../js/prizesTable';

const PrizesLeft = (props) => {

    return(
        <div className='prizes-left flex column'>
            {prizes.map((prize,index) => {
                return(
                    <div key={index} className={`flex p-v-5 p-h-5 roboto gold ${index%2===0 ? 'back-even' : 'back-odd'}`}> 
                        {prize} 
                    </div>
                )
            })}
        </div>
    )
}

export default PrizesLeft;