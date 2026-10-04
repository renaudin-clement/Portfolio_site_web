<script setup lang="ts">

</script>

<template>
    <section class="Information">
        <section class="ContainerImage">
            <img src="/reposit/icon/iut.png" alt="Iut Orleans">
        </section>
        <section class="ContainerInfoText">
            <h2>But Informatique</h2>
            <p>parcours réalisation d'applications : conception, développement, validation</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut. Tempora repellendus explicabo nisi perspiciatis et! Eum dolore sunt repudiandae nihil? Id sed facilis consectetur possimus perferendis quaerat omnis cumque.</p>
        </section>
    </section>
</template>

<style scoped>
.Information {
    display: flex;
    width: 100%;
}

.ContainerImage{
    width: 25%;
    border-radius: 16px;
    background-color: var(--GrisClaire);
    
}

.ContainerInfoText{
    width: 75%;
    border-radius: 16px;
    background-color: var(--GrisClaire);
}

img {
    height: 100%;
  width: 100%;
}
</style>