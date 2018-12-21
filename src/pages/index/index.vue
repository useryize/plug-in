<template>
    <div class="slide" ref="slide">
        <div class="slide-grow" ref="slideGrow">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            data: 'nihao'
        };
    },
    created () {},
    mounted () {
        this.$nextTick(() => {
            this._getSildeWidth();
        });
    },
    methods: {
        _getSildeWidth () {
            let slide = this.$refs.slide,
                // slideGrow = this.$refs.slideGrow,
                slidech = slide.children;
            for (let item of slidech) {
                item.style.width = slide.clientWidth;
                console.error(item);
            };
            console.log(slidech);
        }
    }
};
</script>
<style >
    .slide-grow{display: flex}
    .slide > div{width: 100%;}
    .slide:nth-child(1) {background-color: red}
    .slide:nth-child(2) {background-color: #000}
    .slide:nth-child(3) {background-color: #ccc}
</style>
