function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-250px';
    } else {
        sidebar.style.right = '0px';
    }
}

const dashavatara = [
    { name: 'Matsya', url: '/images/Dashavatara/Matsya/Matsya_avatar.jpg', link: '/pages/matsya.html' },
    { name: 'Kurma', url: '/images/Dashavatara/Kurma/Kurma_avatar.jpg', link: '/pages/kurma.html' },
    { name: 'Varaha', url: '/images/Dashavatara/Varaha/Varaha_avtar.jpg', link: '/pages/varaha.html' },
    { name: 'Narasimha', url: '/images/Dashavatara/Narasimha/Narasimha_avtar.jpg', link: '/pages/narasimha.html' },
    { name: 'Vamana', url: '/images/Dashavatara/Vamana/Vaman_avtar.jpg', link: '/pages/vamana.html' },
    { name: 'Parashurama', url: '/images/Dashavatara/Parashurama/Parashurama_avtar.jpg', link: '/pages/parashurama.html' },
    { name: 'Rama', url: '/images/Dashavatara/Rama/Rama_avtar.jpg', link: '/pages/rama.html' },
    { name: 'Krishna', url: '/images/Dashavatara/Krishna/Krishna_avtar.jpg', link: '/pages/krishna.html' },
    { name: 'Buddha', url: '/images/Dashavatara/Buddha/Buddha_avtar.jpg', link: '/pages/buddha.html' },
    { name: 'Kalki', url: '/images/Dashavatara/Kalki/Kalki_avatar.jpg', link: '/pages/kalki.html' }
];

const section = document.getElementById('dashavatara-section');

dashavatara.forEach(avatar => {
    const div = document.createElement('div');
    div.className = 'avatar-container';

    const a = document.createElement('a');
    a.href = avatar.link;

    const img = document.createElement('img');
    img.src = avatar.url;
    img.alt = avatar.name;
    img.className = 'avatar-img';

    const caption = document.createElement('p');
    caption.textContent = avatar.name;
    caption.className = 'avatar-caption';

    a.appendChild(img);
    div.appendChild(a);
    div.appendChild(caption);
    section.appendChild(div);
});