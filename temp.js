const person = {
    name: 'Ivan'
}

function info() {
    console.log(this.name)
}

info.bind(person)()
info.call(person)