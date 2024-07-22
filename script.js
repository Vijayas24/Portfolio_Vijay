document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1Z-uJYfZnK6bUW8nd6-QiXR00kKvKbN-L/view?usp=sharing'; // Replace with the path to your resume file
    link.download = 'Vijay_Resume.pdf'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('git').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://github.com/Vijayas24', '_blank');
});

document.getElementById('linked').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://www.linkedin.com/in/vijay-raj-569994229/', '_blank');
});
