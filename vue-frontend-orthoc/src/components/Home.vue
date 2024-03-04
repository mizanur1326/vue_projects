<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Slider from "./Slider.vue";
import Department from "./Department.vue";
import About from "./About.vue";
import Doctor from "./Doctor.vue";
import Contact from "./Contact.vue";
import Testimonial from "./Testimonial.vue";
</script>

<template>
  <div class="hero_area">

    <div class="hero_bg_box">
      <img src="/images/hero-bg.png" alt="">
    </div>

    <Header />

    <Slider />

  </div>


  <Department />
  <About />
  <Doctor />
  <Contact />
  <Testimonial />


  <Footer />
</template>

<style></style>
