<script setup lang="ts">

</script>

<template>
    <section class="Information">
        <section class="ContainerInfoText">
            <h2>Bienvenue</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni facere, eum quaerat enim harum quo
                quisquam sapiente ex ipsa consectetur, qui obcaecati asperiores ratione nihil sequi hic magnam. Optio.
            </p>
        </section>
        <section class="ContainerImage">
            <img src="/reposit/icon/meV2.jpg" alt="Clement renaudin">
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
    background-color: var(--GrisClaire);
    
}

.ContainerInfoText{
    width: 75%;
    background-color: var(--GrisClaire);
}

img {
    height: 100%;
  width: 100%;
}
</style>