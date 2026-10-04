<script setup lang="ts">
import nuitInfo2024 from './nuitInfo2024.vue';
import nuitInfo2025 from './nuitInfo2025.vue';
import creacampus from './creacampus.vue';
import CodeGameJam2025 from './CodeGameJam2025.vue';

</script>

<template>
    <section class="Base_Part3">
        <h2>Ma participations aux évènements</h2>

        <section>
            <creacampus/>
            <nuitInfo2025/>
            <CodeGameJam2025/>
            <nuitInfo2024/>
        </section>
        
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

.Base_Part3{
    width: 100%;
}
</style>