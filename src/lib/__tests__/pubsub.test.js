import PubSub, { createEvent } from './../pubsub'

it('should create event', () => {
  const event = createEvent('foo')('bar')

  expect(event).toBeDefined()
  expect(event.type).toBe('foo')
  expect(event.target).toBe('bar')
})

it('It should able to subscribe', () => {
  const pubSub = PubSub()
  const mock = jest.fn()
  const event = createEvent('foo')({ bar: 'baz' })

  pubSub.subscribe('foo', mock)
  pubSub.publish(event)

  expect(mock).toHaveBeenCalledWith(event)
})

it('should be able to unsubscribe', () => {
  const pubSub = PubSub()
  const mock = jest.fn()
  const event = createEvent('foo')({ bar: 'baz' })

  pubSub.subscribe('foo', mock)
  pubSub.unsubscribe('foo', mock)
  pubSub.publish(event)

  expect(mock).not.toHaveBeenCalled()
})
