<script setup>
import TopBar from '@/Components/TopBar.vue';
import NavBar from '@/Components/NavBar.vue';
import Carousel from '@/Components/Carousel.vue';
import GetinTouch from '@/Components/GetinTouch.vue';
import About from '@/Components/About.vue';
import Service from '@/Components/Service.vue';
import Project from '@/Components/Project.vue';
import Blog from '@/Components/Blog.vue';
import Cta from '@/Components/Cta.vue';
import Price from '@/Components/Price.vue';
import Team from '@/Components/Team.vue';
import Testimonial from '@/Components/Testimonial.vue';
import Footer from '@/Components/Footer.vue';
import Copyright from '@/Components/Copyright.vue';
import FrontendLayout from "@/Layouts/FrontendLayout.vue";
</script>

<template>
    <div>
        <!-- Topbar Start -->
        <!-- <TopBar /> -->
    <!-- Topbar End -->
    
        <FrontendLayout>

        <!-- Navbar Start -->
            <!-- <NavBar /> -->
        <!-- Navbar End -->


        <!-- Carousel Start -->
        <Carousel />
        <!-- Carousel End -->


        <!-- Get In Touch Start -->
        <GetinTouch />
        <!-- Get In Touch End -->


        <!-- About Start -->
        <About />
        <!-- About End -->


        <!-- Services Start -->
        <Service />
        <!-- Services End -->


        <!-- Project Start -->
        <Project />
        <!-- Project End -->



        <!-- Blog Start -->
        <Blog />
        <!-- Blog End -->


        <!-- Call To Action Start -->
        <Cta />
        <!-- Call To Action End -->


        <!-- pricing Start -->
        <Price />
        <!-- Pricing End -->


        <!-- Team Start -->
        <Team />
        <!-- Team End -->


        <!-- Testimonial Start -->
        <Testimonial />
        <!-- Testimonial End -->


        <!-- Footer Start -->
        <!-- <Footer /> -->
        <!-- Footer End -->



    </FrontendLayout>

    <!-- Copyright Start -->
    <!-- <Copyright /> -->
    <!-- Copyright End -->
    </div>
</template>

<script>
export default {

}
</script>

<style></style>