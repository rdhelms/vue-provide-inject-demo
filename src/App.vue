<script setup lang="ts">
import Child from '@/components/StringChild.vue'
import SymbolChild from '@/components/SymbolChild.vue'
import ComposableChild from '@/components/ComposableChild.vue'
import { provide, inject, ref, readonly } from 'vue'
import { updateValFromAppParentKey, valFromAppParentKey } from '@/app-parent-injection-keys'
import { useUpdateValFromAppParent, useValFromAppParent } from '@/app-parent-composables'
import { updateValFromMyPluginKey, useUpdateValFromMyPlugin, useValFromMyPlugin, valFromMyPluginKey } from '../myPlugin'

// provided by component, via string
const stringValFromAppParent = ref('This value is provided by App.vue via a string key')
const updateStringValFromAppParent = () => {
    stringValFromAppParent.value += '!'
}
provide('valFromAppParent', readonly(stringValFromAppParent))
provide('updateValFromAppParent', updateStringValFromAppParent)

// provided by component, via symbols
const symbolValFromAppParent = ref('This value is provided by App.vue via a symbol key')
const updateSymbolValFromAppParent = () => {
    symbolValFromAppParent.value += '!'
}
provide(valFromAppParentKey, readonly(symbolValFromAppParent))
provide(updateValFromAppParentKey, updateSymbolValFromAppParent)

// provided by component, via composables
const composableValFromAppParent = ref('This value is provided by App.vue via a composable')
const updateComposableValFromAppParent = () => {
    composableValFromAppParent.value += '!'
}
useValFromAppParent(composableValFromAppParent)
useUpdateValFromAppParent(updateComposableValFromAppParent)

// injected from plugin, via string
const stringValFromMyPlugin = inject('valFromMyPlugin')
const updateStringValFromMyPlugin = inject<() => void>('updateValFromMyPlugin')

// injected from plugin, via symbol
const symbolValFromMyPlugin = inject(valFromMyPluginKey)
const updateSymbolValFromMyPlugin = inject(updateValFromMyPluginKey)

// injected from plugin, via composables
const composableValFromMyPlugin = useValFromMyPlugin()
const updateComposableValFromMyPlugin = useUpdateValFromMyPlugin()

</script>

<template>
    <div class="app">
        <div>
            {{ stringValFromAppParent }}
            <button @click="updateStringValFromAppParent">!</button>
        </div>
        <div>
            {{ symbolValFromAppParent }}
            <button @click="updateSymbolValFromAppParent">!</button>
        </div>
        <div>
            {{ composableValFromAppParent }}
            <button @click="updateComposableValFromAppParent">!</button>
        </div>
        <div>
            {{ stringValFromMyPlugin }}
            <button @click="updateStringValFromMyPlugin">!</button>
        </div>
        <div>
            {{ symbolValFromMyPlugin }}
            <button @click="updateSymbolValFromMyPlugin">!</button>
        </div>
        <div>
            {{ composableValFromMyPlugin }}
            <button @click="updateComposableValFromMyPlugin">!</button>
        </div>
        <Child />
        <SymbolChild />
        <ComposableChild />
    </div>
</template>

<style scoped>
.app {
    background-color: lightgray;
    border: 1px solid black;
    border-radius: 4px;
    padding: 20px;
}
</style>
