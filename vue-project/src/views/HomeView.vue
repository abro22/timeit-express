<script setup>

import router from '@/router';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { store } from '../store.js'


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

      document.cookie = json.token

      store.username = json.user[0].username
      store.email = json.user[0].email
      store.role = json.user[0].role
      store.password = json.user[0].password
      store.profilepic = json.user[0].profilepic
      router.push("/welcome")
    })
    .catch(error => {
      console.log(error)
    })
}


</script>





<template>
  <div class="background ">

    <div class="centerContainer">

      <div class="container">

        <div class="headerStyle">
          Time It
        </div>


        <br><br>
        <div class="inputPosition">
          <input v-model="email" type="text" placeholder="email">
          <input v-model="password" type="text" placeholder="password">
        </div>
        <br><br>
        <div class="buttonPosition">
          <button @click="login">Login</button>


          <button @click="$router.push('/register')">Register</button>
        </div>

      </div>
    </div>
  </div>
</template>




<style scoped>
.headerStyle {

  display: flex;
  flex-direction: column;
  align-items: center;
  animation: glow 10s ease-in infinite;
  width: 70%;
  /* padding: 20px; */
  font: 6rem lemon;
  text-transform: uppercase;
  color: #f0edaa
}




@keyframes glow {

  0%,
  100% {
    text-shadow: 0 0 40px red;
  }

  25% {
    text-shadow: 0 0 45px red;
  }

  50% {
    text-shadow: 0 0 50px red;
  }

  75% {
    text-shadow: 0 0 55px red;
  }
}


.container {


  margin-bottom: 20%;
  box-shadow: 15px 15px black;

  font-family: "lemon";
  height: 80vh;
  width: 50vw;
  background-color: #4169e1;
  display: flex inline;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  border-radius: 20%;
  border: 6px solid black;
  background-image: url(https://cdn.pixabay.com/photo/2018/03/13/11/26/clock-3222267_1280.jpg);
}




.background {
  background-color: lightseagreen;
  height: 100%;


}

button {


  width: 100%;

  font: 20px lemon;
  text-transform: uppercase;

  color: white;

  background-color: #4169e1;
  /* background-image: linear-gradient(to right, #f0edaa, pink); */
  text-align: center;
  border-radius: 5px;
  width: fit-content;
  height: 40px;
  border: 2px solid black;

}

.buttonPosition {
  display: flex;
  justify-content: space-evenly;
  gap: 2%;

}


.inputPosition {
  display: flex;
  flex-direction: column;
  justify-content: center;

}
</style>