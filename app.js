const galleryData = [
    { category: 'cats', url: 'img/jae-park-7GX5aICb5i4-unsplash.jpg', alt: 'Cat 1' },
    { category: 'cats', url: 'img/rana-sawalha-X7UR0BDz-UY-unsplash.jpg', alt: 'Cat 2' },
    { category: 'cats', url: 'img/zoe-gayah-jonker-13ky5Ycf0ts-unsplash.jpg', alt: 'Cat 3' },
    { category: 'dogs', url: 'img/baptist-standaert-mx0DEnfYxic-unsplash.jpg', alt: 'Dog 1' },
    { category: 'dogs', url: 'img/caleb-fisher-pgUbpDLJh3E-unsplash.jpg', alt: 'Dog 2' },
    { category: 'dogs', url: 'img/jared-murray-RApQxN_Js5Y-unsplash.jpg', alt: 'Dog 3' },
    { category: 'humans', url: 'img/marina-vitale-t809JJ6r9KA-unsplash.jpg', alt: 'Human 1' },
    { category: 'humans', url: 'img/helena-lopes-PGnqT0rXWLs-unsplash.jpg', alt: 'Human 2' },
    { category: 'humans', url: 'img/matthieu-gouiffes-7ggUdi1foR0-unsplash.jpg', alt: 'Human 3' },
    { category: 'birds', url: 'img/rusty-watson-KLylpBvo0ww-unsplash.jpg', alt: 'Bird 1' },
    { category: 'birds', url: 'img/madison-oren-hcj90TOBW58-unsplash.jpg', alt: 'Bird 2' },
    { category: 'birds', url: 'img/mcgill-library-kbjQSAZYrHk-unsplash.jpg', alt: 'Bird 3' },
    { category: 'nature', url: 'img/blake-verdoorn-cssvEZacHvQ-unsplash.jpg', alt: 'Nature 1' },
    { category: 'nature', url: 'img/kimon-maritz-zMV7sqlJNow-unsplash.jpg', alt: 'Nature 2' },
    { category: 'nature', url: 'img/johannes-andersson-UCd78vfC8vU-unsplash.jpg', alt: 'Nature 3' },
    { category: 'technology', url: 'img/maxim-hopman-IayKLkmz6g0-unsplash.jpg', alt: 'Technology 1' },
    { category: 'technology', url: 'img/alex-knight-2EJCSULRwC8-unsplash.jpg', alt: 'Technology 2' },
    { category: 'technology', url: 'img/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg', alt: 'Technology 3' },
    { category: 'food', url: 'img/pablo-merchan-montes-0nT08Z-MhiE-unsplash.jpg', alt: 'Food 1' },
    { category: 'food', url: 'img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg', alt: 'Food 2' },
    { category: 'food', url: 'img/brooke-lark-GJMlSBS0FhU-unsplash.jpg', alt: 'Food 3' },
    { category: 'abstract', url: 'img/victoria-berman-U-ouhtPgHH4-unsplash.jpg', alt: 'Abstract Art 1' },
    { category: 'abstract', url: 'img/rhondak-native-florida-folk-artist-_Yc7OtfFn-0-unsplash.jpg', alt: 'Abstract Art 2' },
    { category: 'abstract', url: 'img/dan-cristian-padure-yCbgsZ6rVPU-unsplash.jpg', alt: 'Abstract Art 3' }
];

const gallery = document.getElementById('gallery');

galleryData.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('filter-item', item.category);
    galleryItem.setAttribute('data-aos', 'fade-up');

    const imageElement = document.createElement('img');
    imageElement.src = item.url;
    imageElement.alt = item.alt;
    imageElement.loading = 'lazy';

    galleryItem.appendChild(imageElement);
    gallery.appendChild(galleryItem);
});