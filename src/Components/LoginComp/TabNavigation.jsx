// components/TabNavigation.js
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BulletCard from "./BulletCard";
const data = {
    categories: [
        { id: 1, name: "Abdominal Conditions" },
        { id: 2, name: "Heart Diseases" },
        { id: 3, name: "Skin Disorders" },
        { id: 4, name: "Eye Conditions" },
        { id: 5, name: "Respiratory Conditions" },
        { id: 6, name: "Neurological Disorders" },
        // { id: 7, name: "Musculoskeletal Disorders" },
        // { id: 8, name: "Gastrointestinal Disorders" },
        // { id: 9, name: "Endocrine Disorders" },
        // { id: 10, name: "Infectious Diseases" },
        // { id: 11, name: "Mental Health Conditions" },
        // { id: 12, name: "Dermatological Conditions" },
        // { id: 13, name: "Ophthalmic Conditions" },
        // { id: 14, name: "Cardiovascular Diseases" },
        // { id: 15, name: "Renal and Urinary Tract Disorders" },
        // { id: 16, name: "Hematological Disorders" },
        // { id: 17, name: "Dental and Oral Health" },
        // { id: 18, name: "Pediatric Diseases" },
        // { id: 19, name: "Cancer" },
    ],
    cards: {
        1: [
            { title: "SSC CGL" },
            { title: "SSC MTS" },
            { title: "SSSC CPO" },
            { title: "SSC CHSL" },
            { title: "DELHI POLICE CONSTABLE" },
            { title: "SSC GD CONSTABLE" },
            { title: "SSC STENOGRAPHER" },
            { title: "SSC JE CE" },
            { title: "SSC JE ME" },
            { title: "SSC JE EE" },
            { title: "SSC SELECTION POST" },
            { title: "EXPLORE ALL EXAMS" },
        ],
        2: [
            { title: "IBPS CLERK" },
            { title: "IBPS PO" },
            { title: "RRP OFFICER SCAL - 1" },
            { title: "SBI CLERK" },
            { title: "RRB OFFICE ASSISTANT" },
            { title: "SBI PO" },
            { title: "CENTRAL BANK OF INDIA MANAGER" },
            { title: "BANK OF INDIA PO" },
            { title: "JAIIB EXAM" },
            { title: "BOB ACQUSITION OFFICER" },
            { title: "EPFO STENOGRAPHER" },
            { title: "EXPLORE ALL EXAMS" },
        ],
        3: [
            { title: "UGC NET" },
            { title: "BIHAR STET" },
            { title: "EMRS HOSTEL WARDEN" },
            { title: "JSSC PRIMARY TEACHER" },
            { title: "DSSSB TGT" },
            { title: "EMRS LIBRARIAN" },
            { title: "EMRS ACCOUNTANT" },
            { title: "CTET" },
            { title: "BIHAR PRIMARY TECHER" },
            { title: "EMRS TGT" },
            { title: "EMRS PGT" },
            { title: "EXPLORE ALL EXAMS" },
        ],
        4: [
            { title: "Card 4" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
        ],
        5: [
            { title: "Card 5" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
        ],
        6: [
            { title: "Card 6" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
        ],
        7: [
            { title: "Card 7" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
            { title: "Card 11" },
        ],
        // Add more cards for each category...
    },
};
const TabNavigation = ({ handleLogin }) => {
    const [activeCategory, setActiveCategory] = useState(data.categories[0].id);

    const activeCards = data.cards[activeCategory] || [];

    return (
        <div className="container mx-auto py-4">
            <div className="w-full text-center mb-4">
                <h1 className="text-2xl font-bold mb-4">Categories</h1>
                <p>
                    Select categories and choose relevant disease and symptoms
                    to get cure and{" "}
                </p>
            </div>
            <ul
                className="mb-5 flex w-full justify-between list-none flex-row flex-wrap border-b-2 pl-0"
                role="tablist"
            >
                {data.categories.map((category) => (
                    <li
                        role="presentation"
                        key={category.id}
                        className={` my-2 block border-b-2  px-2 pb-3.5 pt-4 font-medium uppercase leading-tight text-sm hover:bg-gray-100  focus:bg-gray-100 ${
                            activeCategory === category.id
                                ? "border-blue-400  bg-slate-100"
                                : "border-none"
                        }`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        <button className="">{category.name}</button>
                    </li>
                ))}
            </ul>

            <div className="mt-4 w-full flex flex-wrap gap-3 justify-between  items-center ">
                {activeCards &&
                    activeCards.map((activeCard, index) => (
                        <BulletCard
                            key={index}
                            title={activeCard.title}
                            image={`/hero.png`}
                            handleLogin={handleLogin}
                        />
                    ))}
            </div>
        </div>
    );
};

export default TabNavigation;
