import logo1 from "./assets/img/logo1.png";
import logo3 from "./assets/img/logo3.jpeg";
import jepeLogo from "./assets/img/jepe.png";
import jepeLogo2 from "./assets/img/jepe-2.png";


import iconTg from "./assets/img/iconTg.png";
import iconX from "./assets/img/iconX.png";
import iconDex from "./assets/img/iconDex.png";

import "./App.css";

function App() {
  return (
    <div className="bg-[#dffffb] w-full h-full">
      <div className="w-full py-[10px]">
        <nav className="container relative flex flex-wrap items-center justify-between px-8 py-4 mx-auto lg:justify-between xl:px-1">
          <a href="/#">
            <div className="border-[10px] border-cyan-300  rounded-full overflow-hidden">
              <img src={logo1} className="w-24 h-24 rounded-full" />
            </div>
          </a>
          <div>
            <span
              href="/"
              className="w-full px-4 py-2 -ml-4 text-gray-500 text-4xl"
            >
              jepe on sui
            </span>
          </div>
        </nav>
      </div>

      <div className="w-full h-[300px] flex justify-center items-center">
        <h1 className="text-[#1572a9] text-6xl md:text-8xl animation-text">$JEPE</h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="md:w-[500px] md:h-[550px] w-[300px] h-[350px]  border-[9px] rounded-[16px] border-cyan-300 overflow-hidden">
          <img src={logo3} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="w-full pt-[40px] pb-[20px] md:pt-[80px] md:pb-[20px] px-5 text-center flex justify-center items-center">
        <h5 className="text-[#1572a9] font-bold text-3xl md:text-5xl p-2 md:p-5 bg-[#4af5ff] shadow-xl rounded-[16px]">
          the most memeable jellyfish on the internet
        </h5>
      </div>

      <div className="w-full py-[20px] flex justify-center items-center">
        <p
          className="text-[#1572a9] text-2xl md:text-3xl md:text-3xl p-5 text-wrap"
          style={{ wordBreak: "break-all" }}
        >
          CA: Coming soon
        </p>
      </div>

      <div className="w-full py-[20px] flex justify-center items-center">
        <p
          className="text-[#1572a9] text-2xl md:text-3xl p-5 text-center text-wrap"
          style={{ wordBreak: "break-all" }}
        >
          Coming on the 12th of October, Launch on{" "}
          <a href="http://hop.fun" className="hover:underline" target="_blank">
            http://hop.fun
          </a>
        </p>
      </div>

      <div className="w-full py-[20px] flex justify-center items-center">
        <a
          href="https://hop.ag/swap/SUI-USDC"
          target="_blank"
          class="focus:animate-none hover:scale-110 ease-in transition hover:animate-none inline-flex bg-[#1572a9] mt-3 px-12 py-8 rounded-full tracking-wide text-white border-[4px] border-[#fff] shadow-xl"
        >
          <span class="text-3xl font-medium">BUY HERE</span>
        </a>
      </div>

      <div className="w-full py-[20px] gap-8 flex justify-center items-center">
        <a
          href="https://x.com/jepeonsui"
          target="_blank"
          class="focus:animate-none hover:scale-110 ease-in transition rounded-full"
        >
          <img src={iconX} className="w-24 h-24 rounded-full" />
        </a>

        <a
          href="https://t.me/jepeonsui"
          target="_blank"
          class="focus:animate-none hover:scale-110 ease-in transition rounded-full"
        >
          <img src={iconTg} className="w-24 h-24 rounded-full" />
        </a>

        <a
          href="https://dexscreener.com/sui/0x5eb2dfcdd1b15d2021328258f6d5ec081e9a0cdcfa9e13a0eaeb9b5f7505ca78"
          target="_blank"
          class="focus:animate-none hover:scale-110 ease-in transition rounded-full"
        >
          <img src={iconDex} className="w-24 h-24 rounded-full" />
        </a>
      </div>

      <div className="w-full py-[20px] flex flex-col justify-center items-center">
        <span class="text-4xl md:text-5xl py-[50px] pt-[90px] text-[#1572a9] font-medium">
          jepe memes
        </span>

        <div className="grid grid-cols-2 md:grid-cols-3 py-[20px]">
          <div className="">
            <img src={jepeLogo} className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] hue-rotate-90 rotate-3" />
          </div>

          <div className="">
            <img src={jepeLogo2} className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] hue-rotate-60 rotate-12" />
          </div>

          <div className="">
            <img src={jepeLogo} className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] hue-rotate-180 rotate-45" />
          </div>
          <div className="">
            <img src={jepeLogo2} className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] -hue-rotate-180 rotate-45" />
          </div>
          <div className="">
            <img src={jepeLogo} className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] -hue-rotate-90 rotate-6" />
          </div>
          <div className="">
            <img src={jepeLogo2} className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] -hue-rotate-60 rotate-12" />
          </div>
        </div>
      </div>

      {/* <div className="w-full py-[20px] flex justify-center items-center">
        <div class="focus:animate-none hover:scale-150 ease-in transition hover:animate-none inline-flex bg-[#1572a9] mt-3 px-12 py-8 rounded-full tracking-wide text-white border-[4px] border-[#fff] shadow-xl cursor-pointer">
          <span class="text-3xl font-medium">Pump</span>
        </div>
      </div> */}

      <div className="w-full pt-[80px] pb-[20px] text-center flex justify-center items-center flex-wrap">
        <h5 className="text-[#1572a9] font-bold text-5xl md:text-8xl p-5">Tokenomics</h5>
      </div>

      <div className="w-full py-[40px] gap-24 px-5 flex flex-wrap justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="border-[10px] w-48 h-48 border-cyan-300 rounded-full overflow-hidden">
            <img src={logo1} className="w-full h-full" />
          </div>

          <p className="text-[#1572a9] font-bold text-3xl md:text-5xl pt-5">Total Supply</p>

          <p className="text-[#000] font-bold text-4xl pt-5">1,000,000,000</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="border-[10px] w-48 h-48 border-cyan-300 rounded-full overflow-hidden">
            <img src={logo1} className="w-full h-full" />
          </div>

          <p className="text-[#1572a9] font-bold text-3xl md:text-4xl pt-5">LP Burned</p>

          <p className="text-[#000] font-bold text-3xl md:text-4xl pt-5">10%</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="border-[10px] w-48 h-48 border-cyan-300 rounded-full overflow-hidden">
            <img src={logo1} className="w-full h-full" />
          </div>

          <p className="text-[#1572a9] font-bold text-3xl md:text-4xl pt-5">Tax</p>

          <p className="text-[#000] font-bold text-3xl md:text-4xl pt-5">0%</p>
        </div>
      </div>

      <div className="w-full pt-[150px] pb-[50px] flex justify-center items-center">
        <span className="text-[#000] text-xl">
          ©2024 $JEPE, All Right Reserved.
        </span>
      </div>
    </div>
  );
}

export default App;
