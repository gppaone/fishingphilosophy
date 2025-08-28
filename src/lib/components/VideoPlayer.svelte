<script>
    export let video;
    export let autoplay = false;
    
    $: embedUrl = `https://www.youtube.com/embed/${video.id}${autoplay ? '?autoplay=1' : ''}`;
    </script>

    <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <div class="aspect-video">
        <iframe
        src={embedUrl}
        title={video.title}
        class="w-full h-full"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        ></iframe>
    </div>
    <div class="p-4">
        <h3 class="text-lg font-semibold text-white truncate">{video.title}</h3>
    </div>
</div>