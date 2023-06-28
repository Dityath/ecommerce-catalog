<script>
export default {
  props: {
    title: String, 
    colors: String, 
    category: String,
    rating: Number,
    desc: String,
    price: Number,
    img: String,
    handleNext: Function,
  },
  data() {
    return {
    }
  },
}
</script>

<template>
  <div class="store-main-div">
    <section class="store-left-img">
      <img :src="img" :alt="title" />
    </section>
    <section class="store-right-div">
      <div class="store-right-top-div">
        <h1 :class="colors === 'men' ? 'color-men' : 'color-women'">
          {{title}}
        </h1>
        <div class="store-right-top-sub">
          <p>{{category}}</p>
          <div class="store-right-top-rating">
            <span class="store-right-top-rating-title">
              {{rating}}
            </span>
            <div 
              class="store-right-top-rating-right"
              :class="colors === 'men' ? 'rating-men' : 'rating-women'"
            >
              <span :class="colors === 'men' ? 'bg-men' : 'bg-women'" />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div class="store-divider" />
        <article>
          {{desc}}
        </article>
      </div>
      <div class="store-right-bottom-div">
        <div class="store-divider-bottom" />
        <p :class="colors === 'men' ? 'color-men' : 'color-women'">
          {{price}}
        </p>
        <div 
          class="store-right-bottom-button"
          :class="colors === 'men' ? 'store-bottom-button-men' : 'store-bottom-button-women'"
        >
          <button 
            :class="colors === 'men' ? 'store-right-bottom-button-first-men'
                    : 'store-right-bottom-button-first-women'"
          >
            Buy now
          </button>
          <button 
            @click="handleNext()"
            :class="colors === 'men' ? 'store-right-bottom-button-second-men'
                    : 'store-right-bottom-button-second-women'"
          >
            Next product
          </button>
        </div>
      </div> 
    </section>
  </div>
</template>

<style>
.store-main-div {
  height: 100%;
  width: 100%;
  display: flex;
}

.store-left-img {
  padding: 1.5rem 1rem 1.5rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.store-left-img img {
  width: 20rem;
  max-height: 100%;
}

.store-right-div {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 2rem;
}

.store-right-top-div h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.store-right-top-sub {
  display: flex;
  justify-content: space-between;
}

.store-right-top-sub p {
  font-size: 1rem;
}

.store-right-top-rating {
  display: flex;
  gap: 0.5rem;
}

.store-right-top-rating-right {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.store-right-top-rating-right span {
  border-radius: 100%;
  width: 0.8rem;
  height: 0.8rem;
}

.rating-men span {
  border: 1px solid var(--men-dark);
}

.rating-women span {
  border: 1px solid var(--women-dark);
}

.store-divider {
  width: 100%;
  border-bottom: 1px solid var(--grey);
  margin: 0.6rem 0 1rem;
}

.store-right-bottom-div {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.store-right-bottom-div p {
  font-size: 24px;
  font-weight: 600;
}

.store-divider-bottom {
  width: 100%;
  border-bottom: 1px solid var(--grey);
}

.store-right-bottom-button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.store-right-bottom-button button {
  width: 100%;
  border-radius: 4px;
  padding: 0.25rem 0;
  font-weight: 600;
  font-size: 16px;
}

.store-bottom-button-men button {
  border: 3px solid var(--men-dark);
}

.store-bottom-button-women button {
  border: 3px solid var(--women-dark);
}

.store-right-bottom-button-first-men {
  background-color: var(--men-dark);
  color: white;
}

.store-right-bottom-button-first-women {
  background-color: var(--women-dark);
  color: white;
}

.store-right-bottom-button-second-men {
  background-color: transparent;
  color: var(--men-dark);
}

.store-right-bottom-button-second-women {
  background-color: transparent;
  color: var(--women-dark);
}
</style>
