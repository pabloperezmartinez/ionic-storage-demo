import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { Repository, useStorage } from '../hooks/useStorage';
import { code, image, logoGithub, person } from 'ionicons/icons';

const Tab2: React.FC = () => {
  // usa 'useStorage' para inicializar la lista de repositorios

  const {repos, addRepo} = useStorage();

  const repoData: Repository = {
    name: '',
    imageUrl: '',
    owner: '',
    language: '',
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
    await addRepo(repo)
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
            <IonIcon icon={image} slot='start'/>
              <IonInput value={repoData.imageUrl} onIonChange={(e) => setRepoImage(e.detail.value!)} label='Imagen de repositorio' labelPlacement='floating' placeholder='https://example.org/my_image.png'/>
            </IonItem>
            <IonItem>
              <IonIcon icon={person} slot='start'/>
              <IonInput value={repoData.owner} onIonChange={(e) => setOwner(e.detail.value!)} label='Propietario del repositorio' labelPlacement='floating' placeholder='profeshor'/>
            </IonItem>
            <IonItem>
              <IonIcon icon={code} slot='start'/>
              <IonInput value={repoData.language} onIonChange={(e) => setLang(e.detail.value!)} label='Lenguaje del repositorio' labelPlacement='floating' placeholder='PHP'/>
            </IonItem>
            <IonButton onClick={() => createRepo(repoData)}>Guardar</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
