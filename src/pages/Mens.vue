<template>
  <div class="mens-main-div">
    <section class="mens-left-img">
      <img src="/mock/mens-mock.png" />
    </section>
    <section class="mens-right-div">
      <div class="mens-right-top-div">
        <h1>Mens Casual Slim Fit</h1>
        <div class="mens-right-top-sub">
          <p>men's clothing</p>
          <div class="mens-right-top-rating">
            <span class="mens-right-top-rating-title">2.9/5</span>
            <div>
              <span class="mens-right-top-rating-fill" />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <span class="mens-divider" />
        <article>
          great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.
        </article>
      </div>
      <div class="mens-right-bottom-div">
        <span class="mens-divider" />
        <p>$29.95</p>
        <div class="mens-right-bottom-button">
          <button class="mens-right-bottom-button-first">Buy now</button>
          <button>Next product</button>
        </div>
      </div> 
    </section>
  </div>
</template>

<style>
.mens-main-div {
  height: 100%;
  width: 100%;
  display: flex;
}

.mens-left-img {
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mens-left-img img {
  width: 20rem;
  max-height: 100%;
}

.mens-right-div {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 2rem;
}

.mens-right-top-div h1 {
  color: var(--men-dark);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.mens-right-top-sub {
  display: flex;
  justify-content: space-between;
}
</style>
