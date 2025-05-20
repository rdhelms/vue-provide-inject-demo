<script setup lang="ts">
import { inject } from 'vue'
import { updateValFromAppParentKey, valFromAppParentKey } from '@/app-parent-injection-keys'
import { valFromMyPluginKey, updateValFromMyPluginKey } from '../../myPlugin'

const valFromAppParent = inject(valFromAppParentKey)
const updateValFromAppParent = inject(updateValFromAppParentKey)

const valFromMyPlugin = inject(valFromMyPluginKey)
const updateValFromMyPlugin = inject(updateValFromMyPluginKey)
</script>

<template>
    <div class="symbol-child">
        <b>Using symbol injection keys</b>
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
.symbol-child {
    margin: 10px;
    padding: 20px;
    background-color: lightblue;
    border: 1px solid black;
    border-radius: 4px;
}
</style>
