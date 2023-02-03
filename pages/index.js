/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Home({ styles, pokeData }) {
  // console.log(pokeData)
  const [searchResults, setSearchResults] = useState(pokeData);
  const [pokeArr, setPokeArr] = useState(searchResults.slice(0, 10));
  const [pageno, setPageno] = useState(0);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");
  // console.log(pokeArr);
  useEffect(() => {
    setPokeArr(searchResults.slice(pageno * 20, pageno * 20 + 20));
  }, [pageno]);
  useEffect(() => {
    setPokeArr(searchResults.slice(0, 20));
  }, [searchResults]);
  useEffect(() => {
    if (input.length === 0 && filter === "All") {
      setSearchResults(pokeData);
      return;
    }
    if (input.length !== 0 && filter === "All") {
      setSearchResults(
        (c) =>
          (c = pokeData.filter((pokeman) => {
            return pokeman.name.english
              .toLowerCase()
              .includes(input.toLowerCase());
          }))
      );
      return;
    }
    if (input.length === 0 && filter !== "All") {
      setSearchResults(
        (c) =>
          (c = pokeData.filter((pokeman) => {
            return pokeman.type.includes(filter);
          }))
      );
      return;
    }
    if (input.length !== 0 && filter !== "All") {
      setSearchResults(
        (c) =>
          (c = pokeData.filter((pokeman) => {
            return (
              pokeman.type.includes(filter) &&
              pokeman.name.english.toLowerCase().includes(input.toLowerCase())
            );
          }))
      );
      return;
    }
  }, [input, filter]);
  const handlePrev = () => {
    setPageno((c) => {
      return c - 1;
    });
  };
  const handleNext = () => {
    setPageno((c) => {
      return c + 1;
    });
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  console.log(input, filter);
  return (
    <Layout title={"WebPokedex"}>
      <div className=" backgroundtwo font_family">
        <img
          className="background"
          src="https://i.ibb.co/qMbVTNk/Background.png"
          alt=""
        />
        <img
          className="backgroundtwo"
          src="https://i.ibb.co/hVgf32g/Texture.png"
          alt=""
        />
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
        <div className="flex justify-center lg:justify-center  pt-12 pb-10 ">
          <input
            type="text"
            placeholder="Search"
            className="index mx-8 w-[300px] bg-white  px-6 py-2 rounded border border-poke-yellow outline-none"
            onChange={handleInputChange}
            value={input}
          />
        </div>
        <div className=" flex justify-center flex-col items-center index">
          <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-5 lg:gap-x-[92px] lg:gap-y-[30px]">
            {pokeArr.slice(0, 10).map((pokeman, i) => {
              return (
                <div
                  key={pokeman.name.english}
                  className=" h-[350px] w-[235px] clip hovereffect index"
                >
                  <Link href={`/pokemons/${pokeman.id}`}>
                    <a>
                      <div
                        className="bg-white hover:bg-blue-600 hover:text-white transition-all  
                       p-3 rounded-xl hovereffect"
                      >
                        <div className="bg-gray-200 p-3 rounded-lg hover:scale-105 hover:shadow-xl duration-500 ">
                          <img
                            src={pokeman.image.hires}
                            alt=""
                            className=" h-[215px] w-[215px] mx-auto object-contain"
                          />
                        </div>

                        <p className="text-start mt-[16px]">
                          {/* <span className="font-semibold text-xl mr-2">
                            {`${pokeman.id}.`}
                          </span> */}
                          <span className="text-[16px] font-semibold tracking-wider">
                            {pokeman.name.english}
                          </span>
                        </p>
                        <div className="text-start mt-2 ">
                          {pokeman.type.map((type, j) => {
                            return (
                              <span
                                key={type}
                                className="text-white text-xs font-semibold  mr-2 tracking-widest px-[20px] py-[5px] rounded"
                                style={{
                                  backgroundColor: styles[type.toLowerCase()],
                                }}
                              >
                                {type}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="  flex items-center justify-center gap-6  pt-5 pb-24 ">
            <button
              className="bg-blue-500 index hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-700"
              onClick={handlePrev}
              disabled={pageno === 0 ? true : false}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 index text-white font-bold py-2 px-4 rounded disabled:bg-gray-700"
              onClick={handleNext}
              disabled={searchResults.length / 20 - pageno < 1 ? true : false}
            >
              Next
            </button>
          </div>
        </div>
        <div className="">
          <div>
            <div className="ssection ">
              <h1>
                Ash & Pikachu Arrive in <br /> Pokémon Universe
              </h1>
            </div>
            <div className="absolute "></div>
          </div>
          <div className="details_section w-[1600px] h-[1080px] mx-auto mt-[50px]">
            <div className="flex gap-x-10">
              <div className="left_side">
                <div className="flex gap-x-[25px]">
                  <div>
                    {" "}
                    <div className="">
                      {" "}
                      <p className="w-[648px] font">
                        Lorem ipsum dolor sit amet consectetur. Risus cursus
                        nibh elementum ornare a aliquet ac. Feugiat scelerisque
                        ultrices tempor facilisi tempus risus nunc. Proin quis
                        morbi posuere nisl etiam scelerisque. Proin pretium
                        gravida semper ut erat nisi. Pulvinar ac mattis porta
                        amet et. Nisl urna non fames felis leo. Vitae pulvinar
                        sed viverra sit pretium lorem elementum. Iaculis sit
                        maecenas sodales mi convallis justo aliquam. Tincidunt
                        semper ut ornare vivamus lectus.
                      </p>
                    </div>
                    <div className="middle_image flex items-center mt-[16px] font">
                      {" "}
                      <p className="w-[424px]">
                        Lorem ipsum dolor sit amet consectetur. Turpis integer
                        massa consectetur sed enim quis viverra. Vestibulum eu
                        nibh dolor semper. Nisl feugiat quis nec odio pulvinar
                        feugiat velit. Nulla massa sit morbi morbi. Tortor
                        viverra eget lacus feugiat. Tempus vitae vitae orci at
                        ultrices nisi diam faucibus. Ultricies in cursus
                        volutpat aliquam turpis urna in sed. Hendrerit arcu sit
                        lectus adipiscing egestas semper nunc. Ante consectetur
                        id congue pulvinar libero tristique et orci. Platea
                        convallis dictum dui augue. Tincidunt mattis urna sit
                        semper sed duis feugiat mi.
                      </p>
                      <img
                        className="h-[200px] w-[200px]"
                        src="https://i.ibb.co/gVCJWTT/Image04.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="w-[648px] mt-[16px] font">
                        Lorem ipsum dolor sit amet consectetur. Tincidunt at
                        cras tortor non volutpat quisque facilisis. Ultricies
                        consequat sed vitae ac. Nisl eu nam id lectus tellus sit
                        egestas. Orci iaculis et vehicula nisi facilisi neque
                        lorem. In vulputate feugiat lobortis eros viverra.
                        Turpis viverra vel fames enim tortor. Scelerisque
                        dictumst aliquam gravida eget ut accumsan. A est dis
                        platea vitae blandit quis. Ultricies ac at urna vel
                        morbi diam. Donec ut sit sit et. Etiam cum faucibus eu
                        elementum ut fermentum in cursus.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-10">
                    <img src="https://i.ibb.co/HgD35vR/Image03.png" alt="" />
                    <img src="https://i.ibb.co/yyzvSsG/Image02.png" alt="" />
                  </div>
                </div>
                <div>
                  <p className="w-[872px] mt-10 font h-[202px] font">
                    At a enim parturient id. Suspendisse ullamcorper fermentum
                    accumsan diam tellus. Nibh pretium ultrices scelerisque
                    dolor at etiam lectus gravida sed. Sit in turpis suspendisse
                    et aliquam. Vulputate sit phasellus proin eget arcu. Enim
                    nec ante velit erat nibh nunc amet. Tellus at sit imperdiet
                    non. Cras dictum curabitur urna mauris in. Ut dui odio
                    sagittis ut imperdiet ultricies mauris ac. A sit id etiam
                    vitae non posuere tristique. Morbi sit mi sed nam amet
                    tristique tellus. Sed quam aliquam pharetra nunc ipsum
                    mattis. Volutpat pellentesque cras euismod habitant sit
                    nibh. Dictum odio at aliquam sed. Orci odio lacinia id sem
                    sed suspendisse mi fringilla purus. Quis sed ultricies ac
                    nullam odio. Gravida sollicitudin viverra ornare pretium
                    etiam tortor imperdiet tellus. Id purus etiam nunc hendrerit
                    quam in. Dui netus lectus nulla cursus ultrices nulla. Morbi
                    sit in gravida fermentum. Non sed lobortis amet eget sed
                    donec.At a enim parturient id. Suspendisse ullamcorper
                    fermentum accumsan diam tellus. Nibh pretium ultrices
                    donec.At a enim parturient id. Suspendisse ullamcorper
                    fermentum accumsan diam tellus. Nibh pretium ultrices
                    donec.At a enim parturient id. Suspendisse ullamcorper
                    fermentum accumsan diam tellus. Nibh pretium ultrices
                    donec.At a enim parturient id. Suspendisse ullamcorper
                  </p>
                </div>
              </div>
              <div className="right_side font">
                <div>
                  <div>
                    {" "}
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Risus cursus nibh
                      elementum ornare a aliquet ac. Feugiat scelerisque
                      ultrices tempor facilisi tempus risus nunc. Proin quis
                      morbi posuere nisl etiam scelerisque. Proin pretium
                      gravida semper ut erat nisi. Pulvinar ac mattis porta amet
                      et. Nisl urna non fames felis leo. Vitae pulvinar sed
                      viverra .
                    </p>
                  </div>
                  <div className="mt-[22px]">
                    <div className="flex gap-x-[22px] ">
                      <img src="https://i.ibb.co/NLgx9Z5/Image05.png" alt="" />
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Turpis integer
                          massa consectetur sed enim quis viverra. Vestibulum eu
                          nibh dolor semper. Nisl feugiat quis nec odio pulvinar
                          feugiat velit. Nulla massa sit morbi morbi. Tortor
                          viverra eget lacus feugiat. Tempus vitae vitae orci at
                          ultrices nisi diam faucibus. Ultricies in cursus
                          volutpat aliquam turpis urna in sed. Hendrerit arcu
                          sit lectus adipiscing egestas semper nunc. Ante
                          consectetur id congue pulvinar libero tristique et
                          orci. Platea convallis dictum dui augue. Tincidunt
                          mattis urna sit semper sed duis feugiat mi.Ante
                          consectetur id congue{" "}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-x-[22px] mt-[22px]">
                      <img src="https://i.ibb.co/NLgx9Z5/Image05.png" alt="" />
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Turpis integer
                          massa consectetur sed enim quis viverra. Vestibulum eu
                          nibh dolor semper. Nisl feugiat quis nec odio pulvinar
                          feugiat velit. Nulla massa sit morbi morbi. Tortor
                          viverra eget lacus feugiat. Tempus vitae vitae orci at
                          ultrices nisi diam faucibus. Ultricies in cursus
                          volutpat aliquam turpis urna in sed. Hendrerit arcu
                          sit lectus adipiscing egestas semper nunc. Ante
                          consectetur id congue pulvinar libero tristique et
                          orci. Platea convallis dictum dui augue. Tincidunt
                          mattis urna sit semper sed duis feugiat mi.Ante
                          consectetur id congue{" "}
                        </p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="mt-[20px]">
                    <p>
                      At a enim parturient id. Suspendisse ullamcorper fermentum
                      accumsan diam tellus. Nibh pretium ultrices scelerisque
                      dolor at etiam lectus gravida sed. Sit in turpis
                      suspendisse et aliquam. <br /> At a enim parturient id.
                      Suspendisse ullamcorper fermentum accumsan diam tellus.
                      Nibh pretium ultrices scelerisque dolor at etiam lectus
                      gravida sed. Sit in turpis suspendisse et aliquam.
                      Vulputate sit phasellus proin eget arcu. Enim nec ante
                      velit erat nibh nunc amet. Tellus at sit imperdiet non.
                      Cras dictum curabitur urna mauris in. Ut dui odio sagittis
                      ut imperdiet ultricies mauris ac. A sit id etiam vitae non
                      posuere tristique. Morbi sit mi sed nam amet tristique
                      tellus. Sed quam aliquam pharetra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://api.pikaserve.xyz/pokemon/all");
    const data = await res.json();
    return {
      props: {
        pokeData: data,
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
