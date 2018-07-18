<template>
  <main id="main-page" class="main-page" >
                <section class="container" data-v-f418cc52>
                <img src="/favicon.ico" alt="Logo" class="image is-128x128" data-v-f418cc52>
                  <div class="main-content">
                   <div class="row">
                   <div class="col-twelve">
            
              <h1 class="has-text-centered">404 Error.</h1>
              <p class="has-text-centered">
            Oooooops! Looks like nothing was found at this location.
            Maybe try on of the links below, click on the top menu
            or try a search?
              </p>        
          </div>            
        </div>         
       </div>
    </section>
</main>
</template>

<script>
export default {
  props: ['error'],
  layout: '404'
}
</script>
<style scoped>
.main-page{
  background-color: #c6c6c6;
}
.container{
  background-color: #000;
  color: #fff;
  padding-left:7rem;
}
.main-content {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  z-index: 700;  
}
.row {
  width: 94%;
  max-width: 1170px;
  margin: 0 auto;
}

</style>