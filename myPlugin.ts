import type { App, InjectionKey, Ref } from 'vue'
import { inject, readonly, ref } from 'vue'

// Public keys, importable by consuming contexts
export const valFromMyPluginKey = Symbol('valFromMyPluginKey') as InjectionKey<Ref<string>>
export const updateValFromMyPluginKey = Symbol('updateValFromMyPluginKey') as InjectionKey<() => void>

// Private keys, used by composables
const composableValFromMyPluginKey = Symbol('composableValFromMyPlugin') as InjectionKey<Ref<string>>
const updateComposableValFromMyPluginKey = Symbol('updateComposableValFromMyPluginKey') as InjectionKey<() => void>

const stringValFromMyPlugin = ref('This value is provided by myPlugin via a string key')
const symbolValFromMyPlugin = ref('This value is provided by myPlugin via a symbol key')
const composableValFromMyPlugin = ref('This value is provided by myPlugin via a composable')

const updateStringValFromMyPlugin = () => {
    stringValFromMyPlugin.value = stringValFromMyPlugin.value + '!'
}

const updateSymbolValFromMyPlugin = () => {
    symbolValFromMyPlugin.value = symbolValFromMyPlugin.value + '!'
}

const updateComposableValFromMyPlugin = () => {
    composableValFromMyPlugin.value = composableValFromMyPlugin.value + '!'
}

export const myPlugin = {
    install (app: App) {
        // provided by plugin, via strings
        app.provide('valFromMyPlugin', readonly(stringValFromMyPlugin))
        app.provide('updateValFromMyPlugin', updateStringValFromMyPlugin)

        // provided by plugin, via symbols
        app.provide(valFromMyPluginKey, readonly(symbolValFromMyPlugin))
        app.provide(updateValFromMyPluginKey, updateSymbolValFromMyPlugin)

        // provided by plugin, via symbols but consumed by composables
        app.provide(composableValFromMyPluginKey, readonly(composableValFromMyPlugin))
        app.provide(updateComposableValFromMyPluginKey, updateComposableValFromMyPlugin)
    }
}

export const useValFromMyPlugin = () => {
    return inject(composableValFromMyPluginKey)
}

export const useUpdateValFromMyPlugin = () => {
    return inject(updateComposableValFromMyPluginKey)
}
