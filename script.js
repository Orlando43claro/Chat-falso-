function addChat() {
    const profilePicInput = document.getElementById('profilePicInput');
    const nameInput = document.getElementById('nameInput');
    const chatContainer = document.getElementById('chatContainer');

    if (profilePicInput.files && profilePicInput.files[0] && nameInput.value) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const chat = document.createElement('div');
            chat.className = 'chat';
            chat.onclick = function() {
                window.location.href = 'chat.html?name=' + encodeURIComponent(nameInput.value);
            };

            const profilePic = document.createElement('img');
            profilePic.src = e.target.result;
            profilePic.alt = 'Profile Picture';
            profilePic.className = 'profile-pic';

            const chatInfo = document.createElement('div');
            chatInfo.className = 'chat-info';

            const chatName = document.createElement('h4');
            chatName.className = 'chat-name';
            chatName.textContent = nameInput.value;

            const chatStatus = document.createElement('p');
            chatStatus.className = 'chat-status';
            chatStatus.textContent = 'En línea';

            const chatTime = document.createElement('span');
            chatTime.className = 'chat-time';
            chatTime.textContent = new Date().toLocaleTimeString();

            chatInfo.appendChild(chatName);
            chatInfo.appendChild(chatStatus);
            chat.appendChild(profilePic);
            chat.appendChild(chatInfo);
            chat.appendChild(chatTime);

            chatContainer.appendChild(chat);
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    } else {
        alert('Por favor, selecciona una foto de perfil y escribe un nombre.');
    }
}
