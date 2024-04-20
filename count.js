function updateCounts() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/get_counts', true); // Replace with your Jupyter Notebook URL
    xhr.onload = function () {
        if (xhr.status === 200) { // Check for successful response
            const data = JSON.parse(xhr.responseText);
            const enteringElement = document.getElementById('entering-count');
            enteringElement.textContent = data.entering;
            const exitingElement = document.getElementById('exiting-count');
            exitingElement.textContent = data.exiting;
        } else {
            console.error('Error fetching counts:', xhr.statusText);
            // Handle errors gracefully, e.g., display an error message
        }
    };
    xhr.send();
}

setInterval(updateCounts, 1000); // Update counts every second (adjust as needed)

// Call updateCounts initially to display counts on page load
updateCounts();