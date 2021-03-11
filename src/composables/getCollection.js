import { ref } from "@vue/reactivity"
import { fStore } from "../firebase/config"



const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = fStore.collection(collection).orderBy('createdAt')

    collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        error.value = 'Could not fetch data'
        documents.value = null
    })
    return { documents, error }
}

export default getCollection