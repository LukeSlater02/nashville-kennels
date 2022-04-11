import React, { useEffect, useState } from "react";

export const MadLib = () => {
    let [madLibrary, setmadLib] = useState({})

    useEffect(() => {
        setmadLib({
            pluralNoun1: "unicorns",
            adjective1: "pretty",
            noun: "street",
            typeOfFood: "mexican",
            articleOfClothing: "dickey",
            verbEndingIning: "wallowing",
            pluralNoun2: "trees",
            pluralNoun3: "lasers",
            numberVal: "113",
            celebrity: "Taylor Swift",
            color: "golden rod",
            verbEndingIning2: "licking",
            typeOfFoodw: "Italian sweets",
            pluralNoun4: "concrete shoes",
            adjective2: "gloomy",
            adjective3: "claustrophobic"
         })
    }, [])

    const randomN = () => {
        let result = Math.floor(Math.random() * 4 + 1)
        return result
    }

    return (
        <div>
            Would it surprise you to learn that the most majestic <strong>{madLibrary[`pluralNoun${randomN()}`]}</strong> in the world eat garbage?
             Well, they do! Everything from {madLibrary.adjective} soda cans to {madLibrary.noun}-stained {madLibrary.typeOfFoodw} boxes to used article of clothing
              - and more! Some have been spotted {madLibrary.verbEndingIning} dumpsters and then using their long {madLibrary.pluralNoun} to spear
               as many bags of {madLibrary.pluralNoun} as they can before being caught. According to an interview with the Number Minutes News,
                Celebrity once came home to find a/an color unicorn {madLibrary.verbEndingIning2} up in the recycling bin. The poor thing
                 had mistaken leftover {madLibrary.typeOfFood} for dried up {madLibrary.pluralNoun}. "It was a/an {madLibrary.adjective} mistake. I am a good cook!"
        </div>
    )
}