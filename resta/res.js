document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById("form");
    var btn = document.getElementById("add-but");
    var getstart = document.getElementById("getstart");
    
    if (form && btn && getstart) {  // Check if the elements exist
        btn.addEventListener('click', function () {
            form.style.display = "block";
            getstart.style.display="none";
        });
    }
});

    