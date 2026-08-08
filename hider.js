<script>
  // Wait for the page to fully load
  window.addEventListener('load', function() {
    
    // Set a timer (3000 means 3000 milliseconds, or 3 seconds)
    // Change "3000" to however long your GIF is!
    setTimeout(function() {
      
      // Hide the GIF overlay
      document.getElementById('intro-overlay').style.display = 'none';
      
      // Show the main website
      document.getElementById('main-website').style.display = 'block';
      
    }, 3000); 
    
  });
</script>
