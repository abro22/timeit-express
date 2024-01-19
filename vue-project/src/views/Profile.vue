<script setup>





</script>

<template>
    <div class="centerContainer">
        <div id="container">
            <h1>Time It</h1>

            <div>
                <img src="" alt="white gloves logo">
            </div>

            <h1>Profile</h1>

            <div>
                <p>Role</p>
                <p id="role"></p>
                <br>
                <div>
                    <img :src=imageURL>
                </div>
                <div>
                    <input v-model="imageURL" type="text" placeholder="image url" id="image-input">
                    <label for="image-input">Image</label>
                </div>
                <br>

                <button>Update</button>
            </div>
            <br>



            <button @click="$router.push('/welcome')">Back</button>

            <button @click="$router.push('/')">Logout</button>


            <h3>Date</h3>

            <h3>Time</h3>

        </div>
    </div>
</template>

<style>
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