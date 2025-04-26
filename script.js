document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const content = document.querySelector(".content");
  const video = document.getElementById("bg-video");
  const overlay = document.getElementById("video-overlay");

  // Let's Gooooo button
  window.closePopup = function () {
    // Fade out video and overlay
    video.style.transition = "opacity 1s ease";
    overlay.style.transition = "opacity 1s ease";

    video.style.opacity = "0";
    overlay.style.opacity = "0";

    // After fade-out, hide them completely
    setTimeout(() => {
      video.pause();
      video.style.display = "none";
      overlay.style.display = "none";
    }, 1000); // match with transition duration

    // Hide popup and show content
    popup.style.display = "none";
    content.style.display = "block";

    // Start sparkle or anything you want after this
    startSparkles(); // if you added sparkle effect
  };

  // Letter button
  window.showLetter = function () {
    const letterSection = document.getElementById("letter");
    letterSection.classList.remove("hidden");

    // Optional: Typewriter effect
    const text = ` \n\nYou already know how much you mean to me, but here's a lil reminder...\n\n
  \n Lets start with "i love you"-i don't say it much, but true.
\ni talk nonsense, act like clown. But you never once let me down
\nNo friendship test we need, we just are. Two souls aligned under the same star. 💜
\n I know it's cringe and this poem is stupid,
but it's you birthday and I'm broke so i have to do this!
\n \n HAPPIE BIRTHDAY ONCE AGAIN ILYSMMM!!!`;
    let i = 0;
    const typewriter = document.getElementById("typewriter-text");
    typewriter.innerHTML = "";

    const interval = setInterval(() => {
      typewriter.innerHTML += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 50);
  };
});


