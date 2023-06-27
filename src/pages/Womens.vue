<template>
  <div class="mens-main-div">
    <section class="mens-left-img">
      <img src="/mock/mens-mock.png" />
    </section>
    <section class="mens-right-div">
      <div class="mens-right-top-div">
        <h1>Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket</h1>
        <div class="mens-right-top-sub">
          <p>women's clothing</p>
          <div class="mens-right-top-rating">
            <span class="mens-right-top-rating-title">2.9/5</span>
            <div class="mens-right-top-rating-right">
              <span class="mens-right-top-rating-fill" />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div class="mens-divider" />
        <article>
          100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON
        </article>
      </div>
      <div class="mens-right-bottom-div">
        <div class="mens-divider-bottom" />
        <p>$29.95</p>
        <div class="mens-right-bottom-button">
          <button class="mens-right-bottom-button-first">Buy now</button>
          <button class="mens-right-bottom-button-second">Next product</button>
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
  padding: 1.5rem 1rem 1.5rem 3rem;
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
  color: var(--women-dark);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.mens-right-top-sub {
  display: flex;
  justify-content: space-between;
}

.mens-right-top-sub p {
  font-size: 1rem;
}

.mens-right-top-rating {
  display: flex;
  gap: 0.5rem;
}

.mens-right-top-rating-right {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.mens-right-top-rating-right span {
  border-radius: 100%;
  border: 1px solid var(--women-dark);
  width: 0.8rem;
  height: 0.8rem;
}

.mens-right-top-rating-fill {
  background-color: var(--women-dark);
}

.mens-divider {
  width: 100%;
  border-bottom: 1px solid var(--grey);
  margin: 0.6rem 0 1rem;
}

.mens-right-bottom-div {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mens-right-bottom-div p {
  font-size: 24px;
  font-weight: 600;
  color: var(--women-dark);
}

.mens-divider-bottom {
  width: 100%;
  border-bottom: 1px solid var(--grey);
}

.mens-right-bottom-button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.mens-right-bottom-button button {
  width: 100%;
  border: 3px solid var(--women-dark);
  border-radius: 4px;
  padding: 0.25rem 0;
  font-weight: 600;
  font-size: 16px;
}

.mens-right-bottom-button-first {
  background-color: var(--women-dark);
  color: white;
}

.mens-right-bottom-button-second {
  background-color: transparent;
  color: var(--women-dark);
}
</style>
