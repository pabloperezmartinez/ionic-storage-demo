import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import { Repository, useStorage } from '../hooks/useStorage';
import { code, image, logoGithub, person } from 'ionicons/icons';
import { useHistory } from 'react-router'
import { RepositoryItem } from '../interfaces/RepositoryItem';

const Tab2: React.FC = () => {
  // usa 'useStorage' para inicializar la lista de repositorios
  const {repos, addRepo} = useStorage();
  const history = useHistory();

  const repoData: RepositoryItem = {
    name: '',
    imageUrl: '',
    owner: '',
    language: '',
    description: ''
  }

  const setRepoName = (name: string) => {
    repoData.name = name
  }

  const setRepoImage = (imageUrl: string) => {
    repoData.imageUrl = imageUrl
  }

  const setOwner = (owner: string) => {
    repoData.owner = owner
  }

  const setLang = (language: string) => {
    repoData.language = language
  }

  const refreshRepo = () => {
    repoData.name = '';
    repoData.imageUrl = '';
    repoData.owner = '';
    repoData.language = '';
  }

  const createRepo = async (repo: Repository) => {
    addRepo(repo).then(() => {
      history.push('/')
    }).catch((error) => {
      console.log('Existe un error de conexión', error);
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulario de repositorio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonIcon icon={logoGithub} slot='start'/>
              <IonInput value={repoData.name} onIonChange={(e) => setRepoName(e.detail.value!)} label='Nombre del repositorio' labelPlacement='floating' placeholder='mi primera chamba'/>
            </IonItem>
            <IonItem>
            <IonIcon icon={code} slot='start'/>
              <IonInput value={repoData.description} onIonChange={(e) => setRepoImage(e.detail.value!)} label='Descripción de repositorio' labelPlacement='floating' placeholder='https://example.org/my_image.png'/>
            </IonItem>
            <IonButton onClick={() => createRepo(repoData)}>Guardar</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
