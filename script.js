//Tutorial from:https://www.youtube.com/watch?v=Ki0XXrlKlHY&t=628s

setInterval(setClock,1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');


function setClock(){
    const currentDate = new Date();
    console.log(currentDate);
    //取得當前秒數，一分鐘有60秒，取得的當前秒數除以60，這樣就可以知道目前秒針還要旋轉幾度
    const secondsRatio = currentDate.getSeconds()/60 ;
    //分針旋轉概念形同秒針
    //secondRatio是"分"的百分比，因為60秒除以60等於1分鐘，10秒除以60等於六分之一分鐘
    //但我們希望整點的時候秒針跟分針不要重疊覆蓋，而是慢慢地漸漸地靠攏，所以secondRatio可以加進去當前分鐘數，再一同除以60
    const minutesRatio =(secondsRatio + currentDate.getMinutes())/60;
    const hoursRatio = (minutesRatio + currentDate.getHours())/12;
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

}
//設定旋轉角度
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}
