import React from 'react'
import './../style/successPage.css'
import Success from './../assets/success.png'
import { Icon } from '@iconify/react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/formSlice';

const SuccessPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const lastFormData = JSON.parse(localStorage.getItem('lastformData'));
    const formData = JSON.parse(localStorage.getItem('formData'));

    return (
        <div className='py-5'>
            <div className='form-outer-success'>
                <div className='top-image'>
                    <img src={Success} alt="" />
                </div>
                <div className='top-content'>
                    <p>Scheduled successfully!</p>
                </div>
                <div className='btm-box'>
                    <div className='last-list'>
                        <div><Icon className='last-list-icon' icon="uit:calender" /></div>
                        <div className='last-list-content'>Scheduled for {lastFormData.date}</div>
                    </div>
                    <div className='last-list'>
                        <div><Icon className='last-list-icon' icon="ph:clock" /></div>
                        <div className='last-list-content'>From {lastFormData.timeSlot} <span className='spanStyle'>(~15 mins)</span></div>
                    </div>
                    <div className='last-list'>
                        <div><Icon className='last-list-icon' icon="gg:profile" /></div>
                        <div className='last-list-content'>Consultant will be our care counsellor</div>
                    </div>
                    <div className='last-list'>
                        <div><Icon className='last-list-icon' icon="ph:phone" /></div>
                        <div className='last-list-content'>Consultation will be an {lastFormData.callSlot}</div>
                    </div>
                    <div className='last-list'>
                        <div><Icon className='last-list-icon' icon="ph:link" /></div>
                        <div className='last-list-content'>Link sent on your email and whatsapp</div>
                    </div>
                </div>
                <Button
                onClick={() => {
                    navigate('/')
                    dispatch(getData(formData))
                }}
                    className="next-btn-enable-txt"
                >
                    <span>Next</span>
                </Button>
            </div>
        </div>
    )
}

export default SuccessPage