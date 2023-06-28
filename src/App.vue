<script>
import Store from "./components/Store.vue"
import Custom404 from "./components/Custom404.vue"

export default {
  components: {
    Store, //component for showing what inside the white box
    Custom404, //component for showing not found from api
  },
  data() {
    return {
      dataId: 1,
      responseData: {},
      isLoading: true,
      isValid: true
    }
  },
  methods: {
    async fetchData() {
      this.isLoading = true // loading parameter

      try {
        const res = await fetch(`https://fakestoreapi.com/products/${this.dataId}`)
        if (res.ok) {
          const data = await res.json()
          this.responseData = data
          this.isLoading = false
          this.isValid = data.category === "women's clothing" || data.category === "men's clothing" // to prevent showing other things than clothes
        } else {
          throw new Error('Error')
        }
      } catch (error) {
        this.isValid = false // showing error page because there's an error
        this.isLoading = false
        this.dataId = 0 // reset the product into 0 (0+1 later) 
      }
    },
    addDataId() {
      this.dataId++
      this.responseData = {}
      this.fetchData();
    }
  },
  mounted() {
    this.fetchData()
  },
  computed: {
    // getting the background colors
    getBackground() {
      if (this.responseData.category === "men's clothing" && !this.isLoading) {
        return 'main-mens-background-color'
      } else if (this.responseData.category === "women's clothing" && !this.isLoading) {
        return 'main-womens-background-color'
      } else {
        return 'main-others-background-color'
      } 
    },
    // getting component colors
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
    <div v-if="isLoading" class="main-view">
      <div class="main-center-spinner">
        <div class="main-spinner" />
      </div>
    </div>
    <div v-else-if="!isLoading && isValid" class="main-view">
      <Store
        :title="responseData.title"
        :colors="getColors"
        :category="responseData.category"
        :rating="responseData.rating ? responseData.rating.rate : null"
        :desc="responseData.description"
        :price="responseData.price"
        :img="responseData.image"
        :handleNext="addDataId"
      />
    </div>
    <div v-else class="main-view">
      <Custom404 :handleNext="addDataId" />
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

.main-center-spinner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--black);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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
