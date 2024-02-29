import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useLocation, useNavigate } from 'react-router-dom';
import './../style/formTwo.css';
import { childSymptomsList } from '../data/data';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

const FormTwo = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const formData = JSON.parse(localStorage.getItem('formData'));

    const [selectedItems, setSelectedItems] = useState([])

    const handleClick = (val) => {
        if (selectedItems.includes(val)) {
            setSelectedItems(selectedItems.filter((id) => id !== val));
          } else {
            setSelectedItems([...selectedItems, val]);
          }
    }



  return (
    <div className='py-5'>
      <div className='form-outer'>
        <div className='go-back-two' onClick={() => navigate('/', {state: formData,})}><Icon className='back-icon' icon="bx:arrow-back" /> <span>Back</span></div>
        <div className='stepper'>
            <div className='steps' style={{backgroundColor:'#7C55C5'}}></div>
            <div className='steps' style={{backgroundColor:'#7C55C5'}}></div>
            <div className='steps' style={{backgroundColor:'#F2F2F2'}}></div>
            <div className='steps' style={{backgroundColor:'#F2F2F2'}}></div>
        </div>
        <div className='top-content'>{formData.name} needs help with...</div>
        <div className='list-box py-4'>
            {childSymptomsList?.map((val, index) => (
                <div key={val.id} className='list' onClick={() => handleClick(val)}
                    style={{
                        backgroundColor: selectedItems.includes(val) ? '#EDE7F6' : 'transparent',
                        color: selectedItems.includes(val) ? '#4E2BAC' : ""
                    }}
                >
                    <div className='list-icon'><Icon icon={val.icon} className='icon-style' style={{color: selectedItems.includes(val) ? '#4E2BAC' : "#00B187"}} /></div>
                    <div className='list-content'>
                        <div className='list-content-top'>{val.name}</div>
                        <div className='list-content-btm' style={{color: selectedItems.includes(val) ? '#4E2BAC' : "#424242"}}>{val.info}</div>
                    </div>
                </div>
            ))}
            
        </div>
            <Button 
              onClick={() => {
                navigate('/step-two/sub-form', {state: selectedItems,})
                localStorage.setItem('pickedItem', JSON.stringify(selectedItems));
                localStorage.setItem('currentInd', JSON.stringify(0));
              }}
              className={selectedItems.length >= 1 ? "next-btn-enable my-3" : "next-btn my-3"} type="submit" disabled={!(selectedItems.length >= 1)}>
               <span>Next</span>
            </Button>
      </div>
    </div>
  )
}

export default FormTwo