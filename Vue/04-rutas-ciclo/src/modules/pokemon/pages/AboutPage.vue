<template>
  <div>
    <h1>About Page</h1>
    <hr/>
    <h2>{{ name }}</h2>
    <button @click="onChengeName">
      cambiar nombre
    </button>
  </div>
</template>


<script>

export default {

  data() {
    return {
      name: 'Lucía'
    }
  },
  methods: {
    onChengeName() {
      this.name = 'Lu!'
    }
  },

  // LifeCycle Option API
  // cuando use el Composition tendría el setup()
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  errorCaptured() {
    console.log('errorCaptured')
  },
  
  // no se está disparando, ver
  renderTracked() {
    console.log('renderTracked')
  },
  renderTriggered() {
    console.log('renderTriggered')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
}
</script>

<style>
</style>