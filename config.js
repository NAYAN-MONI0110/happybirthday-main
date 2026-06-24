/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "celebration"   → Lights, banner, letter balloons, cake, and story scene
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Irene",
  photo: "./img/irene.jpg",       // Place your photo in the img/ folder
  music: "./music/hbd.mp3",       // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#ff7a90",           // Main accent color (soft coral)
    accent: "#38c6c0",            // Secondary accent color (fresh teal)
    dark: {
      background: "#141111",      // Warm charcoal
      text: "#fff8ef",            // Warm ivory
    },
    light: {
      background: "#fff8ef",      // Warm ivory
      text: "#241f21",            // Soft ink
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "For",
      subtitle: "A small birthday surprise.",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "It's your birthday.",
    },
    {
      type: "chatbox",
      message:
        "Happy birthday, Irene. I hope your day is full of smiles and good moments.",
      buttonText: "Send wish",
    },
    {
      type: "ideas",
      lines: [
        "I wanted to send a birthday wish.",
        "Then I thought,",
        "Why not make it a little <strong>special</strong>?",
        "So I made this.",
        "Just for you <span>:)</span>",
      ],
      bigLetters: "JOY",
    },
    {
      type: "celebration",
      letters: "HBD Irene",
      storyLines: [
        "I hope you enjoy your day",
        "Here is a little celebration",
        "Made just for you",
        "Wishing you lots of happiness",
        "And a great year ahead",
        "Happy birthday, Irene.",
      ],
    },
    {
      type: "quote",
      text: "Wishing you happiness, good health, and lots of smiles.",
      author: "",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "Have an amazing birthday and a wonderful year ahead.",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "I hope you liked it.",
      replayText: "Watch again.",
    },
  ],
};
