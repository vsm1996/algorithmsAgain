function letterGrade(grade) {
    if (grade >= 90) {
        return "Score: " + grade + ". Grade: A"
        } else if ( grade > 80 && grade < 89) {
            return "Score: " + grade + ". Grade: B"
        } else if (grade > 70 && grade < 79) {
            return "Score: " + grade + ". Grade: C"
        } else if (grade > 60 && grade < 69) {
            return "Score: " + grade + ". Grade: D"
        } else {
            return "Score: " + grade + ". Grade: F"
        }
}

console.log(letterGrade(97))