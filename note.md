


three core concepts of container in redux


| Cake Shop Scenarion       | Redux         | purpose               |
| ----------------------    | ------------  | --------------------- |
| Shop                      | Store         | Holds the state of application
| Cake Ordered              | Action        | Descripbes what happend
| Shopkeeper                | Reducer       | Ties the store and action thogether (also doing the work)

there are some term that come within this concept.
i couldn't descript nor explain this with clear. so i hope you can find another material to learn it.

however, here..
i only can provide an image that maybe make your mind clear about redux

..... 



now, how some concept applies in redux

### Actions
the only way your application can interact with the store.
carry some information from your app to the redux store.
plain js object.
> have a `type` property that describes something that happened in the application
> `type` property is typically defined as string constants


### Reducers
SPecify how the app's state changes in response to action sent to the store. 
function that accepts state and action as argument, and return the next state of app. 
> (previouseState, action) => newState