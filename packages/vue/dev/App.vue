<script setup lang="ts">
import { Button, Input } from '../'
import { ref } from 'vue'
let count = ref(0)
</script>

<template>
  <label for="input">Field :</label> <Input id="input" /> <Button @click="count++"> Click me {{ count }} </Button>
</template>
