<script lang="ts">

</script>

<template>
    <header>
        <section>
        <h1> Renaudin Clément</h1>
        </section>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Demo</a></li>
                <li><a href="">Projets</a></li>
                <li><a href="">Contacts</a></li>
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
    color: orangered;
}

div{
    background-color: orangered;
    width: 100%;
    height: 1em;
}


</style>