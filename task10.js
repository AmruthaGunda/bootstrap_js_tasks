function showDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0'); // Get day and pad with leading zero if needed
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Get month (months are zero-based) and pad with leading zero if needed
    const year = currentDate.getFullYear(); // Get full year
    const options = { 
        month: 'long', // Display the month in letters
    };
    const formattedMonth = currentDate.toLocaleDateString(undefined, options);
    document.getElementById('dateDisplay').textContent = `${day}/${formattedMonth}/${year}`;
}
// Function to display the current time
function showTime() {
    const currentTime = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedTime = currentTime.toLocaleTimeString(undefined, options);
    document.getElementById('timeDisplay').textContent = ` ${formattedTime}`;
}
