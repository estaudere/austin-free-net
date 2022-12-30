import { IonCard, IonThumbnail, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './ResourcesPage.css';
import { initializeApp } from "firebase/app";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

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

const Tab3: React.FC = () => {
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
          <IonTitle>Resources</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Resources</IonTitle>
          </IonToolbar>
        </IonHeader>
        {data.map((doc:any) => 
          <IonCard>
            <img className="thumbnail" alt="" src={doc.thumbnail}></img>
            <IonCardHeader>
              <IonCardTitle>{doc.title}</IonCardTitle>
              <IonCardSubtitle>{doc.date_posted.toDate().toDateString()}</IonCardSubtitle>
            </IonCardHeader>

            <IonButton href={doc.link} fill="clear">More</IonButton>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
