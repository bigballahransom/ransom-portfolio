'use client'
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { IoBalloonOutline } from "react-icons/io5";
import Link from "next/link";

const tracks = [
  {
    title: "Instrumental",
    waveType: "instrumentals.mp3",
  },
  {
    title: "Kanye",
    waveType: "vocals.mp3",
  },
  {
    title: "Helium Kanye",
    waveType: "helium.mp3",
  },
  {
    title: "Bass",
    waveType: "bass.mp3",
  },
];

const MAX = 20;
const SLIDER_MAX = 10; // Adjusted maximum value for volume slider

const Page = () => {
  const [play, setPlay] = useState(false);
  const [volumes, setVolumes] = useState({
    Instrumental: 1,
    Kanye: 1,
    "Helium Kanye": 1,
    Bass: 1,
  });

  const refs = {
    Instrumental: useRef(null),
    Kanye: useRef(null),
    "Helium Kanye": useRef(null),
    Bass: useRef(null),
  };

  useEffect(() => {
    Object.keys(refs).forEach((key) => {
      const audio = refs[key].current;
      if (audio) {
        audio.volume = volumes[key];
        if (play) {
          audio.play();
        } else {
          audio.pause();
        }
      }
    });
  }, [play, volumes]);

  const toggleAudio = () => {
    setPlay(!play);
  };

  const handleVolume = (e, track) => {
    const { value } = e.target;
    const newVolumes = { ...volumes, [track]: Number(value) / SLIDER_MAX };
    setVolumes(newVolumes);
  };

  return (
    <div className="bg-white">
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className='fixed top-0 p-4 bg-white w-full flex justify-between'>
      <div className='flex items-center gap-2'>
      <IoBalloonOutline />
        Helium Kanye
        </div>
        <div>
            <Link href='/'>
                <button className='button border shadow-xl text-sm'>Back to Andrew's Portfolio</button>
            </Link>
        </div>
      </div>
        <div className="bg-accent flex h-fit flex-col rounded-full text-center shadow-lg">
          <Image src='/assets/images/kanye.jpeg' width={100} height={100} className='text-white rounded-full p-1 shadow'/>
        </div>
        <div className="bg-white flex h-fit max-w-fit flex-col rounded-lg pb-4 text-center shadow-lg mt-4">
        {tracks.map((track) => (
          <div
            key={track.title}
          >
            <div className="relative flex flex-col space-y-0">
              <dl className="mt-1 flex flex-col p-4 ">
                <dd className="text-lg text-black">{track.title}</dd>
              </dl>
              <div className="mx-4 flex">
                <input
                  type="range"
                  className="mr-2 w-full"
                  min={0}
                  max={SLIDER_MAX}
                  value={volumes[track.title] * SLIDER_MAX}
                  onChange={(e) => handleVolume(e, track.title)}
                />
              </div>
            </div>
            <audio ref={refs[track.title]} loop src={`/${track.waveType}`} />
          </div>
        ))}
        </div>
        <div className="relative flex flex-col space-y-0 mt-4">
            <button
              onClick={toggleAudio}
              type="button"
              className="button"
            >
              {!play ? <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>

              </p> : <p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>

              </p>}
            </button>
          </div>
      </main>
    </div>
  );
};

export default Page;

