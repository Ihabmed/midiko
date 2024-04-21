<template>
  <p :class="`${getFont()} text-${size} font-weight-bold`">{{ text }}</p>
</template>
<script>
  export default{
    props: {
      text: String,
      size: String,
    },
    methods: {
      getFont(){
        if(this.$vuetify.locale.current == "ar") return "arabic-font"
        else return ""
      },
    }
  }
</script>