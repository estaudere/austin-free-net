import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { initializeApp } from "firebase/app";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import './Tab1.css';
import afn from './AFN-pic.png'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5Vwswt2FVUK7uNMAI0B5SnFunxECwuKM",
  authDomain: "austin-free-net.firebaseapp.com",
  databaseURL: "https://austin-free-net-default-rtdb.firebaseio.com",
  projectId: "austin-free-net",
  storageBucket: "austin-free-net.appspot.com",
  messagingSenderId: "320651624356",
  appId: "1:320651624356:web:04af34c344ac2fb8a5cb31",
  measurementId: "G-7LCLTE5B5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Tab1: React.FC = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDocs(collection(db, "resources"));
      setData(result.docs.map(doc => doc.data()));
      console.log(result);
    };
    fetchData();
  }, [])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">News</IonTitle>
          </IonToolbar>
        </IonHeader>
        <img src={afn} />
        {/* {data.map((doc:any) => <div>{doc.title}</div>)} */}
        {/* <ExploreContainer name="Tab 1 page2" /> */}        
        <h1 style={{color: '#6aa2fc', paddingLeft: 15}}>Our Story</h1>
        <h3 style={{paddingLeft: 15, paddingRight: 10}}>Incorporated in 1995 by legendary community leaders, Sue Beckwith and Ana Sisnett (1952-2009), Austin Free-Net was the first organization to wire city libraries and put computers in schools and community centers around Austin. Since our founding, the need for digital skills and access to technology has only grown stronger.</h3>
        <h3 style={{paddingLeft: 15, paddingRight: 10}}>Austin Free-Net is focused on breaking down barriers to access and education by continuing to manage integral public access computer labs throughout the city. These public access computer labs offer a variety of basic digital skills education classes and workshops in both physical and virtual environments. Additionally, we organize device donation procurement in partnership with the City of Austin's Community PC Program which directly benefits community members and organizations who are in need of computer equipment. Our Digital Navigator program, which launched in 2021, meets the demand of the community's desire for one on one basic digital assistance to affordable internet access, device acquisition, technical skills, communication and application support.</h3>
        <h3 style={{paddingLeft: 15, paddingRight: 10}}>For over 26 years and counting, we continue to carry on Ana Sisnett's legacy by working with the community to provide digital access and education to all with a heavy emphasis on our most underserved community members.</h3>
        <br></br>
        <br></br>
        <h1 style={{color: '#6aa2fc', paddingLeft: 15}}>Donate</h1>
        <h3 style={{paddingLeft: 15, paddingRight: 10}}>Your contribution will directly impact bridging the digital divide and helping someone excel in the digital age. Thank you for your support of everything Austin Free-Net is doing! All gifts are 100% tax deductible.</h3>
        <br></br>
        <a style={{paddingLeft: 50}} href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=HPV6ZMGRW5VWU">
          <button style={{ backgroundColor: "#6aa2fc", width: "350px", height: "50px", color: "black", fontSize: "20px" }}>DONATE VIA PAYPAL</button>
        </a>
        <br></br>
        <br></br>
        <a style={{paddingLeft: 50}} href="https://givebutter.com/austin-free-net">
          <button style={{ backgroundColor: "#6aa2fc", width: "350px", height: "50px", color: "black", fontSize: "20px" }}>DONATE VIA VENMO</button>
        </a>
        <br></br>
        <br></br>
        <a style={{paddingLeft: 50}} href="https://givebutter.com/austin-free-net">
          <button style={{ backgroundColor: "#6aa2fc", width: "350px", height: "50px", color: "black", fontSize: "20px" }}>DONATE VIA CARD</button>
        </a>
        <br></br>
        <br></br>
        <h1 style={{color: '#6aa2fc', paddingLeft: 15}}>Volunteer</h1>
        <h3 style={{paddingLeft: 15, paddingRight: 10}}>Can you send an e-mail? Do you like lending a hand? Do you have experience in a technology career? Any of these items qualifies you to volunteer! Volunteers are our lifeblood and there are many ways that you can help.</h3>
        <br></br>
        <a style={{paddingLeft: 50}} href="https://docs.google.com/forms/d/e/1FAIpQLSfRf-BVusPsC3NcPw-cAImhSRy1MImOV1IIZLAqFyDCQhLJQw/viewform?vc=0&amp;c=0&amp;w=1">
          <button style={{ backgroundColor: "#6aa2fc", width: "350px", height: "50px", color: "black", fontSize: "20px" }}>VOLUNTEER APPLICATION FORM</button>
        </a>
        <br></br>
        <br></br>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
