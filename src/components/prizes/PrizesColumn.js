const PrizesColumn = (props) => {
    return(
        <div className= {`flex column prizes-column ${props.betIndex === props.index ? 'prizes-selected' : ''}`}>
           {props.prizes.map((prize,index) => {
               return(
                <div key={prize} className={`flex end p-v-5 p-h-5 roboto gold ${index%2===0 ? 'back-even' : 'back-odd'}`}> {prize} </div>
               )
           })} 
        </div>
    )
}

export default PrizesColumn;