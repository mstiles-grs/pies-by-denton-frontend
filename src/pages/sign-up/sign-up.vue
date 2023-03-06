<script>
import { ref } from 'vue'
import axios from '@/axios.js'

import TopNavbar from '@/components/nav-bar.vue'

export default {
  components: {
    TopNavbar,
  },

  setup() {
    const first_name = ref('')
    const last_name = ref('')
    const user_name = ref('')
    const email = ref('')
    const password = ref('')
    const passwordConfirm = ref('')
    const passwordMatch = ref(false)
    const submitting = ref(false)
    const error = ref('')

    const checkPasswordMatch = () => {
      passwordMatch.value = password.value === passwordConfirm.value
    }

    const registerUser = async () => {
      error.value = ''
      submitting.value = true



      try {
        const response = await axios.post('/create/user', {
          first_name: first_name.value,
          last_name: last_name.value,
          user_name: user_name.value,
          email: email.value,
          password: password.value,
        })

        console.log('yes dude!',response.data)

        // reset form fields and state
        first_name.value = ''
        last_name.value = ''
        user_name.value = ''
        email.value = ''
        password.value = ''
        passwordConfirm.value = ''
        passwordMatch.value = false
        submitting.value = false
      } catch (err) {
        console.error(err)
        error.value = err.message
        submitting.value = false
      }
    }

    return {
      first_name,
      last_name,
      user_name,
      email,
      password,
      passwordConfirm,
      passwordMatch,
      submitting,
      error,
      checkPasswordMatch,
      registerUser,
    }
  },
}
</script>

<template>
  <div>
    <TopNavbar />
  </div>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="container mx-auto p-6 md:p-12">
      <div class="md:flex md:items-center">

        <!-- Image -->
        <div class="md:w-1/2">
          <img class="w-full h-auto" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="Sample image">
        </div>

        <!-- Form -->
        <div class="md:w-1/2 md:pl-10">
          <h1 class="text-3xl font-bold mb-6">Sign up</h1>

          <form>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="name">
                Your First Name
              </label>
              <input v-model="first_name" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John">
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="name">
                Your Last Name
              </label>
              <input v-model="last_name" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Doe">
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="name">
                User Name
              </label>
              <input v-model="user_name" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Mr_J_D">
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="email">
                Your Email
              </label>
              <input v-model="email" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com">
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="password">
                Password
              </label>
              <input v-model="password" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" placeholder="Password" @input="checkPasswordMatch">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="password-confirm">
                Confirm Password
              </label>
              <input v-model="passwordConfirm" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password-confirm" type="password" placeholder="Confirm Password" @input="checkPasswordMatch">
            <span v-if="passwordMatch" class="text-sm text-green-500 mt-1">Passwords match!</span>
            <span v-if="!passwordMatch" class="text-sm text-red-500 mt-1">Passwords do not match.</span>
            </div>
            <div class="flex justify-center">
              <button @click.prevent="registerUser" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.card-body {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card-body .row {
  width: 100%;
}

.card-body .col-xl-5 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.card-body .col-xl-7 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.card-body .col-xl-7 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>