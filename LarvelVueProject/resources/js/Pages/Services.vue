<script setup>
import Service from '@/Components/Service.vue';
import Project from '@/Components/Project.vue';
import Blog from '@/Components/Blog.vue';
import Cta from '@/Components/Cta.vue';
import Price from '@/Components/Price.vue';

import FrontendLayout from "@/Layouts/FrontendLayout.vue";
</script>


<template>
    <div>

        <FrontendLayout>

            <!-- Page Header Start -->
            <div class="container-fluid page-header py-5">
                <div class="container text-center py-5">
                    <h1 class="display-2 text-white mb-4 animated slideInDown">Services</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <!-- Page Header End -->

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

        </FrontendLayout>

    </div>
</template>

<script>
export default {

}
</script>

<style></style>