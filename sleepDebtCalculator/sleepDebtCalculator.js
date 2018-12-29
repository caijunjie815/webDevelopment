// create the function that get the number of sleep hours for each day in the last week
const getSleepCalculator = day => {
    day = day.toLowerCase();        //convert input string to lowercase
    if ((day === 'monday') || (day === "tuesday")) {
        return 8;
    } else if ((day === "wednesday") || (day === "thursday") || (day === 'friday')) {
        return 9;
    } else if ((day === "sunday") || (day === "saturday")) {
        return 7;
    } else {
        let day = prompt('Not a day, enter a valid day: ');     //if not a day, prompt users to enter a valid day
        //console.log(day);
        //console.log(getSleepCalculator(day));
        return getSleepCalculator(day);     //after user entering a valid day, recall the function itself.
    }
};


// create the function to calculate over actual sleep hours last week
const getActualSleepHours = () => {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    //the loop for add sleep hour for each day last week
    let sumOfSleepHours = 0;
    for (let i = 0; i < 7; i++) {
        sumOfSleepHours += getSleepCalculator(days[i]);
    }
    return sumOfSleepHours;
};


// create the function to get overall ideal sleep hours last week
const getIdealSleepHours = (idealSleepHours = 8) => idealSleepHours * 7;    //default ideal hour is 8


// create the function to calculate the debt of sleep hours last week
const calculateDebtSleepHours = () => {
    let actualSleepHours = getActualSleepHours(), idealSleepHours = getIdealSleepHours(9); // assume ideal hours is 9
    const debtHours = Math.abs(actualSleepHours - idealSleepHours);
    let suggest = '';
    if (actualSleepHours === idealSleepHours) {
        suggest = 'You get the perfect amount sleep hours!';
    } else if (actualSleepHours < idealSleepHours) {
        suggest = `You need ${debtHours} hours more sleep.`;
    } else
        suggest = `You get ${debtHours} hours more sleep than needed.`;
    return `Your ideal sleep hours last week: ${idealSleepHours}.<br>Your actual sleep hours last week: ${actualSleepHours}<br>` + suggest;
};


document.write(calculateDebtSleepHours());