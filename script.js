function generateNumbers() {
    const quantity = parseInt(document.getElementById('numberCount').value);
    const numbers = new Set();
    
    while(numbers.size < quantity) {
        numbers.add(Math.floor(Math.random() * 60) + 1);
    }
    
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    document.getElementById('result').textContent = sortedNumbers.join(' - ');
}

function copyNumbers() {
    const text = document.getElementById('result').textContent;
    navigator.clipboard.writeText(text).then(() => {
        const message = document.getElementById('copyMessage');
        message.style.opacity = '1';
        setTimeout(() => {
            message.style.opacity = '0';
        }, 2000);
    });
}