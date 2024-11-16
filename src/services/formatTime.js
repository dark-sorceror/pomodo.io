export function formatTime(secondsToAdd = 0) {
    const now = new Date();

    now.setSeconds(now.getSeconds() + secondsToAdd);

    let hours = now.getHours() % 12 ? now.getHours() : 12;
    let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();

    return `${hours - 12}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
}