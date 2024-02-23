import { useMinecraft } from "../../hooks/useMinecraft";
import { useModal } from "../../hooks/useModal";
import toast from "react-hot-toast";
import UploadWidget from "../main/UploadWidget";
import Button from "../Button";

const Menu = () => {
  const [resetWorld, saveWorld] = useMinecraft((state) => [
    state.resetWorld,
    state.saveWorld,
  ]);
  const { onOpen } = useModal();

  return (
    <div className="fixed top-4 h-8 w-full flex items-center justify-center ">
      <div className="flex gap-4 items-center">
        <Button
          color="sky"
          title="Reset"
          onClick={() => {
            resetWorld();
            toast.success("Success Reset the World.");
          }}
        />
        <Button
          color="green"
          title="Save"
          onClick={() => {
            saveWorld();
            toast.success("Success Save the World.");
          }}
        />
        <Button
          color="orange"
          title="Help"
          onClick={() => {
            onOpen();
          }}
        />
        <UploadWidget />
      </div>
    </div>
  );
};

export default Menu;
