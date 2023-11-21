import { useState, useEffect } from "react";

import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";

import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";

import { PiPlanetFill } from "react-icons/pi";

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

export function Character(character) {
    return (
        <div key={character.id} className="bg-gray-900 rounded-md p-2 flex flex-col justify-center items-center gap-4 w-full h-full">
            <div className="flex flex-row items-center gap-4 text-center">
                {character.status !== "Alive" ? <FaHeartBroken className="text-red-500 text-xl" /> : <FaHeart className="text-red-500 text-xl" />}
                <p className="font-extrabold uppercase text-white text-xl border-b-4 border-green-400">{character.name}</p>
            </div>

            <img
                src={character.image}
                alt={character.name}
                width={200}
                className="rounded-full"
            />

            <div className="flex flex-row justify-between items-center w-full mx-5">

                <Tooltip title={character.gender}>
                    <IconButton>
                        {character.gender !== "Male" ? <FaFemale className="text-white text-3xl" /> : <FaMale className="text-white text-3xl" /> }
                    </IconButton>
                </Tooltip>

                <Tooltip title={character.origin}>
                    <IconButton>
                        <PiPlanetFill className="text-white text-3xl" />
                    </IconButton>
                </Tooltip>
                
            </div>
        </div>
    );
}
