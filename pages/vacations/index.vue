<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Vacations
    </h1>
    <ul class="vacations">
      <li v-for="(vacation, index) in vacations" :key="index" class="vacation">
        <nuxt-link :to="`/vacations/view/${index}`">
          {{ vacation.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/vacations')
    return { vacations: data }
  },
  head () {
    return {
      title: 'Vacations'
    }
  }
}
</script>

<style lang="scss">
.title
{
  margin: 30px 0;
}
.vacations
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.vacation
{
  margin: 10px 0;
}

.vacation a{
  $fontColor: brown;
  color: $fontColor;
}
</style>