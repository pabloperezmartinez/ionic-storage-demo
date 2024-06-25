import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import axios from 'axios';
import { useState } from 'react';
import { RepositoryItem } from '../interfaces/RepositoryItem';

const Tab1: React.FC = () => {
  const [repos, setRepos] = useState<RepositoryItem[]>([]);
  const loadRepos = async () => {
    try {
      const response = await axios.get('https://api.github.com/user/repos',{
        headers: {
          Authorization: "Bearer "
        }
      });
      const reposData: RepositoryItem[] = response.data.map((repo: any) => ({
        name: repo.name,
        language: repo.language,
        owner: repo.owner.login,
        imageUrl: repo.owner.avatar_url,
        description: repo.description
      }));
      setRepos(reposData);
    } catch (error) {
      console.error('Error fetching repos:', error);
    }
  };

  useIonViewWillEnter(() => {
    loadRepos();
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
                <p>{repo.description}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
