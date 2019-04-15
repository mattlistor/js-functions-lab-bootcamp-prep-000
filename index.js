function happyHolidays() {
  console.log("Happy holidays!")
}

function happyHolidaysTo(name) {
  return('Happy holidays, ${name}!')
}

function happyHolidayTo(holiday, name) {
  return(`Happy ${holiday}, ${name}!`)
}

function holidayCountdown(days, holiday) {
  return(`It's ${days} days until ${holiday}!`)
}

happyHolidays()
happyHolidaysTo("Matt")
console.log(happyHolidayTo("Christmas", "Matt"))
console.log(holidayCountdown(23, "Christmas"))
