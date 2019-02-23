<template>
    <div class='detail-content'>
        <h1>{{ topic.title }}</h1>
        <p>{{ topic.text }}</p>
    </div>
</template>

<script>
export default {
  name: 'TopicList',
  props: [
    'id'
  ],
  data () {
    return {
      topic: {}
    }
  },
  mounted: function () {
    this.getTopic(this.$props.id)
  },
  methods: {
    getTopic: function () {
      this.$http
        .get(`http://127.0.0.1:8000/topics/${this.$props.id}`)
        .then(response => {
          this.topic = response.data
        })
        .catch(err => {
          // TODO ERROR
          console.log(err)
        })
    }
  }
}
</script>
