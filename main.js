const progressData = {
    html: 85, 
    css: 60, 
    js: 45, 
    bs: 90
  };
  
  // Function to animate the progress bar
  function animateProgressBars() {
    // HTML progress bar animation
    const htmlBar = document.querySelector('.progress-bar.html');
    htmlBar.style.width = `${progressData.html}%`;
    htmlBar.textContent = `${progressData.html}%`;
  
    // CSS progress bar animation
    const cssBar = document.querySelector('.progress-bar.css');
    cssBar.style.width = `${progressData.css}%`;
    cssBar.textContent = `${progressData.css}%`;
  
    // JavaScript progress bar animation
    const jsBar = document.querySelector('.progress-bar.js');
    jsBar.style.width = `${progressData.js}%`;
    jsBar.textContent = `${progressData.js}%`;
    
    // Bootstrap prograss bar animation
    const bsBar = document.querySelector('.progress-bar.bs');
    bsBar.style.width = `${progressData.bs}%`;
    bsBar.textContent = `${progressData.bs}%`;
  }
  
  // Call the function to animate the bars once the page loads
  window.onload = animateProgressBars;
  