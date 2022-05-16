/* form.js */

export function isPasswordValid(password) {
	console.log(password)
	  if (password.trim().length >= 10) {
		password = password.trim();
		return true
	  } else {
		  return false
	  }
  }