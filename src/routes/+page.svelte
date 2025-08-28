<!-- src/routes/+page.svelte -->
<script>
  import RandomVideos from '$lib/components/RandomVideos.svelte';
</script>

<div class="container mx-auto">
    <div 
    class="
        flex flex-col h-125
        bg-[url('$lib/assets/banner-image2.jpg')]
        bg-cover
        bg-left-top
    "
    ></div>
    <div class="p-4">
        <h1 class="text-3xl font-bold mb-4">Welcome to Fishing Philosophy</h1>
        <p class="text-lg">
            Painting your own fishing lures is a very rewarding experience. It allows you to customize your gear to match local baitfish, express your creativity, and potentially improve your fishing success. Whether you're a seasoned angler or a beginner, crafting your own lures can enhance your connection to the sport and provide a unique sense of accomplishment.  My hope is to help you get started on your own lure painting journey.
        </p>
    </div>
    <RandomVideos />

</div>