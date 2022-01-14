<template>
<nav>
  <h1>{{ title }}</h1>
  <a class="eva eva-edit-2-outline disabled" title="Edit events" @click="switchMode($event)"></a>
  <a class="eva eva-person-outline" title="Log In" @click="this.$emit('logIn')"></a>
</nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    title: {
      type: String,
      default: 'Trek Hub'
    }
  },
  emits: ['editMode', 'closeEditor', 'logIn'],
  methods: {
    switchMode(e) {
      if (e.target.classList.contains('eva-edit-2-outline')) {
        e.target.classList.replace('eva-edit-2-outline', 'eva-save-outline');
        this.$emit('editMode');
      } else {
        e.target.classList.replace('eva-save-outline', 'eva-edit-2-outline');
        this.$emit('closeEditor');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 4em;
  box-shadow:
    0 1.2px 2.2px rgba(0, 0, 0, 0.02),
    0 2.9px 5.3px rgba(0, 0, 0, 0.028),
    0 5.4px 10px rgba(0, 0, 0, 0.035),
    0 9.6px 17.9px rgba(0, 0, 0, 0.042),
    0 18px 33.4px rgba(0, 0, 0, 0.05),
    0 43px 80px rgba(0, 0, 0, 0.07);
  margin-bottom: 1em;
  text-align: center;
  background: white;
}

h1 {
  font-size: 1.5em;
  padding-top: 0.5em;
  color: #1c81fd;
  user-select: none;
}

a {
  position: fixed;
  color: #1c81fd;
  font-size: 1.65em;
  cursor: pointer;
  display: none !important;
}

a.disabled {
  color: #bbb;
  cursor: default;
  user-select: none;
}

a.eva-edit-2-outline,
a.eva-save-outline {
  top: 0.75em;
  right: 1.1em;
}

a.eva-person-outline {
  top: 0.75em;
  right: 2.75em;
}
</style>
