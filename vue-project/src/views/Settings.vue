<script setup>

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
// window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }



</script>

<template>
    <div class="centerContainer">
        <div id="container">
            <h1>Time It</h1>

            <div>
                <img src="" alt="white gloves logo">
            </div>

            <h1>Settings</h1>

            <div>
                <form name="role" id="role1" action="/action_page.php">
                    <p>Role</p>
                    <select name="role" id="role1">
                        <option value="" selected="selected">Cleaner</option>
                        <option value="" selected="selected">Maintenace</option>
                    </select>
                </form>
                <br>
                <input type="checkbox">Text Reminders
                <br>
                <input type="checkbox">Email Reminders
                <br>
                <button>Update</button>


            </div>
            <br>



            <button @click="$router.push('/welcome')">Back</button>


            <h3>Date</h3>

            <h3>Time</h3>

        </div>
    </div>
</template>

<style>
.dropdown-content a:hover {
    background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
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
</style>