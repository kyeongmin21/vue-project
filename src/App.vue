<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/DataBinding">Data Binding</router-link> |
    <router-link to="/vFor">Binding</router-link> |
    <router-link to="/NestedComponent">components</router-link> |<br>
    <router-link to="/ParentComponent">부모/자식</router-link> |
    <router-link to="/ParentComponent2">부모/자식2</router-link> |
    <router-link to="/ParentComponent3">부모/자식3</router-link> |
    <router-link to="/ParentComponent4">부모/자식4</router-link> |
    <router-link to="/ParentComponent5">부모/자식5</router-link> |<br>
    <router-link to="/SlotModalLayout">Slot Modal</router-link> |
    <router-link to="/CompositionAPI">CompositionAPI</router-link> |
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
