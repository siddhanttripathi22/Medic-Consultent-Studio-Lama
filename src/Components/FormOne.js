import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import '../style/formOne.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DatePicker } from 'antd';
import moment from 'moment';
import Select from 'react-select'
import india from '../assets/india.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/formSlice';

const FormOne = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const backupData = location.state

    const storeData = useSelector((state) => state.form)
    

    useEffect(()=>{
        setFormData(prevErr => ({ ...prevErr, name: (location?.state?.name) ? (location?.state?.name) : "" }));
        // setFormData(prevErr => ({ ...prevErr, dateValue: location?.state?.dateValue ? moment(location?.state?.dateValue) : "" }));
        setFormData(prevErr => ({ ...prevErr, weeks: (location?.state?.weeks) ? (location?.state?.weeks) : false }));
        setFormData(prevErr => ({ ...prevErr, weekNo: (location?.state?.weekNo) ? (location?.state?.weekNo) : "" }));
        setFormData(prevErr => ({ ...prevErr, weight: (location?.state?.weight) ? (location?.state?.weight) : "" }));
        setFormData(prevErr => ({ ...prevErr, weightUnit: (location?.state?.weightUnit) ? (location?.state?.weightUnit) : "" }));
        setFormData(prevErr => ({ ...prevErr, weightUnitVal: (location?.state?.weightUnitVal) ? (location?.state?.weightUnitVal) : "" }));
        setFormData(prevErr => ({ ...prevErr, height: (location?.state?.height) ? (location?.state?.height) : "" }));
        setFormData(prevErr => ({ ...prevErr, heightUnit: (location?.state?.heightUnit) ? (location?.state?.heightUnit) : "" }));
        setFormData(prevErr => ({ ...prevErr, heightUnitVal: (location?.state?.heightUnitVal ? (location?.state?.heightUnitVal) : "") }));
        setFormData(prevErr => ({ ...prevErr, mail: (location?.state?.mail) ? (location?.state?.mail) : "" }));
        setFormData(prevErr => ({ ...prevErr, phno: (location?.state?.phno) ? (location?.state?.phno) : "" }));

        setValid(prev => ({ ...prev, name: (location?.state?.name) ? true : false }))
        setValid(prev => ({ ...prev, email: (location?.state?.mail) ? true : false}))
        setValid(prev => ({ ...prev, weekNo: true}))
        setValid(prev => ({ ...prev, phno: (location?.state?.phno) ? true : false }))
    },[location])

    useEffect(() => {
        setFormData(prevErr => ({ ...prevErr, dateValue: storeData[0]?.dateValue ? storeData[0]?.dateValue : "" }));
        setValid(prev => ({ ...prev, date: storeData[0]?.dateValue ? true : false }))
    },[storeData])

    // const [name, setName] = useState("")
    // const [mail, setMail] = useState("")
    // const [date, setDate] = useState("")
    // const [dateValue, setDateValue] = useState('')
    // const [weeks, setWeeks] = useState(false);
    // const [weekNo, setWeekNo] = useState('')
    // const [weight, setWeight] = useState('')
    // const [weightUnit, setWeightUnit] = useState('')
    // const [height, setHeight] = useState('')
    // const [heightUnit, setHeightUnit] = useState('')
    // const [phno, setPhno] = useState('')

    const [nameErr, setNameErr] = useState(false)
    const [mailErr, setMailErr] = useState(false)
    const [dateErr, setDateErr] = useState(false)
    const [weekNoErr, setWeekNoErr] = useState(false)
    const [phnoErr, setPhnoErr] = useState(false)

    const [disable, setdisable] = useState(true)

    const [errors, setErrors] = useState(
        {
            name: "",
            date: "",
            weekNo: "",
            mail: "",
            phno: ""
        }
    )
    
    const [formData, setFormData] = useState(
        {
            name: "",
            dateValue: "",
            date: "",
            mail: "",
            weeks: false,
            weekNo: "",
            weight: "",
            weightUnit: "",
            weightUnitVal: "",
            height: "",
            heightUnit: "",
            heightUnitVal: "",
            phno: ""
        }
    )


    const [valid, setValid] = useState(
        {
            name: false,
            date: false,
            email: false,
            weekNo: true,
            phno: false
        }
    )



    const handleNameChange = (e) => {
        const result = e.target.value.replace(/[^a-z]/gi, '');
        setNameErr(false)
        setFormData(prevErr => ({ ...prevErr, name: result }));
        if(result.length >= 3){
            setValid(prev => ({ ...prev, name: true }))
        }else{
            setValid(prev => ({ ...prev, name: false }))
        }
    }
    const handleEmailChange = (e) => {
        setMailErr(false)
        setFormData(prevErr => ({ ...prevErr, mail: e.target.value }));
        if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)){
            setValid(prev => ({ ...prev, email: true }))
        }else{
            setValid(prev => ({ ...prev, email: false }))
        }
    }
    const handleDateChange = (d, dateString) => {
        setDateErr(false)
        setFormData(prevErr => ({ ...prevErr, date: dateString }));
        setFormData(prevErr => ({ ...prevErr, dateValue: d }));
        setValid(prev => ({ ...prev, date: true }))
    };
    const handleWeekNoChange = (e) => {
        setWeekNoErr(false)
        setFormData(prevErr => ({ ...prevErr, weekNo: e.target.value }));
        setValid(prev => ({ ...prev, weekNo: true }))
    }
    const handleWeightChange = (e) => {
        // setWeight(e.target.value.replace(/[^0-9.]/g, ''))
        setFormData(prevErr => ({ ...prevErr, weight: e.target.value.replace(/[^0-9.]/g, '') }));
    }
    const handleWeightUnitChange = (e) => {
        // setWeightUnit(e)
        setFormData(prevErr => ({ ...prevErr, weightUnit: e.value }));
        setFormData(prevErr => ({ ...prevErr, weightUnitVal: e }));
    }
    const handleHeightChange = (e) => {
        // setHeight(e.target.value.replace(/[^0-9.]/g, ''))
        setFormData(prevErr => ({ ...prevErr, height: e.target.value.replace(/[^0-9.]/g, '') }));
    }
    const handleHeightUnitChange = (e) => {
        // setHeightUnit(e)
        setFormData(prevErr => ({ ...prevErr, heightUnit: e.value }));
        setFormData(prevErr => ({ ...prevErr, heightUnitVal: e }));
    }
    const handlePhNoChange = (e) => {
        // setPhno(e.target.value.replace(/\D/g, ''))
        setPhnoErr(false)
        setFormData(prevErr => ({ ...prevErr, phno: e.target.value.replace(/\D/g, '') }));
        if(e.target.value.replace(/\D/g, '').length === 10){
            setValid(prev => ({ ...prev, phno: true }))
        } else{
            setValid(prev => ({ ...prev, phno: false }))
        }
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(storeData.mail === formData.mail){
            navigate('/err')
        } else{
            navigate('/step-two')
            localStorage.setItem('formData', JSON.stringify(formData));
            dispatch(getData(formData))
        }
        

        
    }

    const handleKeyPress = (event) => {
        event.preventDefault();
      };

  return (
    <div className='py-5'>
      <div className='form-outer'>
        <div className='go-back'><Icon className='back-icon' icon="bx:arrow-back" /> <span>Back</span></div>
        <div className='stepper'>
            <div className='steps' style={{backgroundColor:'#7C55C5'}}></div>
            <div className='steps' style={{backgroundColor:'#F2F2F2'}}></div>
            <div className='steps' style={{backgroundColor:'#F2F2F2'}}></div>
            <div className='steps' style={{backgroundColor:'#F2F2F2'}}></div>
        </div>
        <div className='top-content'>
            <p>Get your questions answered by our consultants from the comfort of your home</p>
        </div>
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='form-label'>Child's name</Form.Label>
                    <Form.Control 
                        type="text" placeholder="Enter name"
                        value={formData.name}
                        onChange={handleNameChange}
                        maxLength={20}
                        autoComplete='new-password'
                    />
                    {nameErr && (
                     <Form.Text className='err-msg'>{errors.name}</Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3 date-group" controlId="formBasicPassword">
                    <Form.Label>Child's date of birth</Form.Label>
                    <DatePicker 
                        format="MMM DD, YYYY" 
                        disabledDate={(current) => current && current >= moment().startOf('day')}
                        value={formData.dateValue}
                        onChange={handleDateChange}
                    />
                    {dateErr && (
                     <Form.Text className='err-msg'>{errors.date}</Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='form-label'>Born at less than 37 weeks?</Form.Label>
                    <Form.Check
                        className='mt-2'
                        type="radio"
                        label="No"
                        name="weeks"
                        checked={formData.weeks === false}
                        onChange={() => {
                            // setWeeks(false)
                            setFormData(prevErr => ({ ...prevErr, weeks: false }));
                            setValid(prev => ({ ...prev, weekNo: true }))
                        }}
                    />
                    <Form.Check
                        className='mt-2'
                        type="radio"
                        label="Yes"
                        name="weeks"
                        checked={formData.weeks === true}
                        onChange={() => {
                            // setWeeks(true)
                            setWeekNoErr(false)
                            setFormData(prevErr => ({ ...prevErr, weekNo:"" }));
                            setFormData(prevErr => ({ ...prevErr, weeks: true }));
                            setValid(prev => ({ ...prev, weekNo: false }))
                            
                        }}
                    />
                </Form.Group>
                
                {formData.weeks && (
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='form-label'>Born in weeks</Form.Label>
                        <Form.Control type="number" min={20} max={36}
                            onChange={handleWeekNoChange}    
                            value={formData.weekNo}
                            autoComplete='new-password'
                            readonly
                            onKeyPress={handleKeyPress}
                        />
                    </Form.Group>
                )}
                {weekNoErr && formData.weeks && (
                        <Form.Text className='err-msg'>{errors.weekNo}</Form.Text>
                )}
                <div className='two-field'>
                    <Form.Group className="mb-3 form-grp-two" controlId="formBasicEmail">
                        <Form.Label className='form-label-two'>Child's weight</Form.Label>
                        <Form.Control type="text" onChange={handleWeightChange} value={formData.weight} />
                    </Form.Group>
                    <Form.Group className="mb-3 form-grp-two" controlId="formBasicEmail">
                        <Form.Label className='form-label-two'>Weight unit</Form.Label>
                        <Select 
                            options={[{value: 'kg', label: 'Kg'}, {value: 'g', label: 'g'}]}
                            onChange={handleWeightUnitChange}
                            value={formData.weightUnitVal}
                        />
                    </Form.Group>
                </div>

                <div className='two-field'>
                    <Form.Group className="mb-3 form-grp-two" controlId="formBasicEmail">
                        <Form.Label className='form-label-two'>Child's height</Form.Label>
                        <Form.Control type="text" onChange={handleHeightChange} value={formData.height} />
                    </Form.Group>
                    <Form.Group className="mb-3 form-grp-two" controlId="formBasicEmail">
                        <Form.Label className='form-label-two'>Height unit</Form.Label>
                        <Select options={[{value: 'cm', label: 'cm'}, {value: 'm', label: 'm'}]}
                            onChange={handleHeightUnitChange}
                            value={formData.heightUnitVal}
                        />
                    </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='form-label'>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email"
                        value={formData.mail}
                        onChange={handleEmailChange}    
                    />
                    {mailErr && (
                     <Form.Text className='err-msg'>{errors.mail}</Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='form-label'>Phone number</Form.Label>
                    <div className='phone-number-field'>
                        <div className='country-code'>
                            <div className='flag-outer'>
                                <img src={india} alt="flag" />
                            </div>
                            <div style={{color: "#ACACAC", fontSize: '20px', fontWeight: "600"}}> + 91</div>
                            <div><Icon className='down-icon' icon="material-symbols:keyboard-arrow-down-rounded" /></div>
                        </div>
                        <Form.Control type="text" onChange={handlePhNoChange} value={formData.phno} maxLength={10} />
                    </div>
                    {phnoErr && (
                     <Form.Text className='err-msg'>{errors.phno}</Form.Text>
                    )}
                </Form.Group>

                <Button className={(valid.name && valid.date && valid.weekNo && valid.email && valid.phno) ? 'next-btn-enable my-3' : "next-btn my-3"} type="submit" disabled={!(valid.name && valid.date && valid.weekNo && valid.email && valid.phno)}>
                    <span>Next</span>
                </Button>
            </Form>
        </div>
      </div>
    </div>
  )
}

export default FormOne