import NavigationBar from "@/components/common/NavigationBar";
import { useSearchParams } from "next/navigation";
import EditForm from "./edit_form";
import Title from "./title";

export default function EditProfile() {
    console.log("EditProfile xxxxxxxxxxxxxx");
    return (
      <div>
        <NavigationBar />
        <Title />
        <EditForm />
      </div>
    );
  }
  