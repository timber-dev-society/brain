const internals = {
  actionScopes: []
}

const INIT_STORAGE = '@@STORAGE/INIT_STORAGE'
export const initStorage = () => ({ type: INIT_STORAGE })

const StorageMiddleware = (store) => (next) => (action) => {
  if (action.type === INIT_STORAGE) {
    console.log(store)
    return
  }
  next(action)
  const actionScope = action.type.split('/')[0]
  const toStore = internals.actionScopes
                           .filter(action => (action.scope === actionScope))
                           .map(action => (action.store))

  if (toStore.length === 0) { return }

  toStore.forEach(storeKey => window.localStorage.setItem(storeKey, JSON.stringify(store.getState()[storeKey])))
}

export default StorageMiddleware
export const setToLocalStorage = (scope, store) => {
  console.log(scope, store)
  internals.actionScopes.push({
    scope,
    store,
  })
}
