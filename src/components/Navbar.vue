<template>

        <nav id="navbar" class="navbar navbar-dark navbar-expand-lg w-full xl:w-1/2 bg-[#1c1c27] z-10" style="position: fixed">
                <div class="container-fluid">
                        <a href="/" class="navbar-brand text-[20px] flex text-white space-x-4 font-medium"><img
                                        draggable="false" src="../assets/img/logo.png" width="32" class="rounded-[60px]"
                                        alt="logo"><span class="font-semibold">Michele</span></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto white mb-2 mb-lg-0 space-y-4 xl:space-y-0 xl:space-x-4">
                                        <li class="nav-item"><a href="/#about"
                                                        class="white hover:text-[#235bdd] cursor-pointer transition ease-in-out delay-150 duration-300 text-lg no-underline">About</a>
                                        </li>
                                        <li class="nav-item"><a href="/#skills"
                                                        class="white hover:text-[#235bdd] cursor-pointer transition ease-in-out delay-150 duration-300 text-lg no-underline">Skills</a>
                                        </li>
                                        <li class="nav-item"><a href="/#services"
                                                        class="white hover:text-[#235bdd] cursor-pointer transition ease-in-out delay-150 duration-300 text-lg no-underline">Services</a>
                                        </li>
                                        <li class="nav-item"><a href="/#contact"
                                                        class="white hover:text-[#235bdd] cursor-pointer transition ease-in-out delay-150 duration-300 text-lg no-underline">Contact</a>
                                        </li>
                                </ul>
                        </div>
                </div>
        </nav>
</template>

<script>
export default {
        data() {
                return {
                        open: false
                }
        },
        methods: {
                openMenu() {
                        const div = document.getElementById("menu");

                        if (this.open) {
                                div.style.height = "0";
                        } else {
                                div.style.height = "fit-content";
                        }

                        this.open = !this.open;
                }
        }
}
</script>