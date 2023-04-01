<template>

    <Navbar />

    <div class="flex flex-col-reverse xl:flex-row text-center content-center w-full mt-[150px] xl:mt-[180px] section" id="home">

        <div
            class="flex flex-col space-y-6 content-center items-center xl:text-left xl:items-start max-w-[100vw]" data-aos="fade-down" data-aos-duration="1000">
            <p
                class="bg-clip-text text-transparent text-[35px] font-extrabold max-w-[100vw] w-[500px] justify-start bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 mb-0">
                Hello, my name is Michele.<br /> I'm a <span id="language"></span></p>

            <h1 class="text-[#bcbac4] w-[350px] text-[18px] max-w-full leading-6">A student from
                Italy who loves developing fullstack websites, designing and administrating systems.
            </h1>

            <button class="bg-[#235bdd] p-3 rounded-lg w-1/3 flex justify-center items-center h-[3rem]"
                @click="scrollToSection('about')" type="button">Learn More</button>
        </div>

        <img draggable="false" src="../assets/img/logo.png" alt="logo"
            class="rounded-[200px] mt-[50px] m-auto ml-auto xl:mr-0" width="300"
            style="animation: float 6s ease-in-out infinite;">

    </div>

    <div class="pt-[175px] section" id="about">

        <div>
            <p class="text-[32px] font-semibold text-center">About Me</p>
            <p class="text-[#bcbac4] text-[15px] text-center">Learn more
                about my life and experiences</p>
        </div>

        <div class="flex flex-col md:flex-row gap-x-10 items-center justify-center md:justify-between xl:justify-center w-fit md:w-11/12 xl:w-fit m-auto mt-[50px]" style="margin-top:50px" >

            <img class="scale-75 md:scale-100" draggable="false" src="../assets/img/illustrationAbout.svg"
                alt="illustration">

            <div class="space-y-6 w-[300px]" data-aos="fade-down" data-aos-duration="1000">
                <p class="text-[#bcbac4] text-[18px]">I'm a developer, designer and system administrator
                    from Italy.
                    I can design and create everything for you and your company.
                </p>

                <p class="text-[#bcbac4] text-[18px]">You can learn more about my skills and the languages
                    I know below.
                    I'm also the CEO at <a href="https://discord.gg/rocketcreations"
                        class="font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-transparent">RocketCreations</a>
                    and I cover a management position in a lot of Services Teams.
                </p>
            </div>

        </div>

    </div>

    <div class="mt-[85px] flex flex-col items-center section" id="skills">

        <div>
            <p class="text-[32px] font-semibold text-center">Skills</p>
            <p class="text-[#bcbac4] text-[15px] text-center">Freelancing
                Skills</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 mt-[50px] w-fit md:w-11/12 xl:w-fit" data-aos="fade-down" data-aos-duration="1000">
            <div class="w-fit">

                <div class="flex space-x-4 w-[320px] items-center  cursor-pointer" @click="openDiv('frontend')">

                    <i class="fa-solid fa-code"
                        style="color: #235bdd; font-size: 20px; display: flex; align-items: center;"></i>

                    <div class="text-left cursor-pointer">
                        <p class="text-[20px] font-semibold">Front-End Developer</p>
                        <p class="text-[#bcbac4] text-[18px]">2+ Years</p>
                    </div>

                    <i class="fa-solid fa-angle-down transition ease-in delay-100" style="margin-left: auto;"
                        id="frontend-arrow"></i>

                </div>

                <div id="frontend" style="display: none;">
                    <div class="mt-5 w-fit">
                        <div class="flex">
                            <span class="font-semibold">HTML</span>
                            <span class="percent ml-auto text-[#bcbac4]">100%</span>
                        </div>

                        <div class="skillbar">
                            <div class="filled w-[100%]"></div>
                        </div>
                    </div>

                    <div class="mt-5 w-fit">
                        <div class="flex">
                            <span class="font-semibold">CSS</span>
                            <span class="percent ml-auto text-[#bcbac4]">85%</span>
                        </div>

                        <div class="skillbar">
                            <div class="filled w-[85%]"></div>
                        </div>
                    </div>

                    <div class="mt-5 w-fit">
                        <div class="flex">
                            <span class="font-semibold">JS</span>
                            <span class="percent ml-auto text-[#bcbac4]">75%</span>
                        </div>

                        <div class="skillbar">
                            <div class="filled w-[75%]"></div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="w-fit">

                <div class="flex space-x-4 w-[320px] items-center  cursor-pointer" @click="openDiv('backend')">

                    <i class="fa-solid fa-server"
                        style="color: #235bdd; font-size: 20px; display: flex; align-items: center;"></i>

                    <div class="text-left cursor-pointer">
                        <p class="text-[20px] font-semibold">Back-End Developer</p>
                        <p class="text-[#bcbac4] text-[18px]">2+ Years</p>
                    </div>

                    <i class="fa-solid fa-angle-down transition ease-in delay-100" style="margin-left: auto;"
                        id="backend-arrow"></i>

                </div>

                <div id="backend" style="display: none;">
                    <div class="mt-5 w-fit">
                        <div class="flex">
                            <span class="font-semibold">Node.js</span>
                            <span class="percent ml-auto text-[#bcbac4]">80%</span>
                        </div>

                        <div class="skillbar">
                            <div class="filled w-[80%]"></div>
                        </div>
                    </div>

                    <div class="mt-5 w-fit">
                        <div class="flex">
                            <span class="font-semibold">TypeScript</span>
                            <span class="percent ml-auto text-[#bcbac4]">90%</span>
                        </div>

                        <div class="skillbar">
                            <div class="filled w-[90%]"></div>
                        </div>
                    </div>

                    <div class="mt-5 w-fit">
                        <div class="flex">
                            <span class="font-semibold">Databases</span>
                            <span class="percent ml-auto text-[#bcbac4]">85%</span>
                        </div>

                        <div class="skillbar">
                            <div class="filled w-[85%]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-fit">

                <div class="flex space-x-4 w-[320px] items-center  cursor-pointer" @click="openDiv('sysadmin')">

                    <i class="fa-solid fa-terminal"
                        style="color: #235bdd; font-size: 20px; display: flex; align-items: center;"></i>

                    <div class="text-left cursor-pointer">
                        <p class="text-[20px] font-semibold">System Administration</p>
                        <p class="text-[#bcbac4] text-[18px]">1+ Years</p>
                    </div>

                    <i class="fa-solid fa-angle-down transition ease-in delay-100" style="margin-left: auto;"
                        id="sysadmin-arrow"></i>

                </div>

                <div id="sysadmin" style="display: none;">
                    <div class="mt-5 w-fit">
                        <div class="flex">
                            <span class="font-semibold">Linux</span>
                            <span class="percent ml-auto text-[#bcbac4]">90%</span>
                        </div>

                        <div class="skillbar">
                            <div class="filled w-[90%]"></div>
                        </div>
                    </div>

                    <div class="mt-5 w-fit">
                        <div class="flex">
                            <span class="font-semibold">Windows</span>
                            <span class="percent ml-auto text-[#bcbac4]">80%</span>
                        </div>

                        <div class="skillbar">
                            <div class="filled w-[80%]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-fit">

                <div class="flex space-x-4 w-[320px] items-center  cursor-pointer" @click="openDiv('uix')">

                    <i class="fa-solid fa-wand-magic-sparkles"
                        style="color: #235bdd; font-size: 20px; display: flex; align-items: center;"></i>

                    <div class="text-left cursor-pointer">
                        <p class="text-[20px] font-semibold">UI/UX Designer</p>
                        <p class="text-[#bcbac4] text-[18px]">2+ Years</p>
                    </div>

                    <i class="fa-solid fa-angle-down transition ease-in delay-100" style="margin-left: auto;"
                        id="uix-arrow"></i>

                </div>

                <div id="uix" style="display: none;">
                    <div class="mt-5 w-fit">
                        <div class="flex">
                            <span class="font-semibold">Figma</span>
                            <span class="percent ml-auto text-[#bcbac4]">90%</span>
                        </div>

                        <div class="skillbar">
                            <div class="filled w-[90%]"></div>
                        </div>
                    </div>

                    <div class="mt-5 w-fit">
                        <div class="flex">
                            <span class="font-semibold">Adobe XD</span>
                            <span class="percent ml-auto text-[#bcbac4]">60%</span>
                        </div>

                        <div class="skillbar">
                            <div class="filled w-[60%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-[85px] section" id="services">

        <div>
            <p class="text-[32px] font-semibold text-center">Services</p>
            <p class="text-[#bcbac4] text-[15px] text-center">Learn more about what I can offer to my clients.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-6 mt-[50px] md:m-auto xl:m-0 xl:mt-[50px] md:w-11/12 xl:w-full">

            <div
                class="text-[18px] md:text-unset scale-90 bg-[#2d2d3e] flex flex-col items-center h-[26rem] md:h-[30rem] gap-y-6 rounded-lg p-3 shadow relative transition ease-in-out delay-100 duration-200 hover:scale-90 md:hover:scale-95 hover:-translate-y-1 hover:-translate-x-1">

                <i class="fa-solid fa-file-code text-[#235bdd] fa-6x mt-4"></i>
                <span class="text-[20px] font-bold">Web Development</span>

                <p class="text-center text-[#bcbac4]">I can create a modern and responsive fullstack website
                    with
                    Vue.js, HTML, CSS and Tailwind.
                </p>

                <button type="button" class="bg-[#235bdd] p-3 rounded-lg md:absolute bottom-[40px]"
                    @click="redirect('https://imgur.com/a/EaduGMq')">Check out my
                    works</button>

            </div>

            <div
                class="text-[18px] md:text-unset scale-90 bg-[#2d2d3e] flex flex-col items-center h-[26rem] md:h-[30rem] gap-y-6 rounded-lg p-3 shadow relative transition ease-in-out delay-100 duration-200 hover:scale-90 md:hover:scale-95 hover:-translate-y-1 hover:-translate-x-1">

                <i class="fa-solid fa-palette text-[#235bdd] fa-6x mt-4"></i>
                <span class="text-[20px] font-bold">UI/UX Design</span>

                <p class="text-center text-[#bcbac4]">I can create a modern graphic design for your app or
                    website.
                </p>

                <button type="button" class="bg-[#235bdd] p-3 rounded-lg md:absolute bottom-[40px]"
                    @click="redirect('https://imgur.com/a/qUaD557')">Check out my
                    works</button>

            </div>

            <div
                class="text-[18px] md:text-unset scale-90 bg-[#2d2d3e] flex flex-col items-center h-[26rem] md:h-[30rem] gap-y-6 rounded-lg p-3 shadow relative transition ease-in-out delay-100 duration-200 hover:scale-90 md:hover:scale-95 hover:-translate-y-1 hover:-translate-x-1">

                <i class="fa-brands fa-ubuntu text-[#235bdd] fa-6x mt-4"></i>
                <span class="text-[20px] font-bold text-center">System Administration</span>

                <p class="text-center text-[#bcbac4]">I can manage your system, install any program you need
                    and
                    maintain it.
                </p>

                <button type="button" class="bg-[#235bdd] p-3 rounded-lg md:absolute bottom-[40px]"
                    @click="redirect('https://imgur.com/a/liBXrmE')">Check out my
                    works</button>

            </div>
        </div>
    </div>

    <div id="contact" class="section pt-[200px] flex flex-col">


        <div>
            <p class="text-[32px] font-semibold text-center">Get a quote</p>
            <p class="text-[#bcbac4] text-[15px] text-center">Learn more about what I can offer to my clients.
            </p>
        </div>

        <div class="flex flex-col md:flex-row mt-[85px] md:mx-auto xl:mx-0 justify-around md:justify-between xl:justify-center md:w-11/12 xl:w-full">

            <div class="flex flex-col justify-center w-full p-8 m-auto">

                <div class="w-full flex hover:bg-[#235bdd5b] border-[#235bdd] border-2 rounded-lg p-4 mb-4 transition ease-in-out delay-150 duration-300 cursor-pointer"
                    @click="redirect('mailto:hello@michelemanna.me')">

                    <i class="fa-regular fa-envelope text-[25px]"></i>
                    <p class="ml-[20px]">hello@michelemanna.me</p>

                </div>

                <div class="w-full flex hover:bg-[#235bdd5b] border-[#235bdd] border-2 rounded-lg p-4 mb-4 transition ease-in-out delay-150 duration-300 cursor-pointer"
                    @click="redirect('https://discord.com/users/573539095452844052')">

                    <i class="fa-brands fa-discord text-[25px]"></i>
                    <p class="ml-[20px]">Michele#2001</p>

                </div>

                <div class="w-full flex hover:bg-[#235bdd5b] border-[#235bdd] border-2 rounded-lg p-4 mb-4 transition ease-in-out delay-150 duration-300 cursor-pointer"
                    @click="redirect('https://twitter.com/RocketCreation')">

                    <i class="fa-brands fa-twitter text-[25px]"></i>
                    <p class="ml-[20px]">RocketCreations</p>

                </div>

            </div>

            <form class="w-full flex flex-col gap-[1.25rem] relative rounded-lg p-8 m-auto pb-0" @submit.prevent="email">

                <div class="relative">
                    <input v-model="name" type="text" name="name" id="name" placeholder=" "
                        class="p-2 relative left-0 top-0 rounded-lg bg-transparent w-full border-2 border-[#9b9bb1] hover:border-[#235bdd] focus:border-[#235bdd] text-white focus-anim-parent"
                        style="outline: none;">
                    <label for="name"
                        class="absolute left-1 top-[0.30rem] p-1 text-white focus-anim-child rounded-lg bg-[#1c1c27]">Name</label>
                </div>

                <div class="relative">
                    <input v-model="email" type="email" name="email" id="email" placeholder=" "
                        class="p-2 relative left-0 top-0 rounded-lg bg-transparent w-full border-2 border-[#9b9bb1] hover:border-[#235bdd] focus:border-[#235bdd] text-white focus-anim-parent"
                        style="outline: none;">
                    <label for="email"
                        class="absolute left-1 top-[0.30rem] p-1 text-white focus-anim-child rounded-lg bg-[#1c1c27]">Email</label>
                </div>

                <div class="relative">
                    <textarea v-model="message" type="text" name="message" id="message" placeholder=" " cols="30" rows="7"
                        class="p-2 relative left-0 top-0 rounded-lg bg-transparent w-full border-2 border-[#9b9bb1] hover:border-[#235bdd] focus:border-[#235bdd] text-white focus-anim-parent"
                        style="outline: none; resize: none;"></textarea>
                    <label for="message"
                        class="absolute left-1 top-[0.30rem] p-1 text-white focus-anim-child rounded-lg bg-[#1c1c27]">Message</label>
                </div>

                <button type="submit" class="bg-[#235bdd] p-3 rounded-lg relative bottom-[40px] mt-7"><i
                        class="fa-solid fa-paper-plane mr-1"></i> Submit</button>
            </form>

        </div>

    </div>
    <SupportChat />
    <Footer />
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import SupportChat from '../components/SupportChat.vue';
export default {
    components: {
    Navbar,
    Footer,
    SupportChat
},
    mounted() {
        AOS.init();
        this.typeWriter();
        var section = document.querySelectorAll(".section");
        var sections = {};
        var i = 0;

        Array.prototype.forEach.call(section, function (e) {
            sections[e.id] = e.offsetTop;
        });

        window.onscroll = function () {
            var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

            for (i in sections) {
                if (sections[i] <= scrollPosition) {
                    document.querySelectorAll('.active').forEach(item => item.classList.remove('active'));
                    if (i !== 'home') document.querySelector('a[href*=' + i + ']').classList.add('active');
                }
            }
        };
    },
    methods: {
        typeWriter() {
            const txt = this.texts[this.current];

            if (this.i < txt.length) {
                document.getElementById("language").innerHTML += txt.charAt(this.i);
                this.i++;
                setTimeout(this.typeWriter, 50);
                return;
            }

            if (this.i === txt.length) {
                setTimeout(() => {
                    this.deleteText();
                }, 2000);
            }
        },
        deleteText() {
            const txt = this.texts[this.current];

            if (this.i > 0) {
                document.getElementById("language").innerHTML = txt.substring(0, this.i - 1);
                this.i--;
                setTimeout(this.deleteText, 50);
                return;
            }

            setTimeout(() => {
                this.current = this.current < this.texts.length - 1 ? this.current + 1 : 0;
                this.typeWriter();
            }, 2000);
        },
        openDiv(name) {
            const div = document.getElementById(name);
            const arrow = document.getElementById(name + "-arrow");
            arrow.style.transform = (arrow.style.transform == 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)')
            setTimeout(() => {
                div.style.display = (div.style.display == 'block' ? 'none' : 'block');
            }, 100);
        },
        redirect(url) {
            window.location = url;
        },
        scrollToSection(id) {
            document.getElementById(id).scrollIntoView({
                behavior: "smooth"
            });
        },
        email() {
            const name = this.name;
            const email = this.email;
            const message = this.message;

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields');
                return;
            }

            const data = {
                name,
                email,
                message
            };

            fetch('https://mailme.michelemanna.me/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            }).then(res => {
                if (res.status === 200) {
                    alert('Email sent successfully');
                    this.name = '';
                    this.email = '';
                    this.message = '';
                } else {
                    alert('Something went wrong');
                }
            }).catch(err => {
                console.log(err);
                alert('Something went wrong');
            });
        }
    },
    data() {
        return {
            texts: [
                "Web Dev.",
                "Designer.",
                "System Admin."],
            current: 0,
            i: 0,
            name: "",
            email: "",
            message: ""
        }
    }
}
</script>

<style>
.focus-anim-parent:focus~.focus-anim-child,
.focus-anim-parent:not(:placeholder-shown).focus-anim-parent:not(:focus)~.focus-anim-child {
    top: -0.85rem;
    font-size: 0.8rem;
    left: 0.8rem;
}

.focus-anim-child {
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
}
</style>