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
        <FrontendLayout>
                    <!-- Page Header Start -->
        <div class="container-fluid page-header py-5">
            <div class="container text-center py-5">
                <h1 class="display-2 text-white mb-4 animated slideInDown">Blog Post</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-white" aria-current="page">Blog Post</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!-- Page Header End -->

        <!-- Blog Start -->
        <Blog />
        <!-- Blog End -->

    </FrontendLayout>

    </div>
</template>

<script>
export default {

}
</script>

<style></style>