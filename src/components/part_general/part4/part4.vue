<script setup lang="ts">

</script>

<template>
    <section class="Base_Part4">
        <h2>Ma Selection de Projets</h2>

        <section class="GroupProjet">
            <img src="/reposit/project/Django.png" alt="projet Django">
            <img src="/reposit/project/journaliste.png" alt="projet journaliste">
            <img src="/reposit/project/leclercAllonnes.png" alt="projet leclercAllonnes">
            <img src="/reposit/project/Trisln.png" alt="projet Trisln">
            <img src="/reposit/project/zoodefis.png" alt="projet zoodefis">
            <img src="/reposit/project/NestJsApp.png" alt="projet NestJsApp">
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
    background-color: var(--noirBalise);
    margin-bottom: 7em;
    padding-bottom: 3em;
}
</style>