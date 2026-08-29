const logout = document.getElementById("logout");

logout.addEventListener("click", function() {
    window.location.href = "index.html";
});

const profileUpload = document.getElementById("profile-upload");
const profilePicture = document.getElementById("profile-picture");

profileUpload.addEventListener("change", function() {
    const file = profileUpload.files[0];

    if (file) {
        profilePicture.src = URL.createObjectURL(file);
    }
});