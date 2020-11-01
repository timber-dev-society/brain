export const createEvent = (type) => (target) => ({ type, target })

const PubSub = () => {
  let events = []

  return {
    publish: (event) => events.forEach(({ type, handler }) => { if (event.type === type) { handler(event) } }),
    subscribe: (type, handler) => events = [ ...events, { type, handler }],
    unsubscribe: (type, handler) => events = events.filter((event) => !(event.type === type && event.handler === handler)),
  }
}

export default PubSub
