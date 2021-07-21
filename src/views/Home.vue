<template>
  <div class="home">
    <div class="list">
      <li v-for="whisper in orderBy(whispers,'date',-1)" :key="whisper.id" class="item">
        
        <!-- ここを追加 -->
        <div class="user-box">
          <div 
            class="avatar"
            :style="'background-image: url('+url+')'"
          >
          </div>
          <p class="user-name">{{whisper.uid}}</p>
        </div>
        <div class="content" v-html="whisper.content">
        </div>
        <!-- ここまで追加 -->
        
      </li>
    </div>
  </div>
</template>

<script>
import { db } from '../main'

import Vue2Filters from 'vue2-filters' 

export default {
  name: 'home',
  data () {
    return {
      whispers: []
    }
  },
  firestore () {
    return {
      whispers: db.collection('whispers')
    }
  },
  components: {
  },
  
  // ここを追加
  mixins: [Vue2Filters.mixin] 
}
</script>
