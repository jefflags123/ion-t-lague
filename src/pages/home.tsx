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
} from '@ionic/react';
import { pulseOutline, calculatorOutline, list, todayOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './home.css';

import { speedometerOutline, calculator, pencil, chatbubble} from 'ionicons/icons';
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

  const goToQoutesGenerator = () => {
    history.push('/qoutes_generator');
  };

  const cards = [
    { id: 1, title: 'Click Counter', imageUrl: 'speedometerOutline', onClick: goToClickCounter },
    { id: 2, title: 'Calculator', imageUrl: 'calculator', onClick: goToCalculator },
    { id: 3, title: 'Todo List', imageUrl: 'pencil', onClick: goToTodolist },
    { id: 4, title: 'Qoutes Generator', imageUrl: 'chatbubble', onClick: goToQoutesGenerator },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCards, setFilteredCards] = useState(cards);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    const filtered = cards.filter(card =>
      card.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCards(filtered);
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
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          {filteredCards.map(card => (
            <IonCard key={card.id} onClick={card.onClick} style={{ width: '350px', cursor: 'pointer' }}>
              <IonCardContent style={{ height: '70px', fontSize: '30px', display: 'flex', alignItems: 'center', padding: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '20%', backgroundColor: 'var(--ion-color-primary)', padding: 0 }}>
                  <img alt="" src={card.imageUrl} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '80%', backgroundColor: 'var(--ion-color-dark)', color: 'dark', padding: 0 }}>
                  {card.title}
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;