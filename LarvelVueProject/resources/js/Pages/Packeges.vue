<script setup>
import Price from '@/Components/Price.vue';
import FrontendLayout from "@/Layouts/FrontendLayout.vue";
</script>

<template>
    <div>

        <FrontendLayout>

            <!-- Page Header Start -->
            <div class="container-fluid page-header py-5">
                <div class="container text-center py-5">
                    <h1 class="display-2 text-white mb-4 animated slideInDown">Pricing Plan</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white" aria-current="page">Pricing Plan</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <!-- Page Header End -->


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