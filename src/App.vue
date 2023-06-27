<script>
export default {
  data() {
    return {
      backgroundClass: 'main-others-background-color'
    }
  },
  methods: {
    getBackground() {
      const routeName = this.$route.name
        if (routeName === 'men') {
          return 'main-mens-background-color'
        } else if (routeName === 'women') {
          return 'main-womens-background-color'
        } else {
          return 'main-others-background-color'
        } 
    }
  },
}
</script>

<template>
  <div id="app" class="main-app">
    <div class="main-view">
      <router-view />
    </div>
    <div 
      class="main-background"
      :class="getBackground()"
    />
  </div>
</template>

<style>
.main-app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.main-view {
  z-index: 5;
  width: 100%;
  height: 100%;
  max-width: 60rem;
  max-height: 35rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.main-background {
  background-image: url("/background/bg-pattern.svg");
  background-position: cover;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 65vh;
  z-index: 0;
  transition: linear 0.3s;
}

.main-mens-background-color {
  background-color: var(--men-light);
}

.main-womens-background-color {
  background-color: var(--women-light);
}

.main-others-background-color {
  background-color: #D8D7D7;
}
</style>
