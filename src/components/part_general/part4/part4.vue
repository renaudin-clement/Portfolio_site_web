<script setup lang="ts">

</script>

<template>
    <section class="Base_Part4">
        <h2>Ma Selection de Projets</h2>

        <section class="GroupProjet">
            <router-link to="projets">
                <img src="/reposit/project/Django.png" alt="projets Django">
            </router-link>

             <router-link to="projets">
                <img src="/reposit/project/journaliste.png" alt="projets journaliste">
            </router-link>

             <router-link to="projets">
                <img src="/reposit/project/leclercAllonnes.png" alt="projets leclercAllonnes">
            </router-link>


             <router-link to="projets">
                <img src="/reposit/project/Trisln.png" alt="projets Trisln">
            </router-link>

             <router-link to="projets">
                <img src="/reposit/project/zoodefis.png" alt="projets zoodefis">
            </router-link>
            
            <router-link to="projets">
                <img src="/reposit/project/NestJsApp.png" alt="projets NestJsApp">
            </router-link>
            
            
            
            
        </section>

    </section>
</template>

<style scoped>
h2 {
    text-align: center;
    width: 100%;
    justify-content: center;
    text-align: center;
    color: white;
}

.GroupProjet {
    display: grid;
    padding-left: 3em;
    padding-right: 3em;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
}

.GroupProjet img {
    width: 100%;
    height: 8em;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.35s ease;
}


.GroupProjet img:hover {
    transform: scale(1.08);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    filter: brightness(1.1);
    z-index: 2;
}


.GroupProjet:has(img:hover) img:not(:hover) {
    filter: brightness(0.5);
    transform: scale(0.97);
}

.Base_Part4 {
    width: 100%;
    background-color: var(--noir);
    background-image: url("/reposit/fond/wave-red-background-abstract-with-modern-style-gradient/ayangku_5.jpg");
    background-size: inherit;
    padding-bottom: 3em;
}
</style>