/* 
* Purpose: Implements a login feature that allows a user to attempt login a limited number 
*           of times before the account becomes locked
* Owner: Brian Karimi
* Course: SDPT-016
* Date: 7th October, 2026
* Last modification: 18:58 hrs
* 
*/

const userInfo = {
  username : "", 
  password : ""
}

// Utility: Tracks login attempts and returns
//          statement based on successful login,
//          failed login and attempted limits
// Params: userInfo (object)
// Returns: string 
function createLoginTracker(userInfo){
  let attemptCount = 0;
  return (passwordAttempt) => {
    attemptCount++;
    if (userInfo.password === passwordAttempt && attemptCount <= 3){
      return `Login successful`;
    }
    else if (userInfo.password !== passwordAttempt && attemptCount <= 3){
      return `Attempt ${attemptCount}: Login failed`;
    }
    return `Account locked due to too many failed login attempts`;
  }
}

// Export of the createLoginTracker function
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};