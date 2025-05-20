import type { InjectionKey, Ref } from 'vue'

export const valFromAppParentKey = Symbol('valFromAppParentKey') as InjectionKey<Ref<string>>
export const updateValFromAppParentKey = Symbol('updateValFromAppParentKey') as InjectionKey<() => void>
