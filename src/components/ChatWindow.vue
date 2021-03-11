<template>
    <div class="wrapper">
        <div class="chat-window">
            <div v-if="error">{{ error }}</div>
            <div viif="documents" class="messages">
                <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
                    <span class="created-at">{{ doc.createdAt }}</span>
                    <span class="name">{{ doc.name }}</span>
                    <span class="message">{{ doc.message }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed } from '@vue/runtime-core'

export default {
    setup(){
        const { documents, error } = getCollection('messages')

        const formattedDocuments = computed(() => {
            if(documents.value){
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return { ...doc, createdAt: time }
                })
            }
        })

        return { documents, error, formattedDocuments }
    }
}
</script>

<style scoped>
    .wrapper{
        margin: 10px;
        background: #fff;
        border-radius: 10px;;
    }
  .chat-window {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 10px;
    font-family: inherit;
    outline: none;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
    width: 100%;
    box-sizing: border-box;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
    box-sizing: border-box;
  }
  .messages {
    max-height: 400px;
    box-sizing: border-box;
  }
  .single{
      padding: 10px 0;
  }
</style>