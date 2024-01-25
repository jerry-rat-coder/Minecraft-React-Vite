import { useMinecraft } from "../hooks/useMinecraft";
import { useModal } from "../hooks/useModal";
import toast from "react-hot-toast";

const Button = () => {
  const [resetWorld, saveWorld] = useMinecraft(state => [state.resetWorld, state.saveWorld]);
  const { onOpen } = useModal();

  return ( 
    <div className="fixed top-4 left-[50%] translate-x-[-50%] h-8 w-40 flex items-center ">
      <button onClick={(e) => {
        e.stopPropagation();
        resetWorld();
        toast.success('Success Reset the World.');
      }} className="p-4 outline-none hover:opacity-60 bg-sky-400 rounded-md" >Reset</button>
      <button onClick={(e) => {
        e.stopPropagation();
        saveWorld();
        toast.success('Success Save the World.')
      }} className="p-4 outline-none hover:opacity-60 bg-green-400 rounded-md" >Save</button>
      <button onClick={(e) => {
        e.stopPropagation();
        onOpen();
      }} className="p-4 outline-none hover:opacity-60  bg-orange-400  rounded-md" >Help</button>
    </div>
   );
}
 
export default Button;