<template>
  <div class="container">
    <!-- Gambar di tengah -->
    <img src="@/gambar/image1.jpg" alt="Sample" class="main-image" />

    <!-- Tombol Like & Dislike -->
    <div class="buttons">
      <button
        :class="['btn', { active: selected === 'like' }]"
        @click="toggleLike"
      >
        ❤️ Like ({{ likes }})
      </button>
      <button
        :class="['btn', { active: selected === 'dislike' }]"
        @click="toggleDislike"
      >
        👎 Dislike ({{ dislikes }})
      </button>
    </div>

    <!-- Pesan status -->
    <p class="message">
      <span v-if="selected === 'like'">You liked this.</span>
      <span v-else-if="selected === 'dislike'">You disliked this.</span>
      <span v-else>No reaction yet.</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: null,
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    toggleLike() {
      if (this.selected === "like") {
        this.selected = null;
        this.likes--;
      } else {
        if (this.selected === "dislike") this.dislikes--;
        this.selected = "like";
        this.likes++;
      }
    },
    toggleDislike() {
      if (this.selected === "dislike") {
        this.selected = null;
        this.dislikes--;
      } else {
        if (this.selected === "like") this.likes--;
        this.selected = "dislike";
        this.dislikes++;
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  font-family: Arial, sans-serif;
}

.main-image {
  width: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.buttons {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.btn {
  background-color: #ddd;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}

.btn:hover {
  background-color: #ccc;
}

.btn.active {
  background-color: #4caf50;
  color: white;
}

.message {
  font-size: 18px;
  color: #333;
}
</style>
