// 工具
export const getSomeMonthLast = (date) =>{
    console.log(date)
    let month = Number(date.split('-')[1])
    let time = new Date()
    time.setDate(time.getDate())//获取Day天后的日期 
    let y = time.getFullYear(),m
    if (time.getMonth() + month + 1>12){
      y++
      m = time.getMonth() + month - 11//获取当前月份的日期 d
    }else{
      m = time.getMonth() + month + 1//获取当前月份的日期 d
    }
    let d = time.getDate()
    return y + "-" + m + "-" + d
}
  