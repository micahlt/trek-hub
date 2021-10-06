<template>
<div class="item" :id="id">
  <h1 title="Event name" :contenteditable="editMode" @input="onInput($event, 'name')">{{ name }}</h1>
  <p><i class="eva eva-calendar-outline"></i> <span :contenteditable="editMode" title="Date" @input="onInput($event, 'date')">{{ date }}</span> | <i class="eva eva-clock-outline"></i> <span :contenteditable="editMode" title="Time"
      @input="onInput($event, 'time')">{{ time }}</span></p>
  <p title="Description" class="description" :contenteditable="editMode" @input="onInput($event, 'description')">{{ description }}</p>
  <Button v-if="!editMode && signUp != 'soon'" class="action" @click="openWindow(signUp)">Sign Up</Button> <Button v-if="!editMode && location != 'soon'" class="action" type="secondary" @click="openWindow(location)">Location</Button>
  <p class="small" v-if="location == 'soon' && signUp == 'soon'">Location and sign-up coming soon</p>
</div>
</template>

<script>
import Button from './Button.vue';
export default {
  name: 'Item',
  components: {
    Button
  },
  props: {
    id: Number,
    name: String,
    date: String,
    time: String,
    location: String,
    description: String,
    signUp: String,
    editMode: Boolean
  },
  mounted() {
    return {
      nameTemp: this.name,
      dateTemp: this.date,
      timeTemp: this.time,
      locationTemp: this.location,
      descriptionTemp: this.description
    }
  },
  methods: {
    openWindow(url) {
      window.open(url);
    },
    onInput(event, field) {
      this[`${field}Temp`] = event.target.innerText;
    },
    updateDb() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  text-align: left;
  margin: auto;
  margin-bottom: 0.5em;
  padding: 1em;
  min-width: 240px;
  width: 85%;
  max-width: 400px;
  background: white;
  border-radius: 5px;
  box-shadow:
    0 1.2px 2.2px rgba(0, 0, 0, 0.02),
    0 2.9px 5.3px rgba(0, 0, 0, 0.028),
    0 5.4px 10px rgba(0, 0, 0, 0.035),
    0 9.6px 17.9px rgba(0, 0, 0, 0.042),
    0 18px 33.4px rgba(0, 0, 0, 0.05),
    0 43px 80px rgba(0, 0, 0, 0.07);
}

p {
  margin-bottom: 0.5em;
  color: #5f5f5f;
}

p.small {
  font-size: 0.8em;
  margin-top: -0.2em;
  margin-bottom: 0em;
  color: #aaa;
}

.description {
  margin-bottom: 0.8em;
}

i {
  transform: translateY(3px);
  color: #1c81fd;
}

[contenteditable=true] {
  outline: 0px solid transparent;
  border-bottom: 2px solid #eee;
  transition: border 0.2s;
}

[contenteditable]:focus {
  border-bottom: 2px solid #222;
}
</style>
