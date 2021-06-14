<template>
<div class="dark-mode-widget">
    <input type="checkbox" id="theme-toggle" @click="toggleDarkTheme"></input>
    <label for="theme-toggle"><span></span></label>
</div>
</template>

<script>
export default {
mounted() {
    this.checkUserPreference();
},
methods: {
    toggleDarkTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    //If dark mode is selected
    if (body.classList.contains("dark-mode")) {
        //Save user preference in storage
        localStorage.setItem("dark-theme", "true");
    //If light mode is selected
    } else {
        body.classList.remove("dark-mode");
        setTimeout(function() {
        localStorage.removeItem("dark-theme");
        }, 100);
    }
    },
    checkUserPreference(){
        //Check Storage on Page load. Keep user preference through sessions
        if (localStorage.getItem("dark-theme")) {
            document.body.classList.add("dark-mode");
            document.getElementById('theme-toggle').checked = true;
        }
    }
}
};
</script>

<style>
.dark-mode-widget {
    display: table;
    margin: 1em auto;
}
body.dark-mode {
    background: rgb(16, 16, 16);
}
body.dark-mode h1, body.dark-mode h2, body.dark-mode h3, body.dark-mode p {
    color: #f1f1f1
}
#theme-toggle {
    display: none;
}
#theme-toggle + label {
    font-size: 1rem;
    display: flex;
    width: 2em;
    border-radius: 1em;
    background-size: auto 4em;
    background-position: bottom;
    background-color: rgb(26, 26, 26);
    transition: .1s;
    border: 0.1em solid #eef3f6;
    overflow: hidden;
}
#theme-toggle + label span {
    background: #ffffff;
    border-radius: 50%;
    height: 1em;
    width: 1em;
    transform: translateX(-.125em) scale(.65);
    transition: .2s;
    cursor: pointer;
    margin-top: -.125em;
}
#theme-toggle:checked {
    font-size: 10rem;
}
#theme-toggle:checked + label {
    background-position: top;
    border-color: #181818;
}
#theme-toggle:checked + label span {
    background: transparent;
    transform: translateX(calc(100%)) scale(0.7);
    box-shadow: inset -.2875em -.2875em 0 0 #ffffff, inset -.4625em -.1625em 0 0 #ffffff;
}
</style>