<script>
    import { onMount } from 'svelte';
    import VideoPlayer from './VideoPlayer.svelte';
    import { getRandomVideos } from '$lib/videos.js';
    
    let randomVideos = [];
    let loading = true;
    
    function loadRandomVideos() {
        loading = true;
        randomVideos = getRandomVideos(2);
        loading = false;
    }
    
    onMount(() => {
        loadRandomVideos();
    });
</script>

<section class="w-full py-6 bg-gray-100 rounded-lg">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold text-gray-800">Fishing Philosophy Videos</h2>
        <button
            on:click={loadRandomVideos}
            class="bg-gray-800 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors duration-200"
        >
            Refresh Videos
        </button>
        </div>
        
        {#if loading}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-300 animate-pulse aspect-video rounded-lg"></div>
            <div class="bg-gray-300 animate-pulse aspect-video rounded-lg"></div>
        </div>
        {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each randomVideos as video}
            <VideoPlayer {video} />
            {/each}
        </div>
        {/if}
  </div>
</section>