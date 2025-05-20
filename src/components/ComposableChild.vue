<script setup lang="ts">
import { useUpdateValFromAppParent, useValFromAppParent } from '@/app-parent-composables'
import { useValFromMyPlugin, useUpdateValFromMyPlugin } from '../../myPlugin'

const valFromAppParent = useValFromAppParent()
const updateValFromAppParent = useUpdateValFromAppParent()

const valFromMyPlugin = useValFromMyPlugin()
const updateValFromMyPlugin = useUpdateValFromMyPlugin()
</script>

<template>
    <div class="symbol-child">
        <b>Using composables</b>
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
