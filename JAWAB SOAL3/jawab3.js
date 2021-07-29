function ArrayToObject(data) {
    var now = new Date()
    var thisyear = now.getFullYear()
    var age = thisyear - data[3]
    return {
        "firstName": data[0],
        "lastName": data[1],
        "gender": data[2],
        "age": data[3]
    }
};
var people = [
    ["Bruce", "Banner", "mele", 1975],
    ["Natasha", "Ronof", "famele", "invalid Birth Day"]
]

console.log(ArrayToObject(people[0]))
console.log(ArrayToObject(people[1]))