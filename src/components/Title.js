const icon = document.getElementById('favicon');

const Title = (props) => {

    function changeIcon(entry){
        icon.href=entry;       
    }
    
    return(
        <div className='centralizer p-v-25'>
            <img onClick={() => changeIcon("./black-chip.png")} className='chip-logo p-h-10' src={props.blackChip} alt='nothing' />
            <div className='f-s-title p-h-10 roboto-condensed-bold'> POKER MACHINE </div>
            <img onClick={() => changeIcon("./red-chip.png")} className='chip-logo p-h-10' src={props.redChip} alt='nothing' />
        </div>
    )
}

export default Title;