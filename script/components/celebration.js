(function () {
  window.Components = window.Components || {};

  const BALLOON_IMAGES = ["b1.png", "b2.png", "b3.png", "b4.png", "b5.png", "b6.png", "b7.png"];
  const BULBS = ["yellow", "red", "blue", "green", "pink", "orange"];
  const BALLOON_COLORS = ["#f2b300", "#0719d4", "#d14d39", "#8fad00", "#8377e4", "#99c96a", "#20cfb4"];

  function birthdayLetters(section, config) {
    const letters = section.letters || `HBD ${config.name || ""}`;
    return letters.toUpperCase().replace(/\s+/g, "").split("");
  }

  window.Components.celebration = {
    render(container, section, config) {
      const div = document.createElement("div");
      div.className = "section section-celebration";

      const letters = birthdayLetters(section, config);
      const storyLines = section.storyLines || [
        "Today is as beautiful as other days",
        "but this one belongs to you",
        "so let's make it the best celebration ever",
        `Happy birthday, ${config.name}!`,
      ];

      div.innerHTML = `
        <div class="celebration-glow"></div>
        <div class="celebration-bulbs">
          ${BULBS.map((color) => `<span class="celebration-bulb celebration-bulb-${color}"></span>`).join("")}
        </div>
        <img class="celebration-banner" src="./img/celebration/banner.png" alt="Happy birthday banner" />
        <img class="celebration-border" src="./img/celebration/Balloon-Border.png" alt="" />
        <div class="celebration-balloons">
          ${letters.map((letter, index) => `
            <div class="celebration-letter-balloon balloon-sway-${index % 2 === 0 ? "one" : "two"}"
              style="background-image:url('./img/celebration/${BALLOON_IMAGES[index % BALLOON_IMAGES.length]}')">
              <span style="color:${BALLOON_COLORS[index % BALLOON_COLORS.length]}">${letter}</span>
            </div>
          `).join("")}
        </div>
        <div class="celebration-cake" aria-label="Birthday cake">
          <div class="celebration-candle">
            <span class="celebration-flame"></span>
            <span class="celebration-flame"></span>
            <span class="celebration-flame"></span>
            <span class="celebration-flame"></span>
            <span class="celebration-flame"></span>
          </div>
          <div class="celebration-frosting"></div>
          <div class="celebration-sponge"></div>
        </div>
        <div class="celebration-story">
          ${storyLines.map((line) => `<p>${line}</p>`).join("")}
        </div>
      `;

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const bulbs = el.querySelectorAll(".celebration-bulb");
      const banner = el.querySelector(".celebration-banner");
      const border = el.querySelector(".celebration-border");
      const balloons = el.querySelectorAll(".celebration-letter-balloon");
      const cake = el.querySelector(".celebration-cake");
      const flames = el.querySelectorAll(".celebration-flame");
      const story = el.querySelector(".celebration-story");
      const lines = el.querySelectorAll(".celebration-story p");

      tl.set(el, { opacity: 1 })
        .fromTo(el.querySelector(".celebration-glow"),
          { opacity: 0 },
          { opacity: 1, duration: 1.2 }
        )
        .fromTo(bulbs,
          { opacity: 0, y: -40, scale: 0.5 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.14, ease: "back.out(1.8)" },
          "-=0.4"
        )
        .to(bulbs, {
          filter: "drop-shadow(0 0 18px rgba(255, 231, 156, 0.9))",
          duration: 0.55,
          yoyo: true,
          repeat: 3,
          stagger: 0.08,
        })
        .fromTo(banner,
          { y: "-95vh", rotation: -5, opacity: 0 },
          { y: 0, rotation: 0, opacity: 1, duration: 1.25, ease: "power3.out" },
          "-=1"
        )
        .fromTo(border,
          { y: "115vh", opacity: 0 },
          { y: "-130vh", opacity: 0.26, duration: 7, ease: "none" },
          "-=0.8"
        )
        .fromTo(balloons,
          {
            opacity: 0,
            y: "85vh",
            x: () => gsap.utils.random(-window.innerWidth * 0.24, window.innerWidth * 0.24),
            rotation: () => gsap.utils.random(-14, 14),
          },
          {
            opacity: 0.9,
            y: () => gsap.utils.random(-60, 60),
            x: () => gsap.utils.random(-window.innerWidth * 0.32, window.innerWidth * 0.32),
            duration: 2.2,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=6.2"
        )
        .to(balloons, {
          x: (index) => {
            const gap = Math.min(92, Math.max(46, window.innerWidth / Math.max(balloons.length + 1, 7)));
            return (index - (balloons.length - 1) / 2) * gap;
          },
          y: -window.innerHeight * 0.22,
          rotation: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power3.inOut",
        })
        .to(balloons, { "--letter-opacity": 1, duration: 0.4, stagger: 0.05 })
        .fromTo(cake,
          { opacity: 0, scale: 0.55, y: 70 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "back.out(1.5)" },
          "-=0.2"
        )
        .fromTo(flames,
          { opacity: 0, scale: 0, y: 8 },
          { opacity: 1, scale: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "back.out(2)" },
          "+=0.3"
        )
        .to(cake, { scale: 1.04, duration: 0.25, yoyo: true, repeat: 1 })
        .to(story, { opacity: 1, duration: 0.2 }, "+=0.5");

      lines.forEach((line) => {
        tl.fromTo(line,
          { opacity: 0, y: 18, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5 }
        )
        .to(line, { opacity: 0, y: -16, duration: 0.45 }, "+=1.15");
      });

      tl.to(el, { opacity: 0, duration: 0.8 }, "+=0.2");
    },
  };
})();
