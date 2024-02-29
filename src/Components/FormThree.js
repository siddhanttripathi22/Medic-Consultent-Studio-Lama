import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { placeHolderContent } from '../data/data';
import './../style/formThree.css';
import { useNavigate } from 'react-router-dom';

const FormThree = () => {

    const navigate = useNavigate()

    const comments = JSON.parse(localStorage.getItem('textComments'));
    const pickedItem = JSON.parse(localStorage.getItem('pickedItem')); 

    useEffect(() => {
        comments && setText(comments)
    }, [comments])

    const [text, setText] = useState()

    const handleBackClick = () => {
        navigate('/step-two/sub-form')
        localStorage.setItem('currentInd', JSON.stringify(pickedItem.length - 1));
    }

    return (
        <div className='py-5'>
            <div className='form-outer'>
                <div className='go-back-lastForm' onClick={handleBackClick}><Icon className='back-icon' icon="bx:arrow-back" /> <span>Back</span></div>
                <div className='stepper'>
                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                    <div className='steps' style={{ backgroundColor: '#F2F2F2' }}></div>
                </div>
                <div className='top-content'>
                    <p>Any other information you'd like us to know?</p>
                </div>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control style={{ height: "200px", padding: "20px" }} as="textarea" rows={8}
                                placeholder={placeHolderContent}
                                value={text}
                                onChange={(e)=>{setText(e.target.value)}}
                            />
                        </Form.Group>
                    </Form>
                </div>
                <Button
                    onClick={() => {
                        localStorage.setItem('textComments', JSON.stringify(text));
                        navigate('/step-two/sub-form/step-three/step-four')
                    }}
                    className="next-btn-enable-txt"
                >
                    <span>Next</span>
                </Button>
            </div>
        </div>
    )
}

export default FormThree