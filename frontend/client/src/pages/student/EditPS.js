import React, { useEffect, useState } from "react";
import NavbarStdEdit from '../../component/student/NavbarStdEdit'
import CardEditProf from '../../component/student/CardEditProf'
import CardEditSkill from '../../component/student/CardEditSkill'
import CardEditCont from '../../component/student/CardEditCont'
import SmallNavbar from '../../component/student/SmallNavbar'
import EditHeader from '../../component/student/EditHeader'
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import { Navigate } from 'react-router-dom';



function EditPS() {

  // Grab the parameter from the url
  let { id } = useParams();

  let [profile, setProfile] = useState({});
  let [extradt, setExtradt] = useState({});


  let [isSameUser, setIsSameUser] = useState(false);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);

  let [data,setData]=useState({
    'bio':'',
    'phone':'',
    'address':''})

    const [selectedImage1, setSelectedImage1] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [selectedPdf, setSelectedPdf] = useState(null);
    
    const onImage1Change = event => {
      setSelectedImage1(event.target.files[0]);
    };
    
    const onImage2Change = event => {
      setSelectedImage2(event.target.files[0]);
    };
    
    const onPdfChange = event => {
      setSelectedPdf(event.target.files[0]);
    };
    
    const onFileUpload = async () => {
      const formData = new FormData();
      if (selectedImage1) {
        formData.append('img', selectedImage1); // 'img1' should match the field name expected by your server
      }
      if (selectedImage2) {
        formData.append('img_bk', selectedImage2); // 'img2' should match the field name expected by your server
      }
      if (selectedPdf) {
        formData.append('cv', selectedPdf); // 'pdf' should match the field name expected by your server
      }
    
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/stdprof/${user.id}`, {
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
    };
    






  let onChange = (e) => {
    // console.log(e.target.value);
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
        const res = await fetch(`http://127.0.0.1:8000/users/stdprof/${user.id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        // const res2 = await fetch(`http://127.0.0.1:8000/users/stdprof/${user.id}`, {
        //   method: "PATCH",
        //   headers: {
        //     Accept: "application/json",
        //   },
        //   body: JSON.stringify(data),
        // });


        // res4=res2
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        
        const profileData = await res.json();

        // if (!res2.ok) {
        //   throw new Error("Failed to fetch data");
        // }
        
        // const Data = await res2.json();
        // dispatch(getUser());
        
        // Set profile state after data is fetched
        setProfile(profileData)
        setExtradt(profileData.student)
        // setData(Data)
        
        if (user.id == id) {
          setIsSameUser(true);
          
        //  console.log(Data);
        }
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [id,user.id]); // Include dependencies in the dependency array
  
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(extradt)
  
    // Create an object that only includes fields from data that are not empty strings
    const nonEmptyData = Object.entries(data).reduce((newData, [key, value]) => {
      if (value !== '') {
        newData[key] = value;
      }
      return newData;
    }, {});
  
    // Use nonEmptyData in your fetch request
    try {
      const res2 = await fetch(`http://127.0.0.1:8000/users/stdprof/${user.id}`, {
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
      // console.log(user.id);

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
    <NavbarStdEdit id={user.id}/>
    {/* <EditHeader/>
    <SmallNavbar/> */}
    {profile && (
    <form className='large-margin-bottom-phone' onSubmit={onSubmit}>
      <CardEditProf profile={profile} extra={extradt} isSameUser={isSameUser} onChange={onChange} 
      onImgChange1={onImage1Change} 
      onImgChange2={onImage2Change}  
      onClick ={onFileUpload}
      />
      <CardEditSkill profile={profile} extra={extradt} isSameUser={isSameUser} 
      onCvChange={onPdfChange}
      />
      <CardEditCont profile={profile} extra={extradt} isSameUser={isSameUser} onChange={onChange}/>
    </form>)}
    </>
  )}
  </>
  )
}

export default EditPS