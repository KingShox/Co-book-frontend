import '../css/EventModal.css'



const EventModal = (props) => {


  return (

    <div className='eventModal'>
        <div className='eventModal-content flex-col'>
            <div className='eventModal-header center'>
                <h3>{props.activeEvent.name}</h3>
            </div>
            <div className='eventModal-body center gap'>
                <label>Venue:</label>
                <p><strong>{props.activeEvent.venue}</strong></p>
                <label>Theme:</label>
                <p><strong>{props.activeEvent.theme}</strong></p>
                
                

            </div>
            <div className='center flex-row gap'>
                <button onClick={props.onClick} className='eventModal-button2'>Close</button>
            </div>

        </div>

    </div>
 
  )
}

export default EventModal