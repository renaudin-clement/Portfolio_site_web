<script setup lang="ts">

</script>

<template>
    <section class="Information">
        <section class="SectionImage">
            <section class="ContainerImage">
                <img src="/reposit/icon/iut.jpg" alt="Iut Orleans">
            </section>
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
    justify-content: space-between;
    width: 100%;
    margin-top: 1em;
}

.ContainerImage{

}

.SectionImage{
    width: 13%;
    background-color: var(--GrisClaire);
    align-content: center;
    text-align: center;
    border-radius: 16px;
    padding: 1em;
}


.ContainerInfoText{
    width: 77%;
    border-radius: 16px;
    background-color: var(--GrisClaire);
    align-content: center;
    padding: 1em;
}

img {
    height: 100%;
    width: 10em;
}
</style>