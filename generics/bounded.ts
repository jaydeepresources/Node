class Employee { }

class Programmer extends Employee { }
class JavaProgrammer extends Programmer { }
class DotNetProgrammer extends Programmer { }

class Tester extends Employee { }
class ManualTester extends Tester { }
class AutomationTester extends Tester { }

class Meeting<T extends Employee>{
    meetingHead: T

    printMeetingHead() {
        console.log(this.meetingHead)
    }
}

let meeting: Meeting<JavaProgrammer> = new Meeting()
meeting.meetingHead = new JavaProgrammer()
