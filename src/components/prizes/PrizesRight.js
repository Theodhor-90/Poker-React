import { leverage } from '../../js/prizesTable';
import PrizesColumn from './PrizesColumn';

const PrizesRight = (props) => {
    return(
        <div className='prizes-right flex'>
            {leverage.map((column,index) => {
                return(
                    <PrizesColumn key={index} index={index} prizes={column} betIndex={props.betIndex}/>
                )
            })}
        </div>
    )
}

export default PrizesRight;