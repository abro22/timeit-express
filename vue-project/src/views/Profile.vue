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

        <!-- <h1 class="timeitposition header">Time It</h1> -->

        <div class="centerContainer">


            <div class="container">

                <div>
                    <h1 class="profile">Profile</h1>
                </div>

                <div>


                    <br><br>

                    <div>
                        <img :src=imageURL class="image">
                    </div>

                    <br>
                    <br>
                    <div class="inputPosition">
                        <input v-model="imageURL" type="text" placeholder="image url" id="image-input">
                        <label for="image-input"></label>
                    </div>
                    <br>
                    <div class="buttonPosition">
                        <button @click="upload" class="buttonColor big-btn">Update</button>

                    </div>
                </div>
                <br>
                <br>


                <div class="buttonPosition">

                    <button class="big-btn" @click="$router.push('/welcome')">Back</button>

                    <button class="big-btn" @click="$router.push('/')">Logout</button>
                </div>

            </div>

        </div>

    </div>
</template>

<style>
.pinkWord {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: glow 10s ease-in infinite;
    width: 70%;
    padding-left: 15%;
    font: 17px lemon;
    text-transform: uppercase;
    color: lightpink
}

/* .blueWord {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: glow 10s ease-in infinite;
    width: 70%;

    font: 17px lemon;
    text-transform: uppercase;
    color: lightskyblue
} */


.clockButton {
    display: flex;
    flex-direction: column;
    float: left;

}

.pinkClock {
    padding-top: 100px;
    height: 15rem;
    width: 15rem;
    transform:
        perspective(800px) rotateY(5deg) scale(0.9) rotateX(10deg);
    filter: drop-shadow();
    /* opacity: 0.5; */
    transition: 0.2s ease all;

    &:hover {
        transform:
            perspective(800px) rotateY(-15deg) translateY(-50px) rotateX(10deg) scale(1);
        /* filter: drop-shadow(); */
        opacity: 1;
    }

    padding-right: 10%;

}





.inputPosition {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

img {

    display: inline-block;

}

.image {
    background-color: white;
    border: solid 10px #f0edaa;
    height: 10rem;

    width: 10rem;
}


#background {
    background-color: lightseagreen;
    height: 100%;


}

.profile {

    display: flex;
    flex-direction: column;
    animation: glow 10s ease-in infinite;
    width: 70%;
    font: 6rem lemon;

    text-transform: uppercase;
    color: #f0edaa;
    transform:
        perspective(800px) rotateY(5deg) scale(0.9) rotateX(10deg);
    filter: drop-shadow();

    transition: 0.2s ease all;

    &:hover {
        transform:
            perspective(800px) rotateY(-15deg) translateY(-50px) rotateX(10deg) scale(1);

        opacity: 1;
    }
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



/* .headerStyle {
    display: flex;
    flex-direction: columns;

    align-items: center;
    justify-content: center;
} */

.buttonPosition {
    display: flex;
    justify-content: space-evenly;
}

button {
    width: 100%;

    font: 20px lemon;
    text-transform: uppercase;

    color: white;

    background-color: #4169e1;

    text-align: center;
    border-radius: 5px;
    width: fit-content;
    height: 40px;
    border: 2px solid black;
}

.big-btn {
    width: fit-content;
    height: 40px;
}
</style>