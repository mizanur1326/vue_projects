<script setup>
import { usePage } from '@inertiajs/vue3';

const {services} = usePage().props;
console.log(services);

</script>
<template>
    <div>
        <div class="container-fluid services py-5">
            <div class="container text-center py-5">
                <div class="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 class="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our
                        Services</h5>
                    <h1 class="display-5">Common Pest Control Services</h1>
                </div>
                <div class="row g-5">
                    <div class="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s" v-for="s in services">
                        <div class="bg-light rounded p-5 services-item" >
                            <div class="d-flex" style="align-items: center; justify-content: center;">
                                <div class="mb-4 rounded-circle services-inner-icon">
                                    <!-- <i class="fa fa-spider fa-3x text-primary"></i> -->
                                    <i class="fa "><img :src="`images/services/${s.image}`" style="height: 70px" class="rounded-circle" /></i>
                                </div>
                            </div>
                            <h4>{{ s.name }}</h4>
                            <p class="fs-5">{{ s.description }}</p>
                            <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3">Learn
                                More</button>
                        </div>
                    </div>
                    
                </div>
                <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3 mt-4 wow fadeInUp"
                    data-wow-delay=".3s">More Services</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>