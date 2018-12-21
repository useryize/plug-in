<template>
    <div class="slide" ref="slide">
        <div class="slide-grow" ref="slideGrow">
            <div>第一页</div>
            <div>第二页</div>
            <div>第三页</div>
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
            this._getTouch();
        });
    },
    methods: {
        _getTouch () {
            let slide = this.$refs.slide;
            let slideGrow = this.$refs.slideGrow;
            let startX, moveX, endX;
            slide.addEventListener('touchstart', (res) => {
                startX = res.touches[0].pageX;
            });
            slide.addEventListener('touchmove', (res) => {
                moveX = res.touches[0].pageX;
                endX = -(startX - moveX);
                console.error(endX);
                if (endX > 0) {
                    
                }
                slideGrow.style.transform = `translate(${endX}px, 0)`
                console.error();
            });
            slide.addEventListener('touchend', (res) => {
            });
        },
        _getSildeWidth () {
            let slideWidth = +this.$refs.slide.clientWidth,
                slideGrow = this.$refs.slideGrow,
                slideGrowChildren = slideGrow.children,
                width = 0;
            for (let item of slideGrowChildren) {
                item.style.width = slideWidth + 'px';
                width += slideWidth;
                console.log(width);
            };
            slideGrow.style.width = width + 'px';
        }
    }
};
</script>
<style >
    .slide{width: 100%;overflow: hidden;}
    .slide-grow{overflow: hidden;}
    .slide-grow > div{height: 200px;float: left; text-align: center; background-color: #ccc;line-height: 200px; color: #f3f3f3;font-size: 24px}
    /* .slide-grow > div:nth-child(1) {background-color: rgb(17, 38, 134)}
    .slide-grow > div:nth-child(2) {background-color: #bd2222}
    .slide-grow > div:nth-child(3) {background-color: #000} */
</style>
