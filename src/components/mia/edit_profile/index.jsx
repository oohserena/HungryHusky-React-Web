import NavigationBar from "@/components/common/NavigationBar";
import { useSearchParams } from "next/navigation";
import EditForm from "./edit_form";
import Title from "./title";

export default function EditProfile() {
    return (
      <div>
        <NavigationBar />
        <Title />
        <EditForm />
      </div>
    );
  }
  