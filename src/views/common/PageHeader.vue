<template>
    <header>
        <!-- Header Section Begin -->
        <div class="header" ref="header">
            <!--메뉴-->
            <nav class="header_menu">
                <!--로고-->
                <div class="header_logo left">
                    <a href="">Portfolio</a>
                </div>

                <!--메뉴-->
                <div class="header_text center">
                    <ul>
                        <li><button v-on:click="scrollToTarget(1)">ABOUT ME</button></li>
                        <li><button v-on:click="scrollToTarget(2)">SKILLS</button></li>
                        <li><button v-on:click="scrollToTarget(3)">PROJECT</button></li>
                        <li><button v-on:click="scrollToTarget(4)">CARRER</button></li>
                    </ul>
                </div>
                
            </nav>
        </div>
        <!-- Header Section End -->
        
        
    </header>
</template>

<script>
import { ref, onMounted } from 'vue';

export default ({
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted() { //이벤트 : 이 컴포넌트(App.vue)마운트 되면
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrT = window.pageYOffset || document.documentElement.scrollTop;
            const headerElement = this.$refs.header;

            if (scrT === 0) {
                headerElement.classList.remove('background');
                headerElement.classList.add('backgroundnone');
            } else {
                headerElement.classList.remove('backgroundnone');
                headerElement.classList.add('background');
            }
        }
        
    },
    setup() {
        const targetComponent = ref(null);
        let page = 1;
        const scrollToTarget = (id) => {
            if (targetComponent.value) {
                page = id;
                targetComponent.value = document.getElementById('movePage_'+page);
                console.log('scrollToTarget page : ' + page);
                targetComponent.value.scrollIntoView({ behavior: 'smooth' });
            }
        };

        onMounted(() => {
            console.log('onMounted page : ' + page);
            targetComponent.value = document.getElementById('movePage_'+page);
        });

        return {
            targetComponent,
            scrollToTarget
        };
    }
})
</script>
    
<style>
    @import '@/assets/css/header.css'

</style>