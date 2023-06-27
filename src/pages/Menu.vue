<template>
  <div class="menu-first-div">
    <p>
      Find any clothes that suits you!
    </p>
    <div class="menu-second-div">
      <router-link to="/man" class="menu-all-button">
        Men Product
      </router-link>  
      <router-link to="/woman" class="menu-all-button">
        Women Product
      </router-link>
    </div>
  </div>
</template>

<style>
.menu-first-div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  position: relative;
}

.menu-first-div p {
  font-size: 20px;
  color: var(--black);
}

.menu-second-div {
  display: flex;
  gap: 0.5rem;
}

.menu-all-button {
  text-decoration: none;
  background-color: transparent;
  padding: 0.25rem 2rem;
  border-radius: 4px;
  font-size: 16px;
  border: 3px solid var(--black);
  color: var(--black);
}
</style>
