document.querySelectorAll('.project-list ul li').forEach(item => {
    item.addEventListener('click', event => {
        const target = event.target.getAttribute('data-target');
        document.querySelectorAll('.details-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(target).classList.add('active');
    });
});
