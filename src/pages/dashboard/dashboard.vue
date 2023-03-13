<script>
import { ref, onMounted } from 'vue';
import axios from '@/axios.js';
import UserNav from '@/components/user-nav.vue';


export default {
  components: {
    UserNav,
  },
  setup() {
    const items = ref([]);

    onMounted(async () => {
      axios.get('/user/dashboard')
      try {
    //     const sessionId = $cookies.get('pga4_session')
    // console.log(sessionId)
      } catch (error) {
        console.error(error);
      }
    });


    return {
      items,
    };
  },
};
</script>

<template>
  <div>
    <UserNav />
  </div>

  <div class="h-screen w-screen flex justify-center items-center">
    <div ref="grid" class="grid-stack" :data-gs-col="12" :data-gs-row-height="30">
      <div v-for="item in layout" :key="item.i" :data-gs-x="item.x" :data-gs-y="item.y" :data-gs-width="item.w" :data-gs-height="item.h">
        <div class="grid-stack-item-content bg-gray-300 p-4 rounded-lg shadow-lg">
          {{ item.i }}
        </div>
      </div>
    </div>
  </div>
</template>
