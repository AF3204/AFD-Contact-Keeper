import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'

const ContactItem = ({contact}) => {

    // 20210806 - Delete function
    // 20210806 - setCurrnt and clearCurrent
    const {deleteContact,setCurrent,clearCurrent} = useContext(ContactContext)

    const onDelete = () =>{
        deleteContact(_id)
        clearCurrent()
    }

    const {_id, name, email, phone, type} = contact

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name} 
                <span className={'badge ' +(
                    type === 'Professional' ? 'badge-success' : 'badge-primary'
                )}>{type.charAt(0).toUpperCase()+type.slice(1)}</span>
            </h3>
            <ul className='list'>
                {email && (<li ><i className='fas fa-envelope-open'/> {email}</li>)}
                {phone && (<li><i className='fas fa-phone'/> {phone}</li>)}
            </ul>

            <p>
                <button className='btn btn-dark btn-sm' onClick={() => setCurrent(contact)}>EDIT</button>
                <button className='btn btn-danger btn-sm' onClick={onDelete}>DELETE</button>
            </p>

        </div>
    )
}

ContactItem.propTypes={
    contact:PropTypes.object.isRequired,
}

export default ContactItem