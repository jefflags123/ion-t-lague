import React, { useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonSearchbar,
  IonAlert,
  IonActionSheet,
  IonAvatar,
  IonThumbnail
} from '@ionic/react';

//Dynamic data reference
import rizzCard from '../assets/img/json/rizzcard.json';

const QuoteGenerator: React.FC = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [randomIndex, setRandomIndex] =  useState<number | null>(null); // State to store random index

  // Function to generate a random index
  const generateRandomIndex = () => {
    return Math.floor(Math.random() * rizzCard.length);
  };

  // Function to generate a random message
  const renderRandomMessage = () => {
    if (randomIndex !== null) {
      return rizzCard[randomIndex].message;
    } else {
      return ''; // Return empty string if randomIndex is null
    }
  };

  // Function to handle opening of the alert
  const handleOpenAlert = () => {
    const newIndex = generateRandomIndex();
    setRandomIndex(newIndex);
    setShowAlert(true);
  };

  // Function to handle closing of the alert
  const handleAlertDismiss = () => {
    setRandomIndex(0); // Reset the index to 0
    setShowAlert(false); // Hide the alert
  };

  const goBack = () => {
    window.location.href = '/';
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quote Generator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
      </IonButtons>
      <IonContent className='ion-padding'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Quote Generator</IonTitle>
          </IonToolbar>
        </IonHeader>

        
          {/*Button Trigger*/}
          <IonGrid>
            <IonRow>
                <IonCol size="" push="">
                <IonButton id="present-alert" color="warning" expand="full" onClick={handleOpenAlert}>Click me</IonButton>
                <IonAlert
                  isOpen={showAlert}
                  onDidDismiss={handleAlertDismiss} // Call the handleAlertDismiss function when the alert is closed
                  header="Raiden Shogun"
                  subHeader=""
                  message={renderRandomMessage()}
                  buttons={['Close']}
                />
                </IonCol>
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default  QuoteGenerator;