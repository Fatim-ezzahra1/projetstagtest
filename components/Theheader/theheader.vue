<template>
  <section class="hero is-default is-bold body">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                      <span class="navbar-burger burger" data-target="navbarMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" class="navbar-menu">
                        <div class="navbar-start navbar-end">
                            <div class="tabs">
                                <ul>
                                    <li class="active"><nuxt-link to="/" class="menu">Home</nuxt-link></li>
                                    <li><nuxt-link to="#about" class="menu">About</nuxt-link></li>
                                    <li><nuxt-link to="#menu" class="menu">Menu</nuxt-link></li>
                                    <li><nuxt-link to="#reserv" class="menu">Reservation</nuxt-link></li>
                                    <li><nuxt-link to="/" class="menu">Contact</nuxt-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        
  </section>
</template>

<style scoped>
.body{
  background-color: #000;
  color: #fff;
}
.menu{
  color: #fff;
  padding: 2rem;
  padding-bottom: 1rem;
  text-transform: uppercase;
}
.menu:hover{
  color:red;
}
.active{
  text-decoration:underline;
}

</style>