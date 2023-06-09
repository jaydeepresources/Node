function getSignal<T>(name: T) {
    console.log(name)
}

getSignal<string>("A Signal")
getSignal<number>(908876543)

function signalMap<K, V>(key: K, value: V) {
    console.log('Key: ' + key)
    console.log('Value: ' + value)
}

signalMap<number, string>(123123, 'A Signal')