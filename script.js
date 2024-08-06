document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('galleryContainer');

    fetch('https://api.github.com/repos/你的用户名/你的仓库/contents/图片上传路径')
        .then(response => response.json())
        .then(data => {
            data.forEach(file => {
                if (file.type === 'file' && file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
                    const img = document.createElement('img');
                    img.src = file.download_url;
                    galleryContainer.appendChild(img);
                }
            });
        })
        .catch(error => console.error('获取图片失败:', error));
});
