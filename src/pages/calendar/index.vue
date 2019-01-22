<template>
    <section>
        <div class="calendar-top">
            <div v-for="(item, index) in week" :key="index">{{item}}</div>
        </div>
        <div class="calendar-box">
            <div v-for="(item, index) in days" :key="index">{{item.getDate()}}</div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            week: ['一', '二', '三', '四', '五', '六', '日'],
            days: [],
            yzYear: 1990, // 年
            yzMonth: 1, // 月
            yzDay: 1, // 日
            yzWeek: 0
        };
    },
    created () {
        this.initData();
    },
    methods: {
        initData (cur) {
            let day = new Date();
            if (cur) {
                day = new Date(cur);
            }

            // 设置当天的年、月、日、星期
            this.yzYear = day.getFullYear();
            this.yzMonth = day.getMonth() + 1;
            this.yzDay = day.getDate();
            this.yzWeek = day.getDay() === 0 ? 7 : day.getDay();

            // 获取当天之前的天数
            for (let i = this.yzDay; i >= 0; i--) {
                let d = day.setDate(this.yzDay - i);
                this.days.push(new Date(d));
            }

            // 获取当天之后的天数
            for (let i = 0; i < 35 - this.yzDay; i++) {
                let d = day.setDate(this.yzDay + i);
                this.days.push(new Date(d));
            }
        }
    }
};
</script>
