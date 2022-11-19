<template>

    <Navbar></Navbar>

    <div class="flex flex-col-reverse xl:flex-row justify-center text-center content-center items-center w-fit xl:w-full mx-auto mt-[40%] section">
        <div class="text-left w-fit flex flex-col justify-center content-center items-center text-center">
            <p class="text-[30px] font-semibold w-fit">Coming Soon</p>
            <p class="text-[#bcbac4] w-[350px]">Whoa! You found a page that still doesn't exist! I'm still working on it so please be patient.</p>
            <button type="button" class="bg-[#235bdd] p-3 rounded-lg bottom-[40px] mt-3 mx-auto" @click="redirect('/')"><i class="fa-solid fa-house-user mr-3"></i>Home</button>
        </div>
        <img src="../assets/img/comingSoonLogo.svg" alt="logo" width="300" class="xl:ml-auto">

    </div>

    <Footer :stick="true" class="mt-auto"></Footer>

</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
    components: {
        Navbar,
        Footer
    },
    methods: {
        redirect(url) {
            window.location = url;
        }
    },
}
</script>