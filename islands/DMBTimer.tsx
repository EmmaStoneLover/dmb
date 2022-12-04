import { useRef, useState, useEffect } from "preact/hooks";

export default function DMBTimer() {
  const startRef = useRef()
  const endRef = useRef()
  const nowDay = new Date()
  const [dmb, setDMB] = useState({
    start: nowDay,
    end: new Date(
      nowDay.getFullYear() + 1, 
      nowDay.getMonth(), 
      nowDay.getDate(), 
      nowDay.getHours(), 
      nowDay.getMinutes(), 
      nowDay.getSeconds()
    )
  })
  
  const getTimeFromRef = (ref) => {
    const n = ref.current.value.split('-')
    console.log('ref:', ref)
    return new Date(
      n[0], n[1] - 1, n[2], 
      nowDay.getHours(), 
      nowDay.getMinutes(), 
      nowDay.getSeconds()
    )
  }

  const onTimeStart = () => {
    const dd = getTimeFromRef(startRef)
    setDMB({
      ...dmb, 
      start: dd,
      leftTime: getAllDate(dmb.end),
      passTime: getAllDate(nowDay, dd)
    })
  }
  const onTimeEnd = () => {
    const dd = getTimeFromRef(endRef)
    setDMB( {
      ...dmb, 
      end: dd,
      leftTime: getAllDate(dd),
      passTime: getAllDate(nowDay, dmb.start)
    })
  }

  const getAllDate = (end, start?) => {
    var diffInTime = end.getTime() - nowDay.getTime()
    if (start) { diffInTime = end.getTime() - start.getTime() }
    return {
      years: Math.round( diffInTime / (1000*60*60*24*30*365) ),
      months: Math.round( diffInTime / (1000*60*60*24*30) ),
      days: Math.round( diffInTime / (1000*60*60*24) ), 
      hours: Math.round( diffInTime / (1000*60*60) ),
      minutes: Math.round( diffInTime / (1000*60) ),
      seconds: Math.round( diffInTime / 1000 )
    }
  }

  useEffect(() => {
    startRef.current.value = dmb.start.toISOString().split('T')[0]
    endRef.current.value = dmb.end.toISOString().split('T')[0]
    setDMB({
      ...dmb, 
      leftTime: getAllDate(dmb.end),
      passTime: getAllDate(nowDay, dmb.start)
    })
  }, [])

  return (
    <div class="text-center">
      <input 
        type="date" 
        ref={ startRef }
        onChange={ onTimeStart }
        class="mr-3 p-2 mb-2 rounded italic bg-primary dark:text-white dark:bg-primary-dark" 
      />
      <input
        type="date" 
        ref={ endRef }
        onChange={ onTimeEnd }
        class="p-2 mb-2 rounded italic bg-primary dark:bg-primary-dark"
      />
      <div class="mt-2 sm:flex gap-3 sm:flex-wrap lg:justify-center">
        <div class="p-2 sm:w-[150px] my-3 sm:my-0
                    bg-primary dark:bg-primary-dark rounded border-2 border-primary
                    dark:border-primary-dark hover:border-black dark:hover:border-white">
          <p onClick={ () => console.log(dmb.leftTime.years) }>
            Осталось лет: { dmb.leftTime && dmb.leftTime.years >= 0 && dmb.leftTime.years }
          </p>
          <p onClick={ () => console.log(dmb.passTime.years) }>
            Прошло лет: { dmb.passTime && dmb.passTime.years >= 0 && dmb.passTime.years }
          </p>
        </div>
        <div class="p-2 sm:w-[300px] my-3 sm:my-0
                    bg-primary dark:bg-primary-dark rounded border-2 border-primary
                    dark:border-primary-dark hover:border-black dark:hover:border-white">
          <p>Осталось Месяцев: { dmb.leftTime && dmb.leftTime.months >= 0 && dmb.leftTime.months}</p>
          <p>Прошло Месяцев: { dmb.passTime && dmb.passTime.months >= 0 && dmb.passTime.months}</p>
        </div>
        <div class="p-2 sm:w-[400px] my-3 sm:my-0
                    bg-primary dark:bg-primary-dark rounded border-2 border-primary
                    dark:border-primary-dark hover:border-black dark:hover:border-white">
          <p>Осталось Дней: { dmb.leftTime && dmb.leftTime.days >= 0 && dmb.leftTime.days}</p>
          <p>Прошло Дней: { dmb.passTime && dmb.passTime.days >= 0 &&  dmb.passTime.days}</p>
        </div>
        <div class="p-2 sm:w-[350px] my-3 sm:my-0
                    bg-primary dark:bg-primary-dark rounded border-2 border-primary
                    dark:border-primary-dark hover:border-black dark:hover:border-white">
          <p>Осталось Часов: { dmb.leftTime && dmb.leftTime.hours >= 0 && dmb.leftTime.hours}</p>
          <p>Прошло Часов: { dmb.passTime && dmb.passTime.hours >= 0 && dmb.passTime.hours}</p>
        </div>
        <div class="p-2 sm:w-[250px] my-3 sm:my-0
                    bg-primary dark:bg-primary-dark rounded border-2 border-primary
                    dark:border-primary-dark hover:border-black dark:hover:border-white">
          <p>Осталось Минут: { dmb.leftTime && dmb.leftTime.minutes >= 0 && dmb.leftTime.minutes}</p>
          <p>Прошло Минут: { dmb.passTime && dmb.passTime.minutes >= 0 && dmb.passTime.minutes}</p>
        </div>
        <div class="p-2 sm:w-[250px] my-3 sm:my-0
                    bg-primary dark:bg-primary-dark rounded border-2 border-primary
                    dark:border-primary-dark hover:border-black dark:hover:border-white">
          <p>Осталось Секунд: хз</p>
          <p>Прошло Секунд: мне похуй</p>
        </div>
      </div>
    </div>
  );
}
