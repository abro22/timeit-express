<script setup>

import router from '@/router';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


let email = ref('')
let password = ref('')

function login() {
  const body = {
    "email": email.value,
    "password": password.value
  }

  fetch("http://localhost:3000/login", {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    method: "POST"
  })

    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log(json)
      document.cookie = json
      router.push("/welcome")
    })
    .catch(error => {
      console.log(error)
    })
}


</script>





<template>
  <div class="centerContainer">
    <div id="container">
      <div>
        Time It
      </div>


      <div>
        <img src="" alt="white gloves logo">
      </div>

      <div>
        <button @click="login">Login</button>

        <button @click="$router.push('/register')">Register</button>
      </div>

      <div>
        <input v-model="email" type="text" placeholder="email">
        <input v-model="password" type="text" placeholder="password">
      </div>
    </div>
  </div>
</template>




<style scoped>
#container {

  font-family: "lemon";
  height: 80vh;
  width: 50vw;
  background-color: #4169e1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  border-radius: 30%;
  border: 10px solid grey;
}

.centerContainer {
  display: flex;
  padding-top: 5%;


  justify-content: center;
}
</style>