// Focus-make input active
document.querySelector('input[type="text"]')
    .addEventListener('focus', function() {
        this.style.borderColor = "initial";
    });
// Lose focus
document.querySelector('input[type="text"]')
    .addEventListener('blur', function() {
        if (!this.value) {
            this.style.border = "red";
        }
    });

// Blur - check if it is empty. If empty highlight borders red
// Focus - remove red borders.
document.querySelector('input[type="text"]')
    .addEventListener('change', function() {
        alert('Changed');
    });

document.querySelector('input[type="text"]')
    .addEventListener('change', function() {
        if (this.checked) {
            alert('You are emploed');
        } else {
            alert('You are unempled');
        }
    });

// document.querySelector('select')
//     .addEventListener('input', function() {
//         if (this.value) {

//         }
//     });

document.querySelector('#example')
    .addEventListener('click', function() {
        this.className = "bad";
    });
document.querySelector('#example')
    .addEventListener('dblclick', function() {
        this.className = "good";
    });

// 1. Attach changed to checkbox
// 2. If value is true output "You are emploed" if false "You are unempled"