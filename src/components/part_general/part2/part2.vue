<script setup lang="ts">
import leclerc from './leclerc.vue';
import zoodefi from './zoodefi.vue';
</script>

<template>
    <section class="Base_Part2">
        <h2>Mes Expériences Pro</h2>

        <leclerc  />
        <br/>
        
        <br/>
        <zoodefi  />

                <br/>

        <section class="separation">
            <div class="maxsepa"></div> 
        </section>
         <br/>

        
    </section>
</template>

<style scoped>

h2{
    text-align: center;
    width: 100%;
    justify-content: center;
    text-align: center;
    color: white;
}

.separation{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
}

div{
    background-color: var(--mainOrange);
  height: 0.2em;
  width: 6em;   

}

.maxsepa{
  height: 1em;
  width:80%;   
}

.Base_Part2{
    width: 100%;
    background-image: url("/reposit/fond/grunge-style-scratched-cracked-metal-texture-background.jpg");
    background-size: cover;

    padding-bottom: 3em;
}
</style>