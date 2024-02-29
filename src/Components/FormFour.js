import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Form from 'react-bootstrap/Form';
import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import '../style/formFour.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const FormFour = () => {

    const navigate = useNavigate()

    

    const [toggleSlot1, setToogleSlot1] = useState(true)
    const [toggleSlot2, setToogleSlot2] = useState(false)

    const [toggleSlotCall1, setToogleSlotCall1] = useState(true)
    const [toggleSlotCall2, setToogleSlotCall2] = useState(false)

    const [lastformData, setlastFormData] = useState(
        {
            dateValue: "",
            date: "",
            timeValue: "",
            time: "",
            timeSlot: "10:30 to 10:45 am",
            callSlot: "Video call",
        }
    )


    const [valid, setValid] = useState(
        {
            date: false,
            time: false,
            timeSlot: true,
            callSlot: true
        }
    )


    const handleDateChange = (d, dateString) => {
        setlastFormData(prevErr => ({ ...prevErr, date: dateString }));
        setlastFormData(prevErr => ({ ...prevErr, dateValue: d }));
        setValid(prev => ({ ...prev, date: true }))
    };

    const handleTimeRangeChange = (d, dateString) => {
        setlastFormData(prevErr => ({ ...prevErr, time: dateString }));
        setlastFormData(prevErr => ({ ...prevErr, timeValue: d }));
        setValid(prev => ({ ...prev, time: true }))
    };

    const handleBackClick = () => {
        navigate('/step-two/sub-form/step-three')
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate('/step-two/sub-form/step-three/step-four/step-success')
        localStorage.setItem('lastformData', JSON.stringify(lastformData));
        
    }

    return (
        <div className='py-5'>
            <div className='form-outer'>
                <div className='go-back-lastForm' onClick={handleBackClick}><Icon className='back-icon' icon="bx:arrow-back" /> <span>Back</span></div>
                <div className='stepper'>
                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                </div>
                <div className='top-content'>
                    <p>Schedule an appointment</p>
                </div>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 date-group" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select date</Form.Label>
                            <DatePicker
                                format="MMM DD, YYYY"
                                disabledDate={(current) => current && current <= moment().endOf('day')}
                                value={lastformData.dateValue}
                                onChange={handleDateChange}
                                onCalendarChange={handleTimeRangeChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 date-group" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select time</Form.Label>
                            <TimePicker.RangePicker
                                showSecond={false}
                                format="HH:mm"
                                value={lastformData.timeValue}
                                onChange={handleTimeRangeChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 date-group" controlId="exampleForm.ControlInput1">
                            <Form.Label>Choose slot</Form.Label>
                            <div className=' date-group-last'>
                                <div onClick={() => {
                                    setToogleSlot1(true)
                                    setToogleSlot2(false)
                                    setlastFormData(prevErr => ({ ...prevErr, timeSlot: "10:30 to 10:45 am" }));
                                }}
                                    className={toggleSlot1 ? 'slots-true' : 'slots'}>
                                    10:30 to 10:45 am
                                </div>
                                <div
                                    onClick={() => {
                                        setToogleSlot1(false)
                                        setToogleSlot2(true)
                                        setlastFormData(prevErr => ({ ...prevErr, timeSlot: "10:45 to 11:00 am" }));
                                    }}
                                    className={toggleSlot2 ? 'slots-true' : 'slots'}>
                                    10:45 to 11:00 am
                                </div>
                            </div>

                        </Form.Group>
                        <Form.Group className="mb-3 date-group" controlId="exampleForm.ControlInput1">
                            <Form.Label>Call type</Form.Label>
                            <div className=' date-group-last'>
                                <div onClick={() => {
                                    setToogleSlotCall1(true)
                                    setToogleSlotCall2(false)
                                    setlastFormData(prevErr => ({ ...prevErr, callSlot: "Video call" }));
                                }}
                                    className={toggleSlotCall1 ? 'slotsCall-true' : 'slotsCall'}>
                                    <div className='callSlotIcon'><Icon className='callSlotIcon-style' icon="lucide:video" /></div>
                                    <div className='callSlotContent'>Video call</div>
                                </div>
                                <div
                                    onClick={() => {
                                        setToogleSlotCall1(false)
                                        setToogleSlotCall2(true)
                                        setlastFormData(prevErr => ({ ...prevErr, callSlot: "Audio call" }));
                                    }}
                                    className={toggleSlotCall2 ? 'slotsCall-true' : 'slotsCall'}>
                                    <div className='callSlotIcon'><Icon className='callSlotIcon-style' icon="ph:phone" /></div>
                                    <div className='callSlotContent'>Audio call</div>
                                </div>
                            </div>

                        </Form.Group>
                        <Button
                            className={(valid.time && valid.date && valid.callSlot && valid.timeSlot) ? 'next-btn-enable my-3' : "next-btn my-3"}
                            type="submit"
                            disabled={!(valid.time && valid.date && valid.callSlot && valid.timeSlot)}
                        >
                            <span>Next</span>
                        </Button>
                    </Form>

                </div>
            </div>
        </div>
    )
}

export default FormFour