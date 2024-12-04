export function formatTime(secondsToAdd = 0) {
    const now = new Date();

    now.setSeconds(now.getSeconds() + secondsToAdd);

    let hours = now.getHours();
    const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();

    const isPM = hours >= 12;
    const suffix = isPM ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${hours}:${minutes} ${suffix}`;
};