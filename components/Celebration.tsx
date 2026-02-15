import { config } from "@/lib/config";

export default function Celebration() {
  return (
    <div className="text-center px-2">
      <div className="animate-slide-in-up-delayed">
        <h2
          className="font-dancing text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4"
          style={{ color: config.colors.textColor }}
        >
          {config.celebration.title}
        </h2>
        <p className="text-base sm:text-lg lg:text-[1.3rem] my-3 sm:my-4 text-[#333]">
          {config.celebration.message}
        </p>
        <div className="text-3xl sm:text-4xl lg:text-5xl animate-bounce-slow">
          {config.celebration.emojis}
        </div>
      </div>
    </div>
  );
}
