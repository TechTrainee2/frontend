import React from 'react'
import NavbarReg from '../../component/Regestration/NavbarReg'
import CardProfBtn from '../../component/Regestration/CardProfBtn'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import user, { registerUniSuper } from '../../features/user'

export default function UniSuper() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const {user } = useSelector(state => state.user);
  const [isEmailError,setIsEmailError]= useState(false)
  const [EmailError,setEmailError]= useState([])
  const [isPasswordError,setIsPasswordError]= useState(false)
  const [PasswordError,setPasswordError]= useState([])
  let [uniSuper,setUniSuper] = useState([]);
  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name:'',
    email: '',
    password: '',
	});

  const { first_name,last_name, email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async e => {
		e.preventDefault();

    setIsPasswordError(false)
    setPasswordError([])
    setIsEmailError(false)
    setEmailError([])

		let data = await dispatch(registerUniSuper({ first_name,last_name, email, password }));
    console.log(data);
    if (Object.keys(data.payload).includes("password")){
      setIsPasswordError(true)
      setPasswordError(data.payload["password"])
    }
    if (Object.keys(data.payload).includes("email")){
      setIsEmailError(true)
      setEmailError(data.payload["email"])
    }
	};

  // // Get the profile by id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/user/universitySupervisors`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const uniSuperData = await res.json();
        // dispatch(getUser());
        
        // Set profile state after data is fetched
        setUniSuper(uniSuperData)
        console.log(uniSuperData);
        // if (user.id == id) {
        //   setIsSameUser(true);
        // }
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [user]); 
  
  return (
    <>
        <NavbarReg/>
        <div className='centerd-comp'>
        <div className='add-std-spans-btn'>
            <div className='add-std-spans'>
                <span className='bold navy-font dep-std-span'>Supervisor</span>
            </div>
            <Link to={`/RegProfForm`}>
                <button className='std-progress-btn-size navy-bk white-font bold' >Add Supervisor</button>
            </Link>
        </div>
    </div>
        {uniSuper.map((uniSuper) => (
            <CardProfBtn key={uniSuper.id} uniSuper={uniSuper} onChange={onChange} onSubmit={onSubmit}/>
        ))}
    </>
  )
}
