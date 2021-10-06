<template>
<a href="#" @click="handle($event)" :class="type">
  <slot></slot>
</a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: String
  },
  methods: {
    handle(e) {
      e.preventDefault();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  margin-right: 0.3em;
  color: white;
  background: #1c81fd;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.9em;
  padding: 0.4em 1em;
  border-radius: 4px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
  transition: 0.2s;
}

a:hover {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
  background: #3890fd;
  transition: 0.2s;
}

a.secondary {
  background: white;
  color: #222;
}

a.secondary:hover {
  background: #ebf4ff;
}
</style>
