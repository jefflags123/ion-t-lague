import {
    //Initial Components
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
} from '@ionic/react';

// CSS
//import './profile.css';
  
  const Home: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>
            </IonToolbar>
          </IonHeader>
          <h1>Hello World<br></br>There's no place like home</h1>
        </IonContent>
      </IonPage>
    );
  };
  
  //
  export default Home;