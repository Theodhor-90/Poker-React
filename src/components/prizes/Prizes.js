import PrizesLeft from './PrizesLeft';
import PrizesRight from './PrizesRight'

const Prizes = (props) => {
    return(
        <div className='flex fw p-v-25'>
            <PrizesLeft />
            <PrizesRight betIndex={props.betIndex}/>
        </div>
    )
}

export default Prizes;