// 定时器+时间戳 节流
//export function throttle(func,delay){
//     let startTime = Date.now()
//     let timer = null
//     // console.log('start：'+startTime);
    
//     return function(){
//         let context = this
//         let args = arguments;
//         let now = Date.now()
//         // console.log('now：'+now);
//         // console.log(now-startTime);
//         let interval = delay-( now - startTime )
//         clearTimeout(timer)
//         if(now-startTime >= delay) {
//             func.apply(context,args);
//             startTime = Date.now();
    
//         }else{
//             timer = setTimeout(func,interval)
//         }
//     }
// }

//定时器版本节流
export function throttle(func,delay){
    let timer = null
    
    return function(){
        // let context = this
        // let args = arguments;
  
        if(!timer) {
            timer = setTimeout(()=>{
                func.apply(this,arguments)
                timer = null
            },delay)
    
        }
    }
}
//防抖
export function debounce(func, wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        
        timeout = setTimeout(() => {
            func.apply(context, args)
        }, wait);
    }
}
//日期过滤器
export function formatDate (date, fmt) {
    　　if (/(y+)/.test(fmt)) {
    　　fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
    　　'M+': date.getMonth() + 1,
    　　'd+': date.getDate(),
    　　'h+': date.getHours(),
    　　'm+': date.getMinutes(),
    　　's+': date.getSeconds()
    }
    for (let k in o) {
    　　　　if (new RegExp(`(${k})`).test(fmt)) {
    　　　　let str = o[k] + ''
    　　　　fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    　　}
    }
    　　return fmt
    }
    function padLeftZero (str) {
    　　return ('00' + str).substr(str.length)
    }
    