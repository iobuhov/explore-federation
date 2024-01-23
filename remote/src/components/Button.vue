<script setup>
import { Observer } from "mobx-vue-lite";
defineProps(["counter"]);
</script>

<template>
    <Observer>
        <button type="button" @click="counter.inc">
            Hello world {{ counter.value }}
        </button>
    </Observer>
</template>
