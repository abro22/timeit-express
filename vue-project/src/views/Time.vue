<script setup >




function getTimeStamp() {
    var now = new Date();
    return ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear() + " " + now.getHours() + ':'
        + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now.getSeconds()) : (now.getSeconds())));
}

function setTime() {
    document.getElementById('punch').textContent = getTimeStamp();
}


</script>

<template  >
    <div class="sidebar">
        <div class="d-flex align-items-start">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home"
                    type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>

                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile"
                    type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>

                <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages"
                    type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>

                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings"
                    type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
            </div>

        </div>
    </div>

    <div class="centerContainer">
        <div id="container">
            <h1 id="h1color">Time</h1>

            <div>
                <img src="" alt="white gloves logo">
            </div>

            <h3>Time It</h3>

            <div>
                <h3>Menu</h3>
                <button @click="$router.push('/timestamp')">Timestamps</button>
            </div>

            <div>
                <img src="" alt="clock">
            </div>
            <br>

            <div class="button">
                <button class="buttonColor" @click="setTime()">Clock In</button>
                <button class="buttonColor" @click="setTime()">Clock Out</button>
            </div>
            <div>
                <p id="punch"></p>
            </div>

            <br>
            <div>
                <button @click="$router.push('/welcome')">Back</button>
            </div>






            <h3>Time</h3>
        </div>
    </div>
</template>

<style scoped>
.button {
    display: flex;
    flex-direction: row;
}

.buttonColor {

    color: white;
    background-image: linear-gradient(to right, lightblue, navy, grey);
    text-align: center;
    border-radius: 5px;


}

#h1color {
    font: 800 40px Tahoma white;
    -webkit-text-fill-color: black;
    -webkit-text-stroke: 2px;

}

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

.sidebar {
    display: flex;
    flex-direction: column;
}
</style>