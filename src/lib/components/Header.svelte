<script>
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  // Close menu when clicking on a link
  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<header class="container mx-auto bg-gray-800 text-white p-4 shadow-md">
  <nav class="container mx-auto">
    <!-- Top navigation bar -->
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <a href="/" class="text-xl font-bold flex items-center" on:click={closeMenu}>
        <img src="/fp-logo.png" alt="Fishing Philosophy" class="w-18" />
        <div class="text-3xl">Fishing Philosophy</div>
      </a>

      <!-- Desktop navigation links (hidden on mobile) -->
      <div class="hidden md:flex">
        <a href="/supplies" class="mx-2 hover:text-gray-300">Supplies</a>
        <a href="/learn" class="mx-2 hover:text-gray-300">Learn</a>
      </div>

      <!-- Hamburger button (visible on mobile only) -->
      <button
        class="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        <!-- Hamburger lines with animation -->
        <span
          class="block w-6 h-0.5 bg-white transition-transform duration-300 {isMenuOpen
            ? 'rotate-45 translate-y-1.5'
            : ''}"
        ></span>
        <span
          class="block w-6 h-0.5 bg-white transition-opacity duration-300 {isMenuOpen
            ? 'opacity-0'
            : ''}"
        ></span>
        <span
          class="block w-6 h-0.5 bg-white transition-transform duration-300 {isMenuOpen
            ? '-rotate-45 -translate-y-1.5'
            : ''}"
        ></span>
      </button>
    </div>

    <!-- Mobile navigation menu (appears below header when open) -->
    <div
      class="md:hidden transition-all duration-300 overflow-hidden {isMenuOpen
        ? 'max-h-96 opacity-100'
        : 'max-h-0 opacity-0'}"
    >
      <div class="pt-4 pb-2 flex flex-col space-y-2">
        <a
          href="/supplies"
          class="block py-2 hover:text-gray-300 hover:bg-gray-700 px-2 rounded transition-colors duration-200"
          on:click={closeMenu}
        >
          Supplies
        </a>
        <a
          href="/learn"
          class="block py-2 hover:text-gray-300 hover:bg-gray-700 px-2 rounded transition-colors duration-200"
          on:click={closeMenu}
        >
          Learn
        </a>
      </div>
    </div>
  </nav>
</header>