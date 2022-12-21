<template lang="pug">
div
  NuxtWelcome
  b-card(title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2")
      b-card-text Some quick example text to build on the card title and make up the bulk of the card's content.
      b-button(href="#" variant="primary") Go
</template>

<style lang="sass">
.test
  width: 200px
  height: 200px
  background-color: red
</style>
