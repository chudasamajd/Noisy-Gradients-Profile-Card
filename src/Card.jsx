import { useState } from "react";
import { GradientCanvas, Gradient } from "shadergradient";

function Card() {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="relative">
      <img
        src="img/me.jpeg"
        alt=""
        className={` rounded-full relative z-50 cursor-pointer transition-all duration-[0.8s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
          showCard
            ? "-top-12 h-[80px] w-[80px] delay-[0.8s]"
            : "top-0 h-[60px] w-[60px] hover:h-[80px] hover:w-[80px]"
        }`}
        onClick={() => {
          setShowCard(true);
        }}
      />
      <div
        className={`card block border border-[rgba(255,255,255,0.15)] bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden transition-all duration-[0.8s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]  ${
          showCard ? "h-[328px] w-[262px] rounded-lg" : "h-0 w-0"
        }`}
      >
        <div className="p-6 relative z-50 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <div
              className={`font-normal text-[#969696] hover:text-white cursor-pointer font-[technor] text-xs delay-[1.6s] transition-[opacity] duration-[0.8s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
                showCard ? "opacity-100" : "opacity-0"
              }`}
            >
              GitHub
            </div>
            <div
              className={`font-normal text-[#969696] hover:text-white cursor-pointer font-[technor] text-xs delay-[1.6s] transition-[opacity] duration-[0.8s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
                showCard ? "opacity-100" : "opacity-0"
              }`}
            >
              YouTube
            </div>
          </div>
          <div className={`flex flex-col justify-end items-center flex-1  `}>
            <h5
              className={`my-2 text-2xl tracking-wide text-gray-900 relative dark:text-white font-[panchang] font-bold text-center transition-all duration-[0.8s] delay-[0.8s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
                showCard ? "opacity-100 top-0" : "opacity-0 -top-6"
              }`}
            >
              Jagdish C.
            </h5>
            <p
              className={`font-normal text-white/50 font-[technor] relative text-sm text-center transition-all duration-[0.8s] delay-[1.4s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
                showCard ? "opacity-100 top-0" : "opacity-0 -top-6"
              }`}
            >
              Full-Stack Developer | YouTuber
            </p>
            <p
              className={`font-normal text-white/50 font-[technor] relative text-sm text-center transition-all duration-[0.8s] delay-[1.4s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
                showCard ? "opacity-100 top-0" : "opacity-0 -top-6"
              }`}
            >
              India
            </p>
          </div>
          <div className="flex justify-between items-center mt-10">
            <div
              className={`font-normal text-[#969696] hover:text-white cursor-pointer font-[technor] text-xs delay-[1.6s] transition-[opacity] duration-[0.8s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
                showCard ? "opacity-100" : "opacity-0"
              }`}
            >
              LinkedIn
            </div>
            <div
              className={`font-normal text-[#969696] hover:text-white cursor-pointer font-[technor] text-xs delay-[1.6s] transition-[opacity] duration-[0.8s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
                showCard ? "opacity-100" : "opacity-0"
              }`}
            >
              Site
            </div>
          </div>
        </div>
        <GradientCanvas
          style={{ position: "absolute", top: 0, zIndex: "1" }}
          className={`transition-[opacity] duration-[0.8s] delay-[1.5s] ${
            showCard ? "opacity-100" : "opacity-0"
          }`}
        >
          <Gradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23000000&color2=%23000000&color3=%23ff0000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=0.9&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=0.6&uFrequency=5.5&uSpeed=0.1&uStrength=3&uTime=0&wireframe=false"
          />
        </GradientCanvas>
        )
      </div>
    </div>
  );
}

export default Card;
