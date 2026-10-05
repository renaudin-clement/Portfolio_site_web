<script setup lang="ts">

</script>

<template>
    <section class="ContainerEvent">
        <section class="ContainerImage">
            <img src="/reposit/icon/crea-campus.png" alt="crea-campus">
        </section>

        <section class="ContainerInfo">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam voluptas quis distinctio eos quam, aliquid 
                similique qui? Expedita doloribus voluptatem voluptate quisquam voluptatum! Voluptatum ex nobis ipsam distinctio earum.
            </p>
        </section>
    </section>
</template>

<style scoped>
.ContainerEvent{
    display: flex;
    flex-wrap: nowrap;
    padding: 1em;

}

.ContainerImage{
    width: 25%;
}

.ContainerInfo{
    width: 75%;
    padding: 1em;
    background-color: var(--GrisClaire)
}

img{
    width: 12em;
    height: 9em;
}


</style>