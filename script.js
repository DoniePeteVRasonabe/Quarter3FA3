document.getElementById('generate').addEventListener('click', function() {
    const num1 = Math.ceil(Math.random() * 20);
    const num2 = Math.ceil(Math.random() * 20);
    const num3 = Math.ceil(Math.random() * 20);

    const largest = Math.max(num1, num2, num3);
    const nthLetter = String.fromCharCode(96 + num1);
    const totalMinutes = num2 * num3;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    document.getElementById('largest').innerText = `The largest number is: ${largest}`;
    document.getElementById('nthLetter').innerText = `The ${num1}th letter in the alphabet is: ${nthLetter}`;
    document.getElementById('timeBreakdown').innerText = `Total time: ${totalMinutes} mins (${hours} hr ${minutes} min)`;
});
