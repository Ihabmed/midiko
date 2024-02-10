<template>
    <v-snackbar
      v-model="snackBar"
      :color="color"
      timeout="4000"
      close-on-content-click
    >
      {{ text }}
      <template v-slot:actions>
        <v-btn
          icon="mdi-close-circle"
          @click="snackBar = false"
        >
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {
    data: () => ({
        snackBar: false,
        text: "",
        color: "",
    }),
    methods: {
        show(text, color){
            this.text = text
            this.color = color
            this.snackBar = true
        }
    }
}
</script>