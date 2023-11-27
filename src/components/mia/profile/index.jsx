import NavigationBar from "@/components/common/NavigationBar";


import ProfileComponent from "./profile_content";
import ReviewComponent from "./recent_reviews";

export default function Profile() {
    return (
        <div>
        <NavigationBar />
        <ProfileComponent />
        <ReviewComponent />
        </div>
    );
}
