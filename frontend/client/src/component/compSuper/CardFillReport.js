import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import user from '../../features/user'
import { Navigate } from 'react-router-dom';



function CardFillReport(props) {
// let user = useSelector((state) => state.user);

const [selectedPdf, setSelectedPdf] = useState(null);
let [allowNavigate, setAllowNavigate] = useState(false);


let [data,setData]=useState({
    'week_number': '',
    'date_begin': '',
    'date_end': '', 
    'table_data':[
        {'hours': '','topic': '','details':''},
        {'hours': '','topic': '','details':''},
        {'hours': '','topic': '','details':''}],
    'company_supervisor': props.profile.company_supervisor,
    'university_supervisor': props.profile.university_supervisor,
    
  })
  
  const onPdfChange = event => {
    setSelectedPdf(event.target.files[0]);
  };
  

  const handleInputChange = (index, event) => {
    const values = [...data.table_data];
    values[index][event.target.name] = event.target.value;
    setData({ ...data, table_data: values });
  };

const onSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();

    if (selectedPdf) {
      formData.append('companySupervisorSignature', selectedPdf); // 'cv' should match the field name expected by your server
    }

    // Add other data to formData
    for (const key in data) {
      if (typeof data[key] === 'object' && data[key] !== null) {
        formData.append(key, JSON.stringify(data[key]));
      } else {
        formData.append(key, data[key]);
      }
    }
  
    try {
      const response = await fetch(`http://127.0.0.1:8000/users/weeklyreport/${props.id}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });
    
      if (!response.ok) {
        throw new Error('Failed to create post');
      }
    
      const res = await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
    setAllowNavigate(true);

};
let onChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }


  
    let [isModal,setIsModal]=useState(false) 
      let handelOnClick =()=> {
          setIsModal(true)
      }
      let handelOnClickX =()=> {
          setIsModal(false)
      }

  return (
    <>
    <form onSubmit={onSubmit}>
    <div className='compsuper-header-fill-report'>
            <input placeholder='week Number'name='week_number' onChange={onChange} className='date-txt-size gray-bk'/>

            <div className='compsuper-date'>
                <span>Date from </span>
                <input type='date' name='date_begin' className='date-txt-size gray-bk' onChange={onChange}/>
                <span>To </span>
                <input type='date' name='date_end' className='date-txt-size gray-bk'onChange={onChange}/>
            </div>
        </div>

        <div className='compsuper-fill-report-topic '>

            <div className='fill-report-topic bold'>
                <span>Topic </span>
                {data.table_data.map((item, index) => (
                    <input type='text' 
                    name='topic'
                     placeholder='Fill here' 
                     className='topic-txt-size gray-bk'
                    value={item.topic}
                    onChange={event => handleInputChange(index, event)}
                  />
                  ))}

                {/* <input type='text' name='topic' placeholder='Fill here' onChange={onChange} className='topic-txt-size gray-bk'/>
                <input type='text' name='topic' placeholder='Fill here' onChange={onChange} className='topic-txt-size gray-bk'/>
                <input type='text' name='topic' placeholder='Fill here' onChange={onChange} className='topic-txt-size gray-bk'/> */}
            </div>

            <div className='fill-report-topic bold'>
                <span>Software and Equipment used</span>
                {data.table_data.map((item, index) => (
                    <input type='text' 
                    name='details'
                     placeholder='Fill here' 
                     className='software-txt-size gray-bk'
                    // value={item.topic}
                    onChange={event => handleInputChange(index, event)}
                  />
                  ))}
                {/* <input type='text' name='details' placeholder='Fill here' onChange={onChange} className='software-txt-size gray-bk'/>
                <input type='text' name='details' placeholder='Fill here' onChange={onChange} className='software-txt-size gray-bk'/>
                <input type='text' name='details' placeholder='Fill here' onChange={onChange} className='software-txt-size gray-bk'/> */}
            </div>

            <div className='fill-report-topic bold'>
                <span>Hours</span> 
                {data.table_data.map((item, index) => (
                        <input type='text' 
                        name='hours'
                        placeholder='Fill here' 
                        className='hours-txt-size gray-bk'
                        // value={item.topic}
                        onChange={event => handleInputChange(index, event)}
                    />
                    ))}
                {/* <input type='text' name='hours' placeholder='Fill here' onChange={onChange} className='hours-txt-size gray-bk'/>
                <input type='text' name='hours' placeholder='Fill here' onChange={onChange} className='hours-txt-size gray-bk'/>
                <input type='text' name='hours' placeholder='Fill here' onChange={onChange} className='hours-txt-size gray-bk'/> */}
            </div>
        
        </div>

        

        <div className='signature-cont'>

            <label className='report-svg-left'>
                <input type='file' name='skill' accept='.pdf' className='display-img ' onChange={onPdfChange}/>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#1c3150" d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"/>
                    </svg> 
                    <span>Upload Signature</span>     
            </label>

            {/* <div className={isModal?'show': 'hidden'} >
                        <div className='report-modal-bk'></div>
                        <div className='report-apply-box'>
                            <div className='apply-box-comp'>
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handelOnClickX}>
                                <path fill='#1c3150' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>

                                <span className='bold navy-font'>Are you sure you are done?</span>

                                <div className='apply-box-btns'>
                                    <button className='button-size-std gray-bk navy-font' onClick={handelOnClickX}>No</button>
                                    <button className='button-size-std navy-bk white-font' onClick={onSubmit}>Yes</button>
                                </div>
                            </div>

                        </div>
                    </div> */}

            <button className='button-size-report-done super navy-bk white-font' onClick={handelOnClick} type='submit'>Done</button>
        
        </div>
        </form>
        {allowNavigate && <Navigate to={`/CompSuperStdReport/${props.id}`}/>}

    </>
  )
}

export default CardFillReport