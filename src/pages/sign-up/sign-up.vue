<script>
import TopNavbar from '../../components/nav-bar.vue'
export default {
  components: {
    TopNavbar,
  },

  data() {
    return {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp',
    };
  },

  mounted() {
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById("password-confirm");
    const passwordMatch = document.getElementById("password-match");
    const passwordMismatch = document.getElementById("password-mismatch");

    const checkPasswordMatch = () => {
      if (password.value === passwordConfirm.value) {
        password.style.backgroundColor = "rgba(39, 245, 76, 0.38)";
        passwordConfirm.style.backgroundColor = "rgba(39, 245, 76, 0.38)";
        passwordMatch.classList.remove("hidden");
        passwordMismatch.classList.add("hidden");
      } else {
        password.style.backgroundColor = "rgba(245, 39, 39, 0.38)";
        passwordConfirm.style.backgroundColor = "rgba(245, 39, 39, 0.38)";
        passwordMatch.classList.add("hidden");
        passwordMismatch.classList.remove("hidden");
      }
    };

    password.addEventListener("keyup", checkPasswordMatch);
    passwordConfirm.addEventListener("keyup", checkPasswordMatch);
  }
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
                Your Name
              </label>
              <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe">
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="email">
                Your Email
              </label>
              <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com">
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="password">
                Password
              </label>
              <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="Password">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="password-confirm">
                Confirm Password
              </label>
              <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password-confirm" type="password" placeholder="Confirm Password">
              <span id="password-match" class="hidden text-sm text-green-500 mt-1">Passwords match!</span>
              <span id="password-mismatch" class="hidden text-sm text-red-500 mt-1">Passwords do not match.</span>
            </div>
            <div class="flex justify-center">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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