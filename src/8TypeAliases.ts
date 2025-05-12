type Employee = {
    readonly id: number, // now you cannot modify
    name?: string // optional ?
    retire: (date: Date) => void // set void for printing
}

let employee: Employee = {
    id: 1,
    name: "saurabh",
    retire: (date: Date) => { console.log(date) }
}