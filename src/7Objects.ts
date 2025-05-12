let emp: {
    readonly id: number, // now you cannot modify
    name?: string // optional ?
    retire: (date: Date) => void // set void for printing
} = {
    id: 1,
    retire: (date: Date) => console.log(date)
}
emp.name = "saurabh";