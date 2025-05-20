<script setup lang="ts">
import { inject, type Ref } from 'vue'

const valFromAppParent = inject<Ref<string>>('valFromAppParent')
const updateValFromAppParent = inject<() => void>('updateValFromAppParent')

const valFromMyPlugin = inject('valFromMyPlugin')
const updateValFromMyPlugin = inject<() => void>('updateValFromMyPlugin')
</script>

<template>
    <div class="string-child">
        <b>Using string injection keys</b>
        <div>
            {{ valFromAppParent }}
            <button @click="updateValFromAppParent">!</button>
        </div>
        <div>
            {{ valFromMyPlugin }}
            <button @click="updateValFromMyPlugin">!</button>
        </div>
    </div>
</template>

<style scoped>
.string-child {
    margin: 10px;
    padding: 20px;
    background-color: lightblue;
    border: 1px solid black;
    border-radius: 4px;
}
</style>
