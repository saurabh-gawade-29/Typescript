function greet(name: string | null | undefined): void {
    console.log(name)
}

greet(null);
greet(undefined);