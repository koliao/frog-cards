import "./Timer.css"

const zeroPad = (n: number) => {
    if(n > 9) return String(n)

    return `0${n}`
}

const Timer = ( {
    secondsLeft,
} : TimerProps ) => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = zeroPad(secondsLeft % 60);

    return (
        <div className="timerContainer">
            <p className="timerText">You need to wait</p>
            <span id="timer">{minutes} : {seconds}</span>
            <p className="timerText">to claim more cards</p>
        </div>
    )
}

export default Timer
