<template>
    <section>
        <div class="calendar-top">
            <div v-for="(item, index) in week" :key="index">{{item}}</div>
        </div>
        <div class="calendar-box">
            <div v-for="(item, index) in days" :key="index">{{item}}</div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            week: ['一', '二', '三', '四', '五', '六', '日'],
            days: []
        };
    }
};
</script>
