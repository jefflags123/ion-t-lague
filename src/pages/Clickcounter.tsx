// Click-counter.tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';

const Click_counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" style={{ backgroundColor: 'lightblue' }}>
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <p>Click the button</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <IonButton color= "danger" onClick={incrementCounter}>Click Me</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <p>Counter: {counter}</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <IonButton color= "success" onClick={resetCounter}>Reset</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Click_counter;