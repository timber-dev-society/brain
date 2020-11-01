import { useEffect } from 'React'

const useKey = (keyCode, callback) => useEffect(() => {
  const handler = (event) => {
    if (event.keyCode === keyCode) {
      callback()
    } 
  }

  document.addEventListener('keydown', handler)

  return () => {
    document.removeEventListener('keydown', handler)
  }
})

export default useKey
