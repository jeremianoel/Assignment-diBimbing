type Person = {
    firstName: string,
    lastName: string
}

const getFullName = (person: Person) => {
    const hasilConcatenasi  = person.firstName + " " + person.lastName
    return  hasilConcatenasi
}

console.log(getFullName({
    firstName: "Jeremia",
    lastName: "Noel"
}))

export{}
