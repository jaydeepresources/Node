interface MySignal<T> {
    signal: T
}

let mySignal: MySignal<number> = { signal: 12 }
console.log(mySignal.signal)

interface Control<T> {
    controlType: T
    startControl<N>(controlName: N)
}

class Controller implements Control<string> {
    controlType: string
    startControl<N>(controlName: N) {
        console.log('Starting Control Type: ' + this.controlType)
        console.log('Starting Control: ' + controlName)
    }
}

let myController = new Controller()
myController.controlType = 'Trolley'
myController.startControl(1123876)