import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Button from 'react-bootstrap/Button';
import { childSymptomsType } from '../data/data';
import "./../style/subForm.css";

const SubForm = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const pickedItem = JSON.parse(localStorage.getItem('pickedItem'));
    const clientData = JSON.parse(localStorage.getItem('formData'));
    let curInd = JSON.parse(localStorage.getItem('currentInd'));

    const [currentIndex, setCurrentIndex] = useState(curInd)

    

    const handleNextClick = (typeName) => {
        if (currentIndex < pickedItem.length - 1) {
            setCurrentIndex(currentIndex + 1)
            localStorage.setItem(typeName, JSON.stringify(selectedItems));
        } else {
            navigate('/step-two/sub-form/step-three')
            localStorage.setItem(typeName, JSON.stringify(selectedItems));
        }

    }
    const handleBackClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        } else if (currentIndex === 0) {
            navigate('/step-two', {state: pickedItem,} )
        }
    }

    const [selectedItems, setSelectedItems] = useState([])

    const handleClick = (val) => {
        if (selectedItems.includes(val)) {
            setSelectedItems(selectedItems.filter((id) => id !== val));
        } else {
            setSelectedItems([...selectedItems, val]);
        }
    }



    return (
        <div>
            {
                currentIndex === 0 && (
                    // <div>
                    //     <h1>{pickedItem[currentIndex].name}</h1>
                    //     <button onClick={handleNextClick}>NEXT</button>
                    //     <button onClick={handleBackClick}>BACK</button>
                    // </div>
                    <div className='py-5'>
                        <div className='form-outer'>
                            <div className='go-back-sub' onClick={handleBackClick}><Icon className='back-icon' icon="bx:arrow-back" /> <span>Back</span></div>
                            <div className='stepper'>
                                <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                                <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                                <div className='steps' style={{ backgroundColor: '#F2F2F2' }}></div>
                                <div className='steps' style={{ backgroundColor: '#F2F2F2' }}></div>
                            </div>
                            <div className='top-content'>
                                <p>Tell us more about {clientData.name} {`${pickedItem[currentIndex].name.toLowerCase()}`} issues... </p>
                            </div>
                            <div>
                                {childSymptomsType.map((type) => {
                                    if (type.name === pickedItem[currentIndex]?.name) {
                                        return (
                                            <div className='list-box py-4'>
                                                {type.symptoms.map((val, index) => (
                                                    <div key={index} className='list-sub' onClick={() => handleClick(val)}
                                                        style={{
                                                            backgroundColor: selectedItems.includes(val) ? '#EDE7F6' : 'transparent',
                                                            color: selectedItems.includes(val) ? '#4E2BAC' : ""
                                                        }}
                                                    >
                                                        <div className='list-icon-sub'><Icon icon={selectedItems.includes(val) ? "teenyicons:tick-circle-outline" : "ph:circle-light"} className='icon-style-sub' style={{ color: selectedItems.includes(val) ? '#4E2BAC' : '#E0E0E0' }} /></div>
                                                        <div className='list-content' >
                                                            <div className='list-content-top-sub' >{val}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <Button
                                onClick={() => handleNextClick(pickedItem[currentIndex].name)}
                                className={selectedItems.length >= 1 ? "next-btn-enable my-3" : "next-btn my-3"} type="submit" disabled={!(selectedItems.length >= 1)}>
                                <span>Next</span>
                            </Button>
                        </div>
                    </div>
                )
            }
            {
                currentIndex === 1 && (
                    <div>
                        {/* <h1>{pickedItem[currentIndex].name}</h1>
                        <button onClick={handleNextClick}>NEXT</button>
                        <button onClick={handleBackClick}>BACK</button> */}
                        <div className='py-5'>
                            <div className='form-outer'>
                                <div className='go-back-sub' onClick={handleBackClick}><Icon className='back-icon' icon="bx:arrow-back" /> <span>Back</span></div>
                                <div className='stepper'>
                                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                                    <div className='steps' style={{ backgroundColor: '#F2F2F2' }}></div>
                                    <div className='steps' style={{ backgroundColor: '#F2F2F2' }}></div>
                                </div>
                                <div className='top-content'>
                                    <p>Tell us more about {clientData.name} {`${pickedItem[currentIndex].name.toLowerCase()}`} issues... </p>
                                </div>
                                <div>
                                    {childSymptomsType.map((type) => {
                                        if (type.name === pickedItem[currentIndex].name) {
                                            return (
                                                <div className='list-box py-4'>
                                                    {type.symptoms.map((val, index) => (
                                                        <div key={index} className='list-sub' onClick={() => handleClick(val)}
                                                            style={{
                                                                backgroundColor: selectedItems.includes(val) ? '#EDE7F6' : 'transparent',
                                                                color: selectedItems.includes(val) ? '#4E2BAC' : ""
                                                            }}
                                                        >
                                                            <div className='list-icon-sub'><Icon icon={selectedItems.includes(val) ? "teenyicons:tick-circle-outline" : "ph:circle-light"} className='icon-style-sub' style={{ color: selectedItems.includes(val) ? '#4E2BAC' : '#E0E0E0' }} /></div>
                                                            <div className='list-content' >
                                                                <div className='list-content-top-sub' >{val}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <Button
                                    onClick={() => handleNextClick(pickedItem[currentIndex].name)}
                                    className={selectedItems.length >= 1 ? "next-btn-enable my-3" : "next-btn my-3"} type="submit" disabled={!(selectedItems.length >= 1)}>
                                    <span>Next</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                currentIndex === 2 && (
                    <div>
                        {/* <h1>{pickedItem[currentIndex].name}</h1>
                        <button onClick={handleNextClick}>NEXT</button>
                        <button onClick={handleBackClick}>BACK</button> */}
                        <div className='py-5'>
                            <div className='form-outer'>
                                <div className='go-back-sub' onClick={handleBackClick}><Icon className='back-icon' icon="bx:arrow-back" /> <span>Back</span></div>
                                <div className='stepper'>
                                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                                    <div className='steps' style={{ backgroundColor: '#F2F2F2' }}></div>
                                    <div className='steps' style={{ backgroundColor: '#F2F2F2' }}></div>
                                </div>
                                <div className='top-content'>
                                    <p>Tell us more about {clientData.name} {`${pickedItem[currentIndex].name.toLowerCase()}`} issues... </p>
                                </div>
                                <div>
                                    {childSymptomsType.map((type) => {
                                        if (type.name === pickedItem[currentIndex].name) {
                                            return (
                                                <div className='list-box py-4'>
                                                    {type.symptoms.map((val, index) => (
                                                        <div key={index} className='list-sub' onClick={() => handleClick(val)}
                                                            style={{
                                                                backgroundColor: selectedItems.includes(val) ? '#EDE7F6' : 'transparent',
                                                                color: selectedItems.includes(val) ? '#4E2BAC' : ""
                                                            }}
                                                        >
                                                            <div className='list-icon-sub'><Icon icon={selectedItems.includes(val) ? "teenyicons:tick-circle-outline" : "ph:circle-light"} className='icon-style-sub' style={{ color: selectedItems.includes(val) ? '#4E2BAC' : '#E0E0E0' }} /></div>
                                                            <div className='list-content' >
                                                                <div className='list-content-top-sub' >{val}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <Button
                                    onClick={() => handleNextClick(pickedItem[currentIndex].name)}
                                    className={selectedItems.length >= 1 ? "next-btn-enable my-3" : "next-btn my-3"} type="submit" disabled={!(selectedItems.length >= 1)}>
                                    <span>Next</span>
                                </Button>
                            </div>
                        </div>

                    </div>
                )
            }
            {
                currentIndex === 3 && (
                    <div>
                        {/* <h1>{pickedItem[currentIndex].name}</h1>
                        <button onClick={handleNextClick}>NEXT</button>
                        <button onClick={handleBackClick}>BACK</button> */}
                        <div className='py-5'>
                            <div className='form-outer'>
                                <div className='go-back-sub' onClick={handleBackClick}><Icon className='back-icon' icon="bx:arrow-back" /> <span>Back</span></div>
                                <div className='stepper'>
                                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                                    <div className='steps' style={{ backgroundColor: '#F2F2F2' }}></div>
                                    <div className='steps' style={{ backgroundColor: '#F2F2F2' }}></div>
                                </div>
                                <div className='top-content'>
                                    <p>Tell us more about {clientData.name} {`${pickedItem[currentIndex].name.toLowerCase()}`} issues... </p>
                                </div>
                                <div>
                                    {childSymptomsType.map((type) => {
                                        if (type.name === pickedItem[currentIndex].name) {
                                            return (
                                                <div className='list-box py-4'>
                                                    {type.symptoms.map((val, index) => (
                                                        <div key={index} className='list-sub' onClick={() => handleClick(val)}
                                                            style={{
                                                                backgroundColor: selectedItems.includes(val) ? '#EDE7F6' : 'transparent',
                                                                color: selectedItems.includes(val) ? '#4E2BAC' : ""
                                                            }}
                                                        >
                                                            <div className='list-icon-sub'><Icon icon={selectedItems.includes(val) ? "teenyicons:tick-circle-outline" : "ph:circle-light"} className='icon-style-sub' style={{ color: selectedItems.includes(val) ? '#4E2BAC' : '#E0E0E0' }} /></div>
                                                            <div className='list-content' >
                                                                <div className='list-content-top-sub' >{val}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <Button
                                    onClick={() => handleNextClick(pickedItem[currentIndex].name)}
                                    className={selectedItems.length >= 1 ? "next-btn-enable my-3" : "next-btn my-3"} type="submit" disabled={!(selectedItems.length >= 1)}>
                                    <span>Next</span>
                                </Button>
                            </div>
                        </div>

                    </div>
                )
            }
            {
                currentIndex === 4 && (
                    <div>
                        {/* <h1>{pickedItem[currentIndex].name}</h1>
                        <button onClick={handleNextClick}>NEXT</button>
                        <button onClick={handleBackClick}>BACK</button> */}
                        <div className='py-5'>
                            <div className='form-outer'>
                                <div className='go-back-sub' onClick={handleBackClick}><Icon className='back-icon' icon="bx:arrow-back" /> <span>Back</span></div>
                                <div className='stepper'>
                                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                                    <div className='steps' style={{ backgroundColor: '#F2F2F2' }}></div>
                                    <div className='steps' style={{ backgroundColor: '#F2F2F2' }}></div>
                                </div>
                                <div className='top-content'>
                                    <p>Tell us more about {clientData.name} {`${pickedItem[currentIndex].name.toLowerCase()}`} issues... </p>
                                </div>
                                <div>
                                    {childSymptomsType.map((type) => {
                                        if (type.name === pickedItem[currentIndex].name) {
                                            return (
                                                <div className='list-box py-4'>
                                                    {type.symptoms.map((val, index) => (
                                                        <div key={index} className='list-sub' onClick={() => handleClick(val)}
                                                            style={{
                                                                backgroundColor: selectedItems.includes(val) ? '#EDE7F6' : 'transparent',
                                                                color: selectedItems.includes(val) ? '#4E2BAC' : ""
                                                            }}
                                                        >
                                                            <div className='list-icon-sub'><Icon icon={selectedItems.includes(val) ? "teenyicons:tick-circle-outline" : "ph:circle-light"} className='icon-style-sub' style={{ color: selectedItems.includes(val) ? '#4E2BAC' : '#E0E0E0' }} /></div>
                                                            <div className='list-content' >
                                                                <div className='list-content-top-sub' >{val}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <Button
                                    onClick={() => handleNextClick(pickedItem[currentIndex].name)}
                                    className={selectedItems.length >= 1 ? "next-btn-enable my-3" : "next-btn my-3"} type="submit" disabled={!(selectedItems.length >= 1)}>
                                    <span>Next</span>
                                </Button>
                            </div>
                        </div>

                    </div>
                )
            }
            {
                currentIndex === 5 && (
                    <div>
                        {/* <h1>{pickedItem[currentIndex].name}</h1>
                        <button onClick={handleNextClick}>NEXT</button>
                        <button onClick={handleBackClick}>BACK</button> */}
                        <div className='py-5'>
                            <div className='form-outer'>
                                <div className='go-back-sub' onClick={handleBackClick}><Icon className='back-icon' icon="bx:arrow-back" /> <span>Back</span></div>
                                <div className='stepper'>
                                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                                    <div className='steps' style={{ backgroundColor: '#7C55C5' }}></div>
                                    <div className='steps' style={{ backgroundColor: '#F2F2F2' }}></div>
                                    <div className='steps' style={{ backgroundColor: '#F2F2F2' }}></div>
                                </div>
                                <div className='top-content'>
                                    <p>Tell us more about {clientData.name} {`${pickedItem[currentIndex].name.toLowerCase()}`} issues... </p>
                                </div>
                                <div>
                                    {childSymptomsType.map((type) => {
                                        if (type.name === pickedItem[currentIndex].name) {
                                            return (
                                                <div className='list-box py-4'>
                                                    {type.symptoms.map((val, index) => (
                                                        <div key={index} className='list-sub' onClick={() => handleClick(val)}
                                                            style={{
                                                                backgroundColor: selectedItems.includes(val) ? '#EDE7F6' : 'transparent',
                                                                color: selectedItems.includes(val) ? '#4E2BAC' : ""
                                                            }}
                                                        >
                                                            <div className='list-icon-sub'><Icon icon={selectedItems.includes(val) ? "teenyicons:tick-circle-outline" : "ph:circle-light"} className='icon-style-sub' style={{ color: selectedItems.includes(val) ? '#4E2BAC' : '#E0E0E0' }} /></div>
                                                            <div className='list-content' >
                                                                <div className='list-content-top-sub' >{val}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <Button
                                    onClick={() => handleNextClick(pickedItem[currentIndex].name)}
                                    className={selectedItems.length >= 1 ? "next-btn-enable my-3" : "next-btn my-3"} type="submit" disabled={!(selectedItems.length >= 1)}>
                                    <span>Next</span>
                                </Button>
                            </div>
                        </div>

                    </div>
                )
            }


        </div>
    )
}

export default SubForm