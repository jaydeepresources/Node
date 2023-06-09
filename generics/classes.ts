class Exam<T> {
    code: T

    printCode() {
        console.log(this.code)
    }
}

let exam: Exam<number> = new Exam()
exam.code = 123123
exam.printCode()