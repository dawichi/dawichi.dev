---
title: Map vs Object, comparison in JS (ES6)
description: Differences between Map and Object collection data types
date: 2022-04-02
image: '/assets/img/blog/map_vs_object.jpg'
---

Map and Object are collection data types. Both store data in pairs, with a unique key and a value maped to that key.

-   Object: `{ 1: 'one', 2: 'two' }`
-   Map: `{ (1, 'one'), (2, 'two' ) }`

Map is mainly used for fast searching and looking up data, as it has some big differences with Object who make it perfect for that cases.

-   **Key**: In Object the key must be simple types (string, number). Manwhile, in Map you can use anything as key, such as functions or other objects.

-   **Order**: Object doesn't respect the order of the pairs once they have been stored, but Map does.

## Object construction

```ts
// 3 ways to create an empty object
const obj = {} // straight-forward
const obj = new Object() // constructor
const obj = Object.create(null) // prototype.create (inherits)
```

In general, we only use the first one as it's simpler, faster in performance and it reduces the chances for mistakes. The unique case we could be interested in use the constructors it's when we want to inherit from another object.

```ts
const animal = {}
// extended object, points to the same object
// if you modify one, both change
const cat = new Object(animal)
// extended object with constructor (2 different)
const cat = Object.create(animal)
```

## Map construction

Maps are created exclusively with the new keyword and the built-in constructor.

```ts
const map1 = new Map()
const map2 = new Map([
    ['first key', 'first value'],
    ['second key', 'second value'],
])
```

## Differences in use

### CREATE props

```ts
// Map                      // Object
map.set('key', 'value')     obj.key = 'value'
                            obj['key'] = 'value'
```

### ACCESS props

```ts
// Map                      // Object
map.get('key')              obj.key
                            obj['key']
```

### CHECK if a prop exists

```ts
// Map                      // Object
map.has('key')              obj.key !== undefined
                            'key' in obj
```

### DELETE prop

Object doesn't have any built-in way to delete properties. We have 2 options:

```ts
delete obj.key
obj.key = undefined
```

The problem here is that the first one performs a much heavier operation. And the second, doesn't actually delete the pair, it just sets the value to `undefined` but it actually remains in the object, so if you iterate over the keys you still will go through that prop.

Meanwhile in map, we have 2 nice methods to delete:

```ts
map.delete('key') // @returns boolean
map.clear()
```

In order to achieve the same capability of `map.clear()` in Objects, we will need to iterate through all its properties and delete them one by one.

Note that both of them will need a `O(1)` to delete a single key and `O(n)` to clear the entire structure depending of the number of pairs

### CHECK SIZE

```ts
// Map                      // Object
map.size                    Object.keys(obj).length
```

### ITERATING



