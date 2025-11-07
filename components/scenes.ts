export type Scene = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  voiceover: string;
  duration: number;
  focus: string;
  background: {
    gradient: string;
    overlay: string;
    foreground?: string;
  };
};

export const scenes: Scene[] = [
  {
    id: "dawn",
    title: "Awakening of the Yamuna",
    subtitle: "A palace kissed by first light",
    description:
      "The river mist lifts and the marble petals of the Taj glow with the promise of a new empire of love.",
    voiceover:
      "यमुना के किनारे, कोहरे से ढका एक सवेरा जाग रहा है। शाहजहाँ का स्वप्न, प्रेम से गढ़ा, संगमरमर में सांस लेता है। यह केवल एक मकबरा नहीं, बल्कि वतन की आत्मा है जो प्रकाश से नहाती है।",
    duration: 20000,
    focus: "Slow aerial glide along the river toward the glowing mausoleum.",
    background: {
      gradient:
        "radial-gradient(circle at 20% 15%, rgba(255, 200, 140, 0.55), transparent 60%), radial-gradient(circle at 80% 25%, rgba(120, 140, 255, 0.35), transparent 65%), #1c102d",
      overlay:
        "linear-gradient(120deg, rgba(249, 210, 150, 0.35) 0%, rgba(48, 25, 66, 0.45) 100%)",
      foreground: "radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.12), transparent 70%)"
    }
  },
  {
    id: "vision",
    title: "Emperor's Oath",
    subtitle: "Love carved in stone",
    description:
      "Shah Jahan’s vow to commemorate Mumtaz Mahal becomes a blueprint of devotion and architectural mastery.",
    voiceover:
      "शाहजहाँ ने प्रतिज्ञा ली कि मुमताज़ महल की स्मृति पत्थर से भी अधिक अमर होगी। हर चाप, हर गुंबद उसी प्रेम की इबारत है जो मग़रिब से मशरिक तक गूँजता है।",
    duration: 20000,
    focus: "Interior palace chamber with calligraphed vows floating in light.",
    background: {
      gradient:
        "radial-gradient(circle at 30% 20%, rgba(255, 180, 120, 0.45), transparent 55%), radial-gradient(circle at 70% 60%, rgba(110, 80, 160, 0.4), transparent 60%), #1a0f19",
      overlay:
        "linear-gradient(145deg, rgba(250, 210, 140, 0.3) 0%, rgba(73, 43, 90, 0.4) 100%)"
    }
  },
  {
    id: "foundation",
    title: "Anchoring Greatness",
    subtitle: "Engineers heed the river",
    description:
      "Architects craft a foundation that floats, safeguarding marble dreams from the river’s embrace.",
    voiceover:
      "शिल्पकारों ने यमुना की धड़कन सुनी और उसकी मिट्टी को बाँस व पत्थर की जालियों से थामा। यह बुनियाद एक जीवित पुल है, जो सदियों से प्रवाह को संभाले है।",
    duration: 20000,
    focus: "Cutaway view revealing the ingenious foundation raft above the riverbank.",
    background: {
      gradient:
        "radial-gradient(circle at 50% 20%, rgba(240, 200, 150, 0.35), transparent 60%), radial-gradient(circle at 30% 80%, rgba(100, 130, 170, 0.45), transparent 70%), #0c1723",
      overlay:
        "linear-gradient(180deg, rgba(255, 222, 173, 0.25) 0%, rgba(20, 30, 50, 0.85) 70%)"
    }
  },
  {
    id: "craftsmanship",
    title: "Hands of the Empire",
    subtitle: "Artisans weave the impossible",
    description:
      "A chorus of artisans sculpt latticed marble, inlay gemstones, and stitch ornate pietra dura narratives.",
    voiceover:
      "बीहड़ से आए कारीगरों ने संगमरमर को जाली में बदला, फिर उसकी नसों में जड़ाऊ पत्थरों की धड़कन भरी। हर टुकड़ा एक राग है, हर पैटर्न एक दुआ।",
    duration: 20000,
    focus: "Close-ups of chisels and semi-precious stones creating floral motifs.",
    background: {
      gradient:
        "radial-gradient(circle at 40% 40%, rgba(250, 220, 175, 0.6), transparent 60%), radial-gradient(circle at 20% 80%, rgba(166, 98, 66, 0.45), transparent 65%), #2a1410",
      overlay:
        "linear-gradient(160deg, rgba(255, 215, 180, 0.4) 0%, rgba(90, 45, 30, 0.6) 100%)"
    }
  },
  {
    id: "calligraphy",
    title: "Words as Light",
    subtitle: "Verses embrace the marble",
    description:
      "Delicate calligraphy in black marble flows upward, widening subtly to equalize perspective.",
    voiceover:
      "अमनत ख़ान की कलम ने कुरआन की आयतों को संगमरमर पर उतारा। अक्षर ऊपर जाते-जाते फैलते हैं, ताकि हर प्रार्थना दूर से भी उतनी ही स्पष्ट सुनाई दे।",
    duration: 20000,
    focus: "Zoom along portals with tapering calligraphic borders.",
    background: {
      gradient:
        "radial-gradient(circle at 20% 50%, rgba(255, 215, 170, 0.45), transparent 58%), radial-gradient(circle at 75% 30%, rgba(50, 60, 90, 0.5), transparent 60%), #120c18",
      overlay:
        "linear-gradient(140deg, rgba(230, 216, 191, 0.4) 0%, rgba(24, 18, 42, 0.7) 100%)"
    }
  },
  {
    id: "symmetry",
    title: "Mirrored Perfection",
    subtitle: "Balance of every arch",
    description:
      "Four minarets lean outward, gardens align in charbagh symmetry, reflecting infinity.",
    voiceover:
      "चार मीनारें बाहर की ओर हल्का झुकाव लिए संतुलन की रखवाली करती हैं। चारबाग़ उद्यान में पानी की धाराएँ, स्वर्ग का ज्यामितीय ख़ाका रचती हैं।",
    duration: 20000,
    focus: "Top-down view of the charbagh layout transitioning into mirrored reflections.",
    background: {
      gradient:
        "radial-gradient(circle at 50% 30%, rgba(255, 215, 150, 0.32), transparent 60%), radial-gradient(circle at 10% 80%, rgba(64, 114, 81, 0.45), transparent 70%), #0a1a13",
      overlay:
        "linear-gradient(170deg, rgba(170, 230, 200, 0.25) 0%, rgba(18, 34, 28, 0.85) 70%)"
    }
  },
  {
    id: "materials",
    title: "Stone from the Cosmos",
    subtitle: "Gemstones map the world",
    description:
      "Coral from Arabia, jade from China, turquoise from Tibet—earth’s palette gathered for one monument.",
    voiceover:
      "अरब से कोरल, चीन से जेड, तिब्बत से फ़िरोज़ा—दुनिया के रंग आगरा आए। हर रत्न ने ताजमहल को नई चमक और नई कहानी दी।",
    duration: 20000,
    focus: "Constellation of gemstones floating into floral inlays.",
    background: {
      gradient:
        "radial-gradient(circle at 45% 35%, rgba(255, 205, 130, 0.4), transparent 58%), radial-gradient(circle at 65% 75%, rgba(50, 100, 150, 0.55), transparent 65%), #081428",
      overlay:
        "linear-gradient(200deg, rgba(233, 205, 164, 0.35) 0%, rgba(27, 43, 68, 0.75) 80%)"
    }
  },
  {
    id: "qi",
    title: "Sonic Blueprint",
    subtitle: "Echoes of the dome",
    description:
      "Voices rise and whirl beneath the main dome, converging into a single, haunting echo.",
    voiceover:
      "गुंबद के भीतर कहा गया हर शब्द सात बार लौटता है, मानो समय स्वयं उत्तर दे रहा हो। यह प्रतिध्वनि याद दिलाती है कि प्रेम की गूँज कभी समाप्त नहीं होती।",
    duration: 20000,
    focus: "Sound waves visualized as concentric golden ripples under the dome.",
    background: {
      gradient:
        "radial-gradient(circle at 50% 45%, rgba(255, 225, 190, 0.35), transparent 55%), radial-gradient(circle at 30% 70%, rgba(140, 90, 120, 0.5), transparent 65%), #1b0e1a",
      overlay:
        "linear-gradient(150deg, rgba(245, 220, 200, 0.35) 0%, rgba(50, 24, 48, 0.8) 75%)"
    }
  },
  {
    id: "garden",
    title: "Garden of Eternity",
    subtitle: "Paradise mirrored on earth",
    description:
      "Under moonlight, fountains shimmer and pathways align with cosmic geometry.",
    voiceover:
      "रात की चाँदनी में चारबाग़ का पानी सितारों को धरती पर उतरने देता है। यह बाग़ सिर्फ़ प्रकृति नहीं, एक दिव्य नक़्शा है जो आत्मा को दिशा देता है।",
    duration: 20000,
    focus: "Lunar glow over marble pathways and water channels.",
    background: {
      gradient:
        "radial-gradient(circle at 60% 20%, rgba(210, 235, 255, 0.3), transparent 60%), radial-gradient(circle at 30% 80%, rgba(100, 160, 140, 0.4), transparent 70%), #041320",
      overlay:
        "linear-gradient(180deg, rgba(80, 120, 110, 0.35) 0%, rgba(8, 20, 32, 0.85) 80%)"
    }
  },
  {
    id: "lore",
    title: "Stories in Stone",
    subtitle: "Legends carried by breeze",
    description:
      "Travelers whisper myths of black marble twins and craftsmen blinded by beauty.",
    voiceover:
      "यात्रियों ने काली संगमरमर से बनने वाले जुड़वा ताज की कथाएँ सुनाईं। कुछ कहते हैं कारीगरों की नज़रें बंद कर दी गईं, ताकि कोई और सौंदर्य न जन्म ले।",
    duration: 20000,
    focus: "Silhouettes of storytellers around campfires fading into the monument.",
    background: {
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(255, 205, 160, 0.4), transparent 55%), radial-gradient(circle at 70% 70%, rgba(80, 50, 20, 0.5), transparent 65%), #110803",
      overlay:
        "linear-gradient(200deg, rgba(200, 120, 60, 0.4) 0%, rgba(20, 10, 5, 0.75) 85%)"
    }
  },
  {
    id: "resilience",
    title: "Witness to History",
    subtitle: "Empires rise and fall",
    description:
      "The Taj endures invasions, restorations, and independence with dignified grace.",
    voiceover:
      "गुलामी के दौर में जब आसमान धुएँ से भर गया, ताजमहल फिर भी उज्ज्वल रहा। आज़ादी की सुबह में उसने नई रोशनी से नए भारत का स्वागत किया।",
    duration: 20000,
    focus: "Time-lapse of historical eras washing over the monument.",
    background: {
      gradient:
        "radial-gradient(circle at 40% 25%, rgba(255, 210, 160, 0.4), transparent 60%), radial-gradient(circle at 65% 65%, rgba(90, 110, 130, 0.5), transparent 65%), #1c2229",
      overlay:
        "linear-gradient(140deg, rgba(234, 204, 180, 0.35) 0%, rgba(36, 44, 58, 0.82) 75%)"
    }
  },
  {
    id: "today",
    title: "Children of the Future",
    subtitle: "Guardians of heritage",
    description:
      "Young minds trace its carvings and pledge to carry the story forward in harmony.",
    voiceover:
      "आज के विद्यार्थी जब उसकी नक्काशियों को छूते हैं, वे वादा करते हैं कि यह धरोहर सदैव सुरक्षित रहेगी। ताजमहल अब उनका है, राष्ट्र की आत्मा का प्रतिबिंब।",
    duration: 20000,
    focus: "Students exploring the site with augmented overlays of knowledge.",
    background: {
      gradient:
        "radial-gradient(circle at 25% 30%, rgba(255, 220, 180, 0.45), transparent 60%), radial-gradient(circle at 70% 60%, rgba(90, 150, 210, 0.4), transparent 65%), #142139",
      overlay:
        "linear-gradient(150deg, rgba(214, 225, 240, 0.3) 0%, rgba(20, 33, 57, 0.85) 80%)"
    }
  },
  {
    id: "legacy",
    title: "The Constitution of the Taj",
    subtitle: "A promise etched in eternity",
    description:
      "Each stone upholds a constitution of empathy, unity, and artistic courage meant to be inherited.",
    voiceover:
      "ताजमहल का संविधान प्रेम, करुणा और एकता का दस्तावेज़ है। इसकी दीवारें हमें सिखाती हैं कि सौंदर्य तभी अजर होता है जब हम उसे साझा करते हैं।",
    duration: 20000,
    focus: "Final wide shot basked in golden sunrise as petals of light rise to the sky.",
    background: {
      gradient:
        "radial-gradient(circle at 50% 20%, rgba(255, 240, 200, 0.5), transparent 60%), radial-gradient(circle at 60% 80%, rgba(255, 180, 120, 0.55), transparent 70%), #2b1306",
      overlay:
        "linear-gradient(180deg, rgba(255, 240, 210, 0.5) 0%, rgba(43, 19, 6, 0.85) 75%)",
      foreground:
        "radial-gradient(circle at 50% 100%, rgba(255, 200, 150, 0.4), transparent 80%)"
    }
  }
];
