export const videoList = [
    {
        id: 'VFPiIHh6LSI',
        title: 'Lure Painting - How to paint a vibrant sexy shad on a jerk bait',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
        id: 'QgxqQCGL3rw',
        title: 'Lure Painting Tutorial -  Simple Perch Design Jerk Bait',
        thumbnail: 'https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg'
    },
    {
        id: 'B-7TnbGwkT8',
        title: 'Lure Painting Tutorial -  Dragon Fruit Crank Bait',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
        id: '9NfqoPhs_LE',
        title: 'Lure Painting Tutorial -  Simple 3 color holo glide bait',
        thumbnail: 'https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg'
    },
    {
        id: 'UCFdg6s8rPE',
        title: 'Lure Painting - You can do this SIMPLE sexy shad design on a crankbait',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
        id: 'sdPxtFw2qK4',
        title: 'Lure Painting - How To Paint A Powerful Glow In The Dark Lure',
        thumbnail: 'https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg'
    },
    {
        id: 'ch0SKApG9bs',
        title: 'Painting Lures - Airbrushing a chartreuse lure with mistakes',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
        id: '-Kd3Ye3Qhlw',
        title: 'Lure Painting - How to paint an easy beginner friendly design and add some details',
        thumbnail: 'https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg'
    },
    {
        id: '4QaQ8XruFZw',
        title: 'Easy Lure Painting - Simple design for two minnows that anyone can do',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
        id: 'wNM8YJ8luw8',
        title: 'Lure Painting - Bass will go crazy when they see it',
        thumbnail: 'https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg'
    },
  // Add more videos with their YouTube IDs
];

export function getRandomVideos(count = 2) {
    const shuffled = [...videoList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}