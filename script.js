document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: [
            "Software Engineer✨",
            "Gentleman Hacker🤖",
            "Traveler🌐",
            "Scala Entusiast🚀👨‍💻",
            "GNU/Linux Enthusiast🐧",
            "Backend Developer🛠️"
        ],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    };

    var typed = new Typed("#typed-text", options);

    const icons = document.querySelectorAll('.icon-link');

    icons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.querySelector('img').style.transform = 'scale(1.2)';
        });

        icon.addEventListener('mouseout', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });

        icon.addEventListener('mousedown', function() {
            this.querySelector('img').style.transform = 'scale(1.1)';
        });

        icon.addEventListener('mouseup', function() {
            this.querySelector('img').style.transform = 'scale(1.2)';
        });
    });

    const customDialog = document.getElementById('my-dialog');
    const dialogText = document.getElementById('dialog-text');
    const dialogOkButton = document.getElementById('dialog-ok-button');

    function showDialog(message) {
        dialogText.innerHTML = message;
        customDialog.classList.add('show');
    }

    dialogOkButton.addEventListener('click', function() {
        customDialog.classList.remove('show');
    });
});