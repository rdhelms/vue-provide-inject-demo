import { inject, provide, readonly, type InjectionKey, type Ref } from 'vue'

// Private injection keys for use by composables
const composableValFromAppParentKey = Symbol('valFromAppParentKey') as InjectionKey<Ref<string>>
const composableUpdateValFromAppParentKey = Symbol('updateValFromAppParentKey') as InjectionKey<() => void>

export const useValFromAppParent = (valToProvide?: Ref<string>) => {
    if (valToProvide) {
        provide(composableValFromAppParentKey, readonly(valToProvide))
    } else {
        return inject(composableValFromAppParentKey)
    }
}

export const useUpdateValFromAppParent = (updateFuncToProvide?: () => void) => {
    if (updateFuncToProvide) {
        provide(composableUpdateValFromAppParentKey, updateFuncToProvide)
    } else {
        return inject(composableUpdateValFromAppParentKey)
    }
}
