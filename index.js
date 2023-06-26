let goc = document.getElementById('goc')
let ao = document.getElementById('goc')
let quan = document.getElementById('quan')
let gang = document.getElementById('gang')
let giay = document.getElementById('giay')
let rada = document.getElementById('rada')
let ct = document.getElementById('ct')
let glt = document.getElementById('glt')
let btn = document.getElementById('btn')
let out = document.getElementById('out')
btn.onclick = () => {
    if (goc.value !== '') {

        let allInput = document.querySelectorAll('.cclt')
        let values = []
        allInput.forEach(e => {
            if (e.value !== '') {
                values.push(parseFloat(e.value))
            }
        });
        let currentGoc = parseFloat(goc.value)
        values.forEach(e => {
            currentGoc = currentGoc + (currentGoc * e) / 100
        });
        out.innerHTML = currentGoc
    } else {
        alert('Nhập hộ cái chỉ số gốc cái!')
    }
}