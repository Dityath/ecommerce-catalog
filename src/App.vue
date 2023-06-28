<script>
import Store from "./components/Store.vue"

export default {
  components: {
    Store
  },
  data() {
    return {
      dataId: 1,
      responseData: {},
      isLoading: true
    }
  },
  methods: {
    async fetchData() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${this.dataId}`)
        if (res.ok) {
          const data = await res.json()
          console.log(data)
          this.responseData = data
        } else {
          throw new Error('Error')
        }
      } catch (error) {
        console.error(error)
      }
    },
    addDataId() {
      this.dataId++
    }
  },
  mounted() {
    this.fetchData()
  },
  computed: {
    getBackground() {
      if (this.responseData.category === "men's clothing") {
        return 'main-mens-background-color'
      } else if (this.responseData.category === "women's clothing") {
        return 'main-womens-background-color'
      } else {
        return 'main-others-background-color'
      } 
    },
    getColors() {
      if (this.responseData.category === "men's clothing") {
        return 'men'
      } else if (this.responseData.category === "women's clothing") {
        return 'women'
      }
    }
  },
}
</script>

<template>
  <div id="app" class="main-app">
    <div class="main-view">
      <Store
        :title="responseData.title"
        :colors="getColors"
        :category="responseData.category"
        :rating="responseData.rating ? responseData.rating.rate : null"
        :desc="responseData.description"
        :price="responseData.price"
        :img="responseData.image"
        :handleNext="dataId++"
      />
    </div>
    <div 
      class="main-background"
      :class="getBackground"
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
