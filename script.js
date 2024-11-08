function generateResume() {
    // Populate resume preview with user inputs
    document.getElementById('displayName').innerText = document.getElementById('name').value;
    document.getElementById('displayEmail').innerText = document.getElementById('email').value;
    document.getElementById('displayPhone').innerText = document.getElementById('phone').value;

    const linkedinUrl = document.getElementById('linkedin').value;
    const githubUrl = document.getElementById('github').value;
    
    document.getElementById('displayLinkedIn').innerText = linkedinUrl;
    document.getElementById('displayLinkedIn').href = linkedinUrl;
    document.getElementById('displayGitHub').innerText = githubUrl;
    document.getElementById('displayGitHub').href = githubUrl;

    document.getElementById('displayExperience').innerText = document.getElementById('experience').value;
    document.getElementById('displayEducation').innerText = document.getElementById('education').value;

    // Display uploaded photo in the preview
    const fileInput = document.getElementById('photo');
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('displayPhoto').src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }

    // Toggle display from form to preview
    document.getElementById('resumeForm').style.display = 'none';
    document.getElementById('resumePreview').style.display = 'block';
}

function downloadPDF() {
    // Convert preview to PDF and download
    const element = document.getElementById('resumeContent');
    html2pdf().from(element).save('resume.pdf');
}
