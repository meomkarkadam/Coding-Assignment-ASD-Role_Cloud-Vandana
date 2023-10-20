function resetForm() {
    // Reset the form using the form's reset method
    document.getElementById("surveyForm").reset();
}

function submitForm() {
    // Get form values
    const service = document.querySelector('input[name="service"]:checked');
    const selectedservice = service ? service.value : "Not specified";
    const services = document.querySelector('input[name="services"]:checked');
    const selectedservices = services ? services.value : "Not specified";
    const gender = document.querySelector('input[name="gender-selection"]:checked');
    const selectedGender = gender ? gender.value : "Not specified";
    const firstName = document.getElementById("first name").value;
    const lastName = document.getElementById("last name").value;
    const country = document.getElementById("country").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const profession = document.getElementById("profession").value;




    // Display values in the popup
    const popupContent = `
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Gender: ${selectedGender}</p>
        <p>Country: ${country}</p>
        <p>Mobile: ${mobile}</p>
        <p>Email: ${email}</p>
        <p>DOB: ${dob}</p>
        <p>Profession: ${profession}</p>
        <p>How satisfied are you with our service?: ${selectedservices}</p>
        <p>Is this your first time using our service?: ${selectedservice}</p>



    `;

    // Show the popup
    showPopup(popupContent);
}

function showPopup(content) {
    // Create overlay and popup elements
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");

    // Display content in the popup
    popup.innerHTML = content;

    // Show overlay and popup
    overlay.style.display = "block";
    popup.style.display = "block";

    // You might want to add a close button or handle closing in another way
    // Example: Close on overlay click
    overlay.onclick = function () {
        overlay.style.display = "none";
        popup.style.display = "none";
    };
}

function showPopup(content) {
    // Create overlay and popup elements
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popupContent");

    // Display content in the popup
    popupContent.innerHTML = content;

    // Show overlay and popup
    overlay.style.display = "block";
    popup.style.display = "block";
}

function closePopup() {
    // Close the popup and overlay
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    overlay.style.display = "none";
    popup.style.display = "none";

    // Reset the form using the form's reset method
    resetForm();
}

// ... (your existing functions) ...








