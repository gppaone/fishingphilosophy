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
            <p class="text-gray-800 mb-4 text-xl font-bold">Looking for tools to get started?</p>
            <a href="/supplies" class="text-white bg-blue-700 text-xl hover:bg-blue-500 px-4 py-2 rounded-lg w-fit ease duration-300 flex gap-1 items-center group">
                <span>See Recommended Supplies</span>
                <svg data-v-e660a7a7="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true" role="img"
                    class="group-hover:translate-x-1 transition-transform ease duration-200" width="1em" height="1em"
                    viewBox="0 0 256 256">
                    <path fill="currentColor"
                        d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z">
                    </path>
                </svg>
            </a>
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