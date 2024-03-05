<script setup>
import { useForm, usePage } from '@inertiajs/vue3';
const { students } = usePage().props
// const props = defineProps({
//     students: {
//         type: Object,
//         default: () => ({}),
//     },
// });

console.log(students)

const form = useForm({})
function destroy(id) {
    if (confirm("Are You Sure??")) {
        form.delete(route('students.destroy', id))
    }
}

</script>

<template>
    <div class="container">
        <h1 class="text-6xl">Hello</h1>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="st in students">
                    <th scope="row">{{ st.id }}</th>
                    <td>{{ st.name }}</td>
                    <td>{{ st.email }}</td>
                    <td>{{ st.phone }}</td>
                    <td>
                        <button class="btn btn-warning mr-10"><i class="fa-regular fa-pen-to-square"></i></button>||
                        <button class="btn btn-danger" @click="destroy(st.id)" >Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

</script>