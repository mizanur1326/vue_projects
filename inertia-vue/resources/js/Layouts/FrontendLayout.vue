<script setup>
import { Link } from '@inertiajs/vue3';
</script>
<template>
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
            </li>
            <li class="nav-item">
              <Link class="nav-link" :href="route('students.index')" :class="{'active' : $page.url === '/students' }">Students</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" :href="route('blogs.index')" :class="{'active' : $page.url === '/blogs' }">Blog</Link>
            </li>
            <li class="nav-item">
              <!-- <Link class="nav-link" :href="route('about')">About</Link> -->
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
</div>

<slot />

</template>

