function lifeInWeeks(age) {
    
    var yearsLeft=(90-age)
    var daysLeft= yearsLeft*365;
    var weeksLeft= yearsLeft*52;
    var monthsLeft= yearsLeft*12;
    console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.");

}
