/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

class CountdownTimer{
    constructor({selector, targetDate})
    {
        this.targetDate = targetDate;
        this.timerRef = document.querySelector(selector);
        this.valueRef = {
            days: this.timerRef.querySelector('[data-value="days"]'),
            hours: this.timerRef.querySelector('[data-value="hours"]'),
            minutes: this.timerRef.querySelector('[data-value="mins"]'),
            secs: this.timerRef.querySelector('[data-value="secs"]'),
        };
        this.start();
    }

     start() {
        
        setInterval(() => {
            const startTame = Date.now();
           
            const time = this.targetDate - startTame;
            
            let { days, hours, mins, secs } = this.timeConvector(time);
            this.valueRef.days.textContent = days;
            this.valueRef.hours.textContent = hours;
            this.valueRef.minutes.textContent = mins;
            this.valueRef.secs.textContent = secs;
        }, 1000);
    
    };
    timeConvector(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
    };

 pad(time) {
    return String(time).padStart(2,'0')
    };
  
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});
// timer.start();
