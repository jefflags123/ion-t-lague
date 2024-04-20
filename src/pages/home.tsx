import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonList,
} from '@ionic/react';
import { pulseOutline, calculatorOutline, readerOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; text: string }[]>([]);

  const addTask = (text: string) => {
    const newTask = { id: Date.now(), text };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <IonList>
      <IonItem>
        <IonInput placeholder="Add a task" onIonChange={(e) => addTask(e.detail.value!)} />
      </IonItem>
      {tasks.map((task) => (
        <IonItem key={task.id}>
          <IonLabel>{task.text}</IonLabel>
          <IonButton fill="clear" slot="end" onClick={() => deleteTask(task.id)}>
            Delete
          </IonButton>
        </IonItem>
      ))}
    </IonList>
  );
};

const Home: React.FC = () => {
  const history = useHistory();

  const goToClickCounter = () => {
    history.push('/click_counter');
  };

  const goToCalculator = () => {
    history.push('/calculator');
  };

  const goToTodolist = () => {
    history.push('/todolist');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        <hr />
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="ion-text-center"> {/* Centering content */}
          <IonCard onClick={goToClickCounter} style={{ width: '350px', cursor: 'pointer' }} color="danger">
            <IonCardContent style={{ fontSize: '30px' }}>
              <IonIcon icon={pulseOutline} slot="start" />
              Click Counter
            </IonCardContent>
          </IonCard>

          <IonCard onClick={goToCalculator} style={{ width: '350px', cursor: 'pointer' }} color="success">
            <IonCardContent style={{ fontSize: '30px' }}>
              <IonIcon icon={calculatorOutline} slot="start" />
              Calculator
            </IonCardContent>
          </IonCard>

          <IonCard onClick={goToTodolist} style={{ width: '350px', cursor: 'pointer' }} color="success">
            <IonCardContent style={{ fontSize: '30px' }}>\
            <IonIcon icon={readerOutline} slot="start" />
              Todolist
            </IonCardContent>
          </IonCard>

          <IonCard style={{ width: '350px' }} color="light">
            <IonCardContent style={{ fontSize: '30px' }}>
              Blank
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;