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
            relative
        "
    >
        <div class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[rgba(255,255,255,0.8)] p-6 rounded-lg shadow-lg max-w-sm">
            <p class="text-gray-800 mb-4">Looking for tools to get started?</p>
            <a href="/supplies" class="text-blue-600 hover:text-blue-800 underline text-2xl font-semibold">See Recommended Supplies</a>
        </div>
    </div>
    <div class="p-4">
        <h1 class="text-3xl font-bold mb-4">Welcome to Fishing Philosophy</h1>
        <p class="text-lg">
            Painting your own fishing lures is a very rewarding experience. It allows you to customize your gear to match local baitfish, express your creativity, and potentially improve your fishing success. Whether you're a seasoned angler or a beginner, crafting your own lures can enhance your connection to the sport and provide a unique sense of accomplishment.  My hope is to help you get started on your own lure painting journey.
        </p>
    </div>
    <RandomVideos />

</div>