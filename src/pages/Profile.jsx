import { useState } from "react";
import { ProfileHeader } from "../components/profile/ProfileHeader";
import { ProfileTabs } from "../components/profile/ProfileTabs";
import { ProfileQuestions } from "../components/profile/ProfileQuestions";
import { ProfileAnswers } from "../components/profile/ProfileAnswers";

export const Profile = () => {
    const [activeTab, setActiveTab] = useState("questions");

    return (
        <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent/10 blur-[120px]" />
            </div>
            <div className="max-w-6xl mx-auto px-4 py-16">

                {/* Header */}
                <ProfileHeader />

                {/* Tabs */}
                <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* Content */}
                <div className="mt-10">
                    {activeTab === "questions" && <ProfileQuestions />}
                    {activeTab === "answers" && <ProfileAnswers />}
                </div>

            </div>
        </div>
    );
};