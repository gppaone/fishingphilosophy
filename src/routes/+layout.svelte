<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css'; // Your global Tailwind CSS
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <main class="flex-1 p-4">
    <slot />
  </main>
  <Footer />
</div>