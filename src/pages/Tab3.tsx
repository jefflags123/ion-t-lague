import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [result, setResult] = useState<number | string>('');

  const add = (x: number, y: number) => {
    return x + y;
  }

  const subtract = (x: number, y: number) => {
    return x - y;
  }

  const multiply = (x: number, y: number) => {
    return x * y;
  }

  const divide = (x: number, y: number) => {
    if (y === 0) {
      return "Error! Division by zero.";
    } else {
      return x / y;
    }
  }

  const handleCalculate = (operator: string) => {
    const num1 = parseFloat((document.getElementById('num1') as HTMLInputElement).value);
    const num2 = parseFloat((document.getElementById('num2') as HTMLInputElement).value);

    let result: number | string = '';

    switch (operator) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
      default:
        result = "Invalid operator";
    }

    setResult(result);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonLabel position="stacked">Enter first number:</IonLabel>
          <IonInput id="num1" type="number" />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Enter second number:</IonLabel>
          <IonInput id="num2" type="number" />
        </IonItem>
        <IonButton onClick={() => handleCalculate('+')}>Add</IonButton>
        <IonButton onClick={() => handleCalculate('-')}>Subtract</IonButton>
        <IonButton onClick={() => handleCalculate('*')}>Multiply</IonButton>
        <IonButton onClick={() => handleCalculate('/')}>Divide</IonButton>
        <div>Result: {result}</div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
