import { ref, onUnmounted, computed} from "vue";
import * as dayjs from 'dayjs';
export const useCountDown = () => {
    let timer: NodeJS.Timer | null;
    //响应式数据
    const time = ref(0);
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'));
    //开启倒计时函数
    const start = (currentTime : number) => {
        time.value = currentTime;
        timer = setInterval(() => {
            time.value -- ;
        }, 1000)
    }

    onUnmounted(() => {
        timer && clearInterval(timer);
    });

    return{
        start,
        formatTime
    }
}