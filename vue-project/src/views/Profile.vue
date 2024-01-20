<script setup>
import { ref } from 'vue';

let imageURL = ref("")

function upload() {

    fetch('http://localhost:3000/postpic', {
        headers: { "Content-Type": "application/json", "Authorization": document.cookie },
        body: JSON.stringify({ "profilepic": imageURL.value }),
        method: "POST"
    })
        .then(response => {
            if (response.status === 200) {
                alert("Image uploaded successfully!")

                console.log(response)
                return response.json()
            } else {
                alert("Something went wrong, try again!")
            }
        })

        .catch(error => {
            console.log(error)
        })
}






</script>

<template>
    <div id="background">

        <h1 class="timeitposition header">Time It</h1>

        <div class="centerContainer">


            <div class="container">

                <div class="headerStyle">
                    <h1>Profile</h1>
                </div>

                <div>
                    <p>Role</p>
                    <p id="role"></p>
                    <br>

                    <div>
                        <img :src=imageURL class="image">
                    </div>


                    <div class="inputPosition">
                        <input v-model="imageURL" type="text" placeholder="image url" id="image-input">
                        <label for="image-input"></label>
                    </div>
                    <br>

                    <button @click="upload" class="buttonColor big-btn">Update</button>
                </div>
                <br>
                <br>


                <div class="buttonPosition">

                    <button class="buttonColor big-btn" @click="$router.push('/welcome')">Back</button>

                    <button class="buttonColor big-btn" @click="$router.push('/')">Logout</button>
                </div>

            </div>

        </div>
    </div>
</template>

<style>
.inputPosition {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.imgage {
    height: 15rem;
    width: 15rem;
    display: flex;
    justify-content: space-evenly;
}

.timeitposition {
    display: flex;
    flex-direction: row;
}

#background {
    background-color: cornflowerblue;
    height: 100%;


}

.header {

    display: flex;
    flex-direction: row;
    padding: 15px;
    animation: glow 10s ease-in infinite;
    width: 100%;

    font: 60px lemon;
    text-transform: uppercase;
    color: #f0edaa;


}

.headerStyle {

    display: flex;
    flex-direction: column;
    animation: glow 10s ease-in infinite;
    width: 70%;
    /* padding: 20px; */
    font: 35px lemon;
    text-transform: uppercase;
    color: #f0edaa;

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

    font-family: "lemon";
    height: 80vh;
    width: 50vw;
    background-color: #4169e1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    border-radius: 30%;
    border: 10px solid black;
    background-image: url(https://cdn.pixabay.com/photo/2018/03/13/11/26/clock-3222267_1280.jpg);
}

.centerContainer {
    display: flex;
    padding-top: 5%;


    justify-content: center;
}



.headerStyle {
    display: flex;
    flex-direction: columns;

    align-items: center;
    justify-content: center;
}

.buttonColor {

    background-color: cornflowerblue;
    /* background-image: linear-gradient(to right, #f0edaa, pink); */
    text-align: center;
    border-radius: 5px;
    border: cornflowerblue solid 2px;
}

.buttonPosition {
    display: flex;
    justify-content: space-evenly;
}

button {
    width: 100%;

    font: 20px lemon;
    text-transform: uppercase;

    color: #f0edaa;
}

.big-btn {
    width: fit-content;
    height: 40px;
}
</style>