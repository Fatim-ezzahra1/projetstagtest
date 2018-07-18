<template>
<div>
<TheHeader />
  <main class="main-content">
    <nuxt/>
  </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/theheader'
export default {
  components: {
  TheHeader: TheHeader
  }
}

</script>
