import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";

const Details = ({ pokeman, styles }) => {
  console.log(pokeman);
  return (
    <Layout title={pokeman.name.english}>
      <div className="bg-white  border-2">
        <div className="flex justify-center pt-10 ">
          <Link href="/">
            <a className="index">
              <img
                className=""
                src="https://i.ibb.co/mHdPk2N/Logo.png"
                alt=""
                height={96}
                width={264}
              />
            </a>
          </Link>
        </div>
        <div>
          <div className="min-h-screen pt-20 flex flex-wrap gap-x-20 sm:flex-nowrap justify-center mx-auto">
            <div>
              <p className="text-4xl text-[#257BC4] font-semibold">
                <span>{pokeman.name.english}</span>
                <span className="ml-2 ">#{pokeman.id}</span>
              </p>

              {/* <p>
              <span>Species:&nbsp;</span>
              <span>{pokeman.species}</span>
            </p> */}
              <p className="w-[424px] font-normal mt-[32px] mb-[64px]">
                {pokeman.description}
              </p>
              <div className=" clip bg-gray-100 w-[365px] flex justify-center py-10  gap-x-20 ">
                <div>
                  <p>
                    <span className="font-semibold ">Height&nbsp;</span>
                    <br />
                    <span className="font-normal mt-[16px]">
                      {pokeman.profile.height}
                    </span>
                  </p>
                  <p className="pt-10">
                    <span className="font-semibold ">Weight:&nbsp;</span> <br />
                    <span className="font-normal mt-[16px]">
                      {pokeman.profile.weight}
                    </span>
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold ">Height&nbsp;</span>
                    <br />
                    <span className="font-normal mt-[16px]">
                      {pokeman.profile.height}
                    </span>
                  </p>
                  <p className="pt-10">
                    <span className="font-semibold ">Weight:&nbsp;</span> <br />
                    <span className="font-normal mt-[16px]">
                      {pokeman.profile.weight}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <img src={pokeman.image.hires} alt="" />
            </div>
            <div className="">
              <p className="font-semibold text-[20px] tracking-wider">Type:</p>
              <p className="mt-[10px] font_family">
                {pokeman.type.map((type, j) => {
                  return (
                    <span
                      key={type}
                      className="text-white text-lg font-normal  px-3 py-1 rounded-sm"
                      style={{ backgroundColor: styles[type.toLowerCase()] }}
                    >
                      {type}
                    </span>
                  );
                })}
              </p>
              <p className="font-semibold text-[20px] tracking-wider mt-3 mb-3">
                Stats
              </p>
              <div>
                {Object.keys(pokeman.base).map((stat, i) => {
                  let statPercentFactor = 0;
                  let statColor;
                  switch (stat) {
                    case "HP":
                      statPercentFactor = 2.55;
                      statColor = "#da4343";
                      break;
                    case "Attack":
                      statPercentFactor = 1.81;
                      statColor = "#f38d45";
                      break;
                    case "Defense":
                      statPercentFactor = 2.3;
                      statColor = "#f3d14a";
                      break;
                    case "Sp. Attack":
                      statPercentFactor = 1.73;
                      statColor = "#547fe4";
                      break;
                    case "Sp. Defense":
                      statPercentFactor = 2.3;
                      statColor = "#84df57";
                      break;
                    case "Speed":
                      statPercentFactor = 2.0;
                      statColor = "#f75887";
                      break;
                  }
                  return (
                    <div className="mt-4" key={stat}>
                      <div className="flex gap-y-4">
                        <span className="font-semibold">
                          {stat.toUpperCase()}
                        </span>
                        {/* <span>{pokeman.base[stat]}</span> */}
                      </div>
                      <div className="h-1 mt-2 w-[343px] bg-gray-900 rounded-full">
                        <div
                          className="h-1 rounded-full"
                          style={{
                            backgroundColor: statColor,
                            width:
                              parseInt(pokeman.base[stat]) * statPercentFactor,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center  bg-white">
            <Link href="/">
              <a className="">
                <button className="w-[270px] h-[56px] bg-[#FFCB05] mb-20 text-white font-semibold text-[20px] border-[6px] border-[#2B73B9]">
                  Back To Homepage
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  try {
    const res = await fetch(`https://api.pikaserve.xyz/pokemon/${query.id}`);
    const data = await res.json();
    return {
      props: {
        pokeman: data,
        styles: {
          normal: "#A8A77A",
          fire: "#EE8130",
          water: "#6390F0",
          electric: "#F7D02C",
          grass: "#7AC74C",
          ice: "#96D9D6",
          fighting: "#C22E28",
          poison: "#A33EA1",
          ground: "#E2BF65",
          flying: "#A98FF3",
          psychic: "#F95587",
          bug: "#A6B91A",
          rock: "#B6A136",
          ghost: "#735797",
          dragon: "#6F35FC",
          dark: "#705746",
          steel: "#B7B7CE",
          fairy: "#D685AD",
        },
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Details;
