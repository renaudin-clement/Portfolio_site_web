<script lang="ts">

</script>

<template>
    <header>
        <section>
        <h1> Renaudin Clément</h1>
        </section>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/Demo">Demo</router-link></li>
                <li><router-link to="/projets">Projets</router-link></li>
                <li><router-link to="/contacts">Contacts</router-link></li>
            </ul>
        </nav>
        <div></div>
    </header>
</template>

<style scoped>

header{
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-content: center;
  width: 100%;
  height: 100%;
  background-color: #403e3e;
}

section{
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 2em;
    width: 48%;
}

section> h1{
    font-size: 1em;
}

nav{
    width: 50%;
    display: flex;
    justify-content: right;
    height: 100%;
}

ul{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}

li{
    display: flex;
    align-items: center;
    width: 100%;
}

li>a, h1{
    color: var(--mainOrange);
}

div{
    background-color: var(--mainOrange);
    width: 100%;
    height: 1em;
}


</style>