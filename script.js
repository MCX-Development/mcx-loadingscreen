const svgIcons = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle></svg>',
  ]
  
  const playSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="play-icon">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>`;
  
  const pauseSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pause-icon">
    <rect x="6" y="4" width="4" height="16"></rect>
    <rect x="14" y="4" width="4" height="16"></rect>
  </svg>`;
  
  const iconsContainer = document.getElementById("icons-container")
  const loadingBar = document.getElementById("loading-bar")
  const loadingText = document.getElementById("loading-text")
  const loadingPercentage = document.getElementById("loading-percentage")
  const backgroundMusic = document.getElementById("background-music")
  const playPauseBtn = document.getElementById("play-pause-btn")
  const playIcon = document.getElementById("play-icon")
  const volumeSlider = document.getElementById("volume-slider")
  
  function createFloatingIcons() {
    const numIcons = 200
  
    for (let i = 0; i < numIcons; i++) {
      const icon = document.createElement("div")
      icon.className = "floating-icon"

      const randomIcon = svgIcons[Math.floor(Math.random() * svgIcons.length)]
      icon.innerHTML = randomIcon
  
      const posX = Math.random() * 100
      const posY = Math.random() * 100
  
      const size = Math.random() * 25 + 15
  
      const duration = Math.random() * 50 + 30
  
      const opacity = Math.random() * 0.3 + 0.1
  
      icon.style.left = `${posX}%`
      icon.style.top = `${posY}%`
      icon.style.width = `${size}px`
      icon.style.height = `${size}px`
      icon.style.color = "white"
      icon.style.opacity = opacity
  
      icon.style.animation = `float ${duration}s linear infinite`
  
      iconsContainer.appendChild(icon)
  
      const keyframes = `
              @keyframes float {
                  0% {
                      transform: translate(0, 0) rotate(0deg);
                  }
                  25% {
                      transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
                  }
                  50% {
                      transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
                  }
                  75% {
                      transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
                  }
                  100% {
                      transform: translate(0, 0) rotate(0deg);
                  }
              }
          `
  
      const style = document.createElement("style")
      style.innerHTML = keyframes
      document.head.appendChild(style)
    }
  }

  function initMusicPlayer() {

    backgroundMusic.volume = volumeSlider.value
  
    console.log("Music player initialized")
  

    backgroundMusic.addEventListener("canplaythrough", function musicReadyHandler() {
      console.log("Music can play through, attempting to play")

      backgroundMusic.removeEventListener("canplaythrough", musicReadyHandler)
  

      const playPromise = backgroundMusic.play()
  
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Music started playing successfully")
            playIcon.outerHTML = pauseSVG
          })
          .catch((error) => {
            console.log("Auto-play prevented:", error)
            playIcon.outerHTML = playSVG
          })
      }
    })

    backgroundMusic.addEventListener("error", (e) => {
      console.error("Audio error:", e)
    })
  

    backgroundMusic.addEventListener("ended", () => {
      console.log("Music ended - this shouldn't happen with loop enabled")

      backgroundMusic.currentTime = 0
      backgroundMusic.play().catch((e) => console.error("Failed to restart music:", e))
    })
  
    backgroundMusic.addEventListener("stalled", () => {
      console.log("Music stalled - attempting to resume")
      backgroundMusic.play().catch((e) => console.error("Failed to resume after stall:", e))
    })
  
    backgroundMusic.addEventListener("suspend", () => {
      console.log("Music suspended")
    })
  
    playPauseBtn.addEventListener("click", () => {
      console.log("Play/pause button clicked")
      if (backgroundMusic.paused) {
        const playPromise = backgroundMusic.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Music resumed successfully")
              document.querySelector("#play-pause-btn svg").outerHTML = pauseSVG
            })
            .catch((error) => {
              console.error("Failed to play:", error)
            })
        }
      } else {
        backgroundMusic.pause()
        console.log("Music paused")
        document.querySelector("#play-pause-btn svg").outerHTML = playSVG
      }
    })
  
    volumeSlider.addEventListener("input", () => {
      backgroundMusic.volume = volumeSlider.value
      console.log("Volume changed to:", volumeSlider.value)
    })
  }
  
  function initLoadingProgress() {
    let count = 0
    const loadingStages = [
      "Connecting to server...",
      "Loading game resources...",
      "Initializing scripts...",
      "Preparing world...",
      "Almost there...",
    ]
  
    if (window.invokeNative) {

      window.addEventListener("message", (e) => {
        if (e.data.eventName === "loadProgress") {
          updateLoadingProgress(e.data.loadFraction, e.data.text)
        }
      })
    } else {

      const interval = setInterval(() => {
        count += 1
        const progress = count / 100
        const stageIndex = Math.floor(progress * loadingStages.length)
        const stage = loadingStages[Math.min(stageIndex, loadingStages.length - 1)]
  
        updateLoadingProgress(progress, stage)
  
        if (count >= 100) {
          clearInterval(interval)
          loadingText.textContent = "Welcome to the server!"
        }
      }, 100)
    }
  }
  
  function updateLoadingProgress(progress, text) {
    const percentage = Math.round(progress * 100)
  
    loadingBar.style.width = `${percentage}%`
    loadingPercentage.textContent = `${percentage}%`
  
    if (text) {
      loadingText.textContent = text
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    createFloatingIcons()
    initMusicPlayer()
    initLoadingProgress()
  })
  