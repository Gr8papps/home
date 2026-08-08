<script>
  window.addEventListener('load', function() {
    
    // Grab the video element
    const introVideo = document.getElementById('intro-video');
    
    // Listen for the exact moment the video finishes
    introVideo.addEventListener('ended', function() {
      
      // Hide the video overlay
      document.getElementById('intro-overlay').style.display = 'none';
      
      // Show the main website
      document.getElementById('main-website').style.display = 'block';
      
    });
    
  });
</script>
