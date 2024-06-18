import { useEffect, useState } from "react";
import { Storage } from "@ionic/storage";

const REPOS_kEY = 'my-repos'

export interface Repository {
    name: string;
    imageUrl: string;
    owner: string;
    language: string; 
}

export function useStorage() {

    const [store, setStore] = useState<Storage>();
    const [repos, setRepos] = useState<Repository[]>([]);

    useEffect(() => {
        const initStorage = async () => {
            const newStore = new Storage({
                name: 'profeshorDB'
            });
            const store = await newStore.create()
            setStore(store);

            const storedRepos = await store.get(REPOS_kEY) || [];
            setRepos(storedRepos)
        }
        initStorage();
    }, []);

    const addRepo = async (repo: Repository) => {
        repos.push(repo)
        console.log(repos);
        store?.set(REPOS_kEY, repos);
    }

    return {repos, addRepo}
}