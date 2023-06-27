<template>
  <div class="blank-first-div">
    <p>
      This product is unavailable to show
    </p>
    <button>
      Next product
    </button>
    <div class="blank-404-page" />
  </div>
</template>

<style>
.blank-first-div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  position: relative;
}

.blank-404-page {
  position: absolute;
  background-image: url("/background/sad-face.svg");
  background-repeat: no-repeat;
  z-index: 6;
  margin-left: -90px;
  width: 80%;
  height: 80%;
}

.blank-first-div p {
  font-size: 20px;
  color: var(--black);
}

.blank-first-div button {
  background-color: transparent;
  width: 30rem;
  padding: 0.25rem 2rem;
  border-radius: 4px;
  font-size: 16px;
  border: 3px solid var(--black);
  color: var(--black);
}
</style>
