function kmTom(kilometer) {
    if (kilometer < 0) {
        return "Distance cannot be negative"
    } else {
        let meter = kilometer * 1000;
        return meter;
    }
}
const result = kmTom(79);
console.log(result);
console.log(kmTom(-69));