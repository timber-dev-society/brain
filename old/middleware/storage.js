const internals = {
  actionScopes: []
}

const ls = window.localStorage

const INIT_STORAGE = '@@STORAGE/INIT_STORAGE'
export const initStorage = () => ({
  type: INIT_STORAGE,
})

export const INIT_STORES = '@@STORAGE/INIT_STORES'
const initStores = (payload) => ({
  type: INIT_STORES,
  payload
})

const StorageMiddleware = (store) => (next) => (action) => {
  if (action.type === INIT_STORAGE) {
    const payload = internals.actionScopes
                             .map(action => (action.store))
                             .map(store => ({ data: JSON.parse(ls.getItem(`@@store_${store}`)), store }))
                             .filter(value => (value.data !== null))

    store.dispatch(initStores(payload))
    return
  }
  next(action)
  const actionScope = action.type.split('/')[0]
  const toStore = internals.actionScopes
                           .filter(action => (action.scope === actionScope))
                           .map(action => (action.store))

  if (toStore.length === 0) { return }

  toStore.forEach(storeKey => ls.setItem(`@@store_${storeKey}`, JSON.stringify(store.getState()[storeKey])))
}

export default StorageMiddleware
export const setToLocalStorage = (scope, store) => {
  internals.actionScopes.push({
    scope,
    store,
  })
  // ls.setItem(`@@storage_keys`, JSON.stringify(internals.actionScopes)))
}
