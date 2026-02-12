import { ValentineConfig } from "./types";

export const CONFIG: ValentineConfig = {
  valentineName: "Brownie",
  pageTitle: "The Ulitamte Love Test 💝",
  floatingEmojis: {
    hearts: ["❤️", "💖", "💝", "💗", "💓"],
    bears: ["🧸", "🐻"],
  },
  questions: {
    first: {
      text: "Tell me, do you love me?",
      yesBtn: "Yes",
      noBtn: "No",
      secretAnswer: "The right answer is Yes! ❤️",
    },
    second: {
      text: "How much do you love me?",
      subText: "drag the slider to set your love value",
      startText: "This much!",
      nextBtn: "Next ❤️",
    },
    third: {
      text: "Will you be my Valentine? 🌹",
      yesBtn: "Yes!",
      noBtn: "No",
    },
  },
  loveMessages: {
    extreme: "WOOOOW You love me that much?? 🥰🚀💝",
    high: "To infinity and beyond! 🚀💝",
    normal: "And beyond! 🥰",
  },
  celebration: {
    title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
    message: "Now come get your gift, a big warm hug and a huge kiss!",
    emojis: "🎁💖🤗💝💋❤️💕",
  },
  colors: {
    backgroundStart: "#7F55B1",
    backgroundEnd: "#F49BAB",
    buttonBackground: "#ff6b6b",
    buttonHover: "#ff8787",
    textColor: "#ff4757",
  },
  animations: {
    floatDuration: "15s",
    floatDistance: "50px",
    bounceSpeed: "0.5s",
    heartExplosionSize: 1.5,
  },
  music: {
    enabled: true,
    autoplay: true,
    musicUrl:
      "https://res.cloudinary.com/dwbgocfhp/video/upload/v1770209894/5c98-5ef8-4716-8677-584afae1e617_skj9ac.mp3",
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.5,
  },
  image: {
    imageUrl:
      "https://res.cloudinary.com/dpwictv0b/image/upload/v1770895277/22636_Oladele-270_1_a0kdjq.jpg",
    imageAltText: "Background image",
  },
};

// https://res.cloudinary.com/dwbgocfhp/video/upload/v1770217090/5c98-5ef8-4716-8677-584afae1e617_mpatvq.mp3
