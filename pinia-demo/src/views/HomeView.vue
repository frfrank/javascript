<template>
    <div>
        Home View:   {{counterStore.counter}}
    </div>

    <h3>Numero de cambios: {{ counterStore.numberOfChanges}}</h3>
</template>

<script lang="ts" setup>
import { userCounterStore } from '../stores/counter';

 const counterStore = userCounterStore();

</script>

<style lang="scss" scoped>

</style>