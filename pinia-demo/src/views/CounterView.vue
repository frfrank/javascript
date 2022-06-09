<template>
    <div>
        Counter view {{counterStore.counter}} {{name}}
    </div>
    <button @click="counterStore.incrementBy(1)">+1</button>
    <button @click="counterStore.incrementBy(2)">+2</button>
    <button @click="counterStore.incrementBy(3)">+3</button>

</template>

<script lang="ts" setup>
import { userCounterStore } from '../stores/counter';

 const counterStore = userCounterStore();

const name = "Francisco picado";

</script>

<style lang="scss" scoped>

</style>