//=========================
//The Coupon Code
//=========================
// Story

// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Task

// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
// Examples:

// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false


//P: Receive 4 strings: correct code, customer code, current date, and expiration date
//P: Check if correct code and customer code match. If so check if the coupon is not expired
//P: Will always receive 4 strings. The dates will always display "Month, Day, year"
//R: Return true if not expired. Return false if expired
//E: checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
//E: checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
//P: Use if statement to check if entered code is the same as correct code.
//P: Also check if current date is less than expiration date.
//P: To do the above, convert the date using Date.parse()


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
    if (enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)){
        return true
       }
    else{
      return false
    }
    }
  
  checkCoupon('123','123','September 5, 2014','October 1, 2014')