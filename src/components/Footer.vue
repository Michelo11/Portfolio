<template>

    <footer class="flex flex-col xl:flex-row flex-wrap justify-content-between align-items-center py-3 border-top w-full" :class="stick ? 'absolute bottom-0 w-1/2' : ''">
        <div class="col-md-4 d-flex align-items-center m-auto md:m-0 w-fit">
            <span class="mb-3 mb-md-0 text-white">© 2022 Michele Manna. All rights reserved.</span>
        </div>

        <ul class="w-fit nav col-md-4 justify-content-end list-unstyled d-flex m-auto md:m-0">
            <li class="ms-3"><a class="fa-brands fa-discord text-[20px]"
                    href="https://discord.com/users/573539095452844052"></a></li>
            <li class="ms-3"><a class="fa-brands fa-github text-[20px]" href="https://github.com/Michelo11"></a></li>
            <li class="ms-3"><a class="fa-brands fa-twitter text-[20px]" href="https://twitter.com/RCreationsNet"></a>
            </li>
        </ul>
    </footer>

</template>

<script>
export default {
    props: {
        stick: {
            type: Boolean,
            default: false
        }
    }
}
</script>