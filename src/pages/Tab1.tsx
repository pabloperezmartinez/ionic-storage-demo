import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { Repository, useStorage } from '../hooks/useStorage';

const Tab1: React.FC = () => {
  // usa 'useStorage' para inicializar la lista de repositorios
  let {repos, loadRepos} = useStorage();

  useIonViewWillEnter(() => {
    loadRepos()
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          { repos.map((repo, key) => (
            <IonItem>
              <IonThumbnail slot='start'>
                <img src={repo.imageUrl} alt={repo.name} />
              </IonThumbnail>
              <IonLabel>
                <h2>{repo.name}</h2>
                <p>Lenguaje: {repo.language}</p>
                <p>Propietario: {repo.owner}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
