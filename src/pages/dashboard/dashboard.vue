<script>
import { ref } from 'vue';
import axios from '@/axios.js'
import TopNavbar from '@/components/nav-bar.vue'

export default {
  components: {
    TopNavbar,
  },


  setup() {
    const email = ref('');
    const password = ref('');


  },
};
</script>

<template>
    <div>
        Hi
    </div>
</template>
