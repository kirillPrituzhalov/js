function canVote(age) {
	if (age >= 18) {
		return true
	}
	return false
}

// Sample usage - do not modify
console.log(canVote(25))
console.log(canVote(13))