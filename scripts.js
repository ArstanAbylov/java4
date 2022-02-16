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


// 1. Attach changed to checkbox
// 2. If value is true output "You are emplaed" if false "You are unempled"