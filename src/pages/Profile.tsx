import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonButton, IonActionSheet} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Wazzap!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/img/mobile.jpg" />
      <IonCardHeader>
        <IonCardTitle>Mobile legends</IonCardTitle>
        <IonCardSubtitle>Pro</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Jm is my name, late game is my game</IonCardContent>
      <IonButton id="present-alert">Push me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Hi"
        subHeader="ML is my game, late game is my game"
        message="Gofrey is on fire like ashes."
        buttons={['Action']}
      ></IonAlert>
      <IonButton id="open-action-sheet">Open</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>
    </IonCard>
        <ExploreContainer name="" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
