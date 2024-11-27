export function getTodaysDate() {
    const todaysDate = new Date();
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const getDateSuffix = (day) => {
        const lastDigit = day % 10;

        if (day >= 11 && day <= 13) {
            return "th";
        }

        switch (lastDigit) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    return `${weekDays[todaysDate.getUTCDay()]}, ${months[todaysDate.getMonth()]} ${todaysDate.getDate()}${getDateSuffix(todaysDate.getDate())}, ${todaysDate.getFullYear()}`
}