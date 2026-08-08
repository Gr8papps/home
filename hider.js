<script>
  window.addEventListener('load', function() {
    
    const introVideo = document.getElementById('intro-video');
    const overlay = document.getElementById('intro-overlay');
    const mainSite = document.getElementById('main-website');
    
    // Function to hide the video and show the site
    function revealWebsite() {
      overlay.style.display = 'none';
      mainSite.style.display = 'block';
    }

    // Plan A: Listen for the exact moment the video finishes
    introVideo.addEventListener('ended', revealWebsite);
    
    // Plan B: The Fallback Timer (e.g., 5000 = 5 seconds)
    // If the video gets stuck or blocked, it forces the site to show anyway.
    setTimeout(revealWebsite, 5000); 
    
  });
</script>
