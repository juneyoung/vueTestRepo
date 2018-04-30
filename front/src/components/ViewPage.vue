<template>
  <div>
    <h1>Movie Detail</h1>
  </div>
</template>

<script>
export default {
  created () {
    var id = this.$route.params.id
    fetch(`/api/movies/${id}`).then(
      response => response.json()
    ).then(
      data => {
        this.movie = data
      }
    ).catch(
      err => console.log('err occurs :: ', err)
    )
  },
  data () {
    return {
      movie: {}
    }
  }
}
</script>
