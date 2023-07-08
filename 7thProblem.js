function getAddressCity(address) {
    return address?.city ?? "Unknown"
}

const adrs1 = { street: '60 Feet', city: 'Dhaka', country: 'Bangladsesh' }
const adrs2 = { street: 'Pabna', country: 'Bangladsesh' }

console.log(getAddressCity(adrs1))
console.log(getAddressCity(adrs2))
