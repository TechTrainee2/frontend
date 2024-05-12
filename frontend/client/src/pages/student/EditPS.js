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
  let [allowNavigate, setAllowNavigate] = useState(false);

  let [isSameUser, setIsSameUser] = useState(false);
  // // Get the profile by id
  let { user, loading } = useSelector((state) => state.user);

  let [data,setData]=useState({
    'bio':'',
    'phone':'',
    'address':''})

    const [selectedImage1, setSelectedImage1] = useState(null);
    const [selectedImage1Url, setSelectedImage1Url] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [selectedImage2Url, setSelectedImage2Url] = useState(null);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);
    
    const onImage1Change = event => {
      if (event.target.files && event.target.files[0]) {
        const imageUrl = URL.createObjectURL(event.target.files[0]);
        setSelectedImage1Url(imageUrl);
        setSelectedImage1(event.target.files[0]);
      }
    };
    
    const onImage2Change = event => {
      if (event.target.files && event.target.files[0]) {
        const imageUrl = URL.createObjectURL(event.target.files[0]);
        setSelectedImage2Url(imageUrl);
        setSelectedImage2(event.target.files[0]);
      }
    };
    
    const onPdfChange = event => {
      if (event.target.files && event.target.files[0]) {
        const pdfUrl = URL.createObjectURL(event.target.files[0]);
        setSelectedPdfUrl(pdfUrl);
        setSelectedPdf(event.target.files[0]);
      }
    };
    
    const onSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      
      if (selectedImage1) {
        formData.append('img', selectedImage1); // 'img' should match the field name expected by your server
      }
      
      if (selectedImage2) {
        formData.append('img_bk', selectedImage2); // 'img_bk' should match the field name expected by your server
      }
      
      if (selectedPdf) {
        formData.append('cv', selectedPdf); // 'cv' should match the field name expected by your server
      }
  
      for (const key in data) {
        formData.append(key, data[key]);
      }
    
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/std/stdprof/${user.id}`, {
          method: 'PATCH',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        });
    
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        
        const profileData = await res.json();
    
      } catch (error) {
      }
      setAllowNavigate(true);
    };



  let onChange = (e) => {
    const { name, value } = e.target;
    
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/users/stdprof/${user.id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        
        const profileData = await res.json();

        setProfile(profileData)
        setExtradt(profileData.student)

        console.log(profileData);
        
        if (user.id == id) {
          setIsSameUser(true);
        }
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id,user.id]); // Include dependencies in the dependency array

  return (
    <>
    {loading ? (
      <>Spinner</>
    ) : (
      <>
    <NavbarStdEdit id={user.id}/>
    <EditHeader/>
    <SmallNavbar id={user.id}/>
    {profile && (
    <form className='large-margin-bottom-phone' onSubmit={onSubmit}>
      <CardEditProf profile={profile} extra={extradt} isSameUser={isSameUser} onChange={onChange} 
      onImage1Change={onImage1Change}
      selectedImage2Url={selectedImage2Url} 
      onImage2Change={onImage2Change}  
      selectedImage1Url={selectedImage1Url}
      id={user.id}
      
      />
      <CardEditSkill profile={profile} extra={extradt} isSameUser={isSameUser} 
      onCvChange={onPdfChange}
      selectedPdfUrl={selectedPdfUrl}

      />
      <CardEditCont profile={profile} extra={extradt} isSameUser={isSameUser} onChange={onChange}/>
    </form>)}
    {allowNavigate && <Navigate to={`/stdAcc/${user.id}`}/>}
    </>
  )}
  </>
  )
}

export default EditPS