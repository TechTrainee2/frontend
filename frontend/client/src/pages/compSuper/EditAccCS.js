import React, { useEffect, useState } from "react";
import NavbarEditAcc from '../../component/compSuper/NavbarEditAcc'
import CardEditProfile from '../../component/compSuper/CardEditProfile'
import CardEditContact from '../../component/compSuper/CardEditContact'
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import { Navigate } from 'react-router-dom';


function EditAccCS() {
  // Grab the parameter from the url
  let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});
  let [allowNavigate, setAllowNavigate] = useState(false);


  let [isSameUser, setIsSameUser] = useState(false);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);

  let [data,setData]=useState({
    'phone':'',
    'address':'',
    'role':'',})

    const [selectedImage1, setSelectedImage1] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [selectedPdf, setSelectedPdf] = useState(null);
    
    const onImage1Change = event => {
      setSelectedImage1(event.target.files[0]);
    };
    
    const onImage2Change = event => {
      setSelectedImage2(event.target.files[0]);
    };

    
    const onFileUpload = async () => {
      const formData = new FormData();
      if (selectedImage1) {
        formData.append('img', selectedImage1); // 'img1' should match the field name expected by your server
      }
      if (selectedImage2) {
        formData.append('img_bk', selectedImage2); // 'img2' should match the field name expected by your server
      }
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/companysuperprof/${user.id}`, {
          method: 'PATCH',
          body: formData,
        });
        if (!res.ok) {
          throw new Error('Failed to upload file');
        }
        const data = await res.json();
        // console.log(data);
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

  // when the page loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/companysuperprof/${user.id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });


        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        
        const profileData = await res.json();
        
        // Set profile state after data is fetched
        setProfile(profileData)
        setExtradt(profileData.company_supervisor)

        if (user.id == id) {
          setIsSameUser(true);
        }
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [user.id,id]); // Include dependencies in the dependency array
  
  const onSubmit = async (e) => {
    e.preventDefault();
  
    // Create an object that only includes fields from data that are not empty strings
    const nonEmptyData = Object.entries(data).reduce((newData, [key, value]) => {
      if (value !== '') {
        newData[key] = value;
      }
      return newData;
    }, {});
  
    // Use nonEmptyData in your fetch request
    try {
      const res2 = await fetch(`http://127.0.0.1:8000/users/companysuperprof/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(nonEmptyData),
      });
      if (!res2.ok) {
        throw new Error("Failed to fetch data");
      }
      const Data = await res2.json();
      console.log(user.id);
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <>
    {loading ? (
      <>Spinner</>
    ) : (
    <>
    <NavbarEditAcc id={user.id}/>
    {profile && (
      <form onSubmit={onSubmit}>
        <CardEditProfile profile={profile} extra={extradt} isSameUser={isSameUser} onChange={onChange}
        onImgChange1={onImage1Change} 
        onImgChange2={onImage2Change}  
        onClick ={onFileUpload}
        />
        <CardEditContact profile={profile} extra={extradt} isSameUser={isSameUser} onChange={onChange}/>
      </form>)}
      {allowNavigate && <Navigate to={`/CompSuperAcc/${user.id}`}/>}
      </>
      )}
      </>
      )
    }

export default EditAccCS