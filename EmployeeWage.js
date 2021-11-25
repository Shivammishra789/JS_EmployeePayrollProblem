
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

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&          // loop will run till max hours 160 or working days 20 is reached
       totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours (empCheck);
    totalEmpHrs += empHrs; 
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days: " + totalWorkingDays +
            " Total Hrs: " + totalEmpHrs + " Emp Wage: "+ empWage);






