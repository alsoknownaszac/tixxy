/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chillaxBold: ["Chillax-Bold"],
        chillaxSemibold: ["Chillax-Semibold"],
        chillaxLight: ["Chillax-Light"],
        chillaxExtralight: ["Chillax-Extralight"],
        chillaxMedium: ["Chillax-Medium"],
        chillaxRegular: ["Chillax-Regular"],
        satoshiBlack: ["Satoshi-Black"],
        satoshiBlackItalic: ["Satoshi-BlackItalic"],
        satoshiBold: ["Satoshi-Bold"],
        satoshiBoldItalic: ["Satoshi-BoldItalic"],
        satoshiItalic: ["Satoshi-Italic"],
        satoshiLight: ["Satoshi-Light"],
        satoshiLightItalic: ["Satoshi-LightItalic"],
        satoshiMedium: ["Satoshi-Medium"],
        satoshiMediumItalic: ["Satoshi-MediumItalic"],
        satoshiRegular: ["Satoshi-Regular"],
        trapBlack: ["Trap-Black"],
        trapExtrabold: ["Trap-Extrabold"],
        trapSemibold: ["Trap-Semibold"],
        trapBold: ["Trap-Bold"],
        trapLight: ["Trap-Light"],
        trapMedium: ["Trap-Medium"],
        trapRegular: ["Trap-Regular"],
      },
    },
  },
  plugins: [],
};
