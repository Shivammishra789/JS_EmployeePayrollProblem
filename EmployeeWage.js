
// declaring constants
const IS_PART_TIME = 1; 
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20; 

function getWorkingHours (empCheck) {   // checking employee present part time or full time
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}   

function calcDailyWage (empHrs) {     // calculating daily employee wage
    return empHrs * WAGE_PER_HOUR;
}   

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array(); 

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&          // loop will run till max hours 160 or working days 20 is reached
       totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours (empCheck);
    totalEmpHrs += empHrs; 
    empDailyWageArr.push(calcDailyWage (empHrs));  //Storing Daily Wage in a Array
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days: " + totalWorkingDays +
            " Total Hrs: " + totalEmpHrs + " Emp Wage: "+ empWage);
console.log(empDailyWageArr);

// Array Helper Function

// UC7A Calculate total wage using forEach traversal or reduce method  
let totEmpWage = 0;
 function sum(dailyWage) {
    totEmpWage += dailyWage;
 }
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays +
            " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totEmpWage);

function totalWages(totalWage,dailyWage){
return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: "+ empDailyWageArr.reduce(totalWages,0));

// UC7B - Show the Day along with Daily Wage using Array map helper function
 let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr  + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("U7B - Daily Wage Map");
console.log(mapDayWithWageArr);

// UC7C - Show Days when Full Time wage of 160 were earned
 function fulltimeWage(dailyWage){
          return dailyWage.includes("160");
 } 
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC7D - Find the first occurence when full time wage was earned using find function
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
} 
console.log("UC7D - First time full time wage was earned on day: "+
             mapDayWithWageArr.find(findFulltimeWage));

// UC7E - Check if every element of full time wage is truely holding full time wage
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
} 
console.log("UC7E - Check all element have full time wage "+
             fullDayWageArr.every(isAllFulltimeWage));

// UC7F - Check if there is any part time wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
} 
console.log("UC7E - Check if any part time wage "+
             mapDayWithWageArr.some(isAnyPartTimeWage));

// UC7G - Find number of days the employee worked
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
} 
console.log("UC7G - Number of days emp worked "+
             empDailyWageArr.reduce(totalDaysWorked,0));





