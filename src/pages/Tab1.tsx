import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useStorage } from '../hooks/useStorage';
import { key } from 'ionicons/icons';

const Tab1: React.FC = () => {
  // usa 'useStorage' para inicializar la lista de repositorios
  const {repos} = useStorage();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          { repos.map((repo, key) => (
            <p>Prueba</p>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
