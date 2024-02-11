import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface IModal {
  isOpen?: boolean,
  onClose: () => void,
  onSubmit?: () => void
}

const Modal: React.FC<IModal> = ({
  isOpen,
  onClose
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
      setShowModal(false);

      setTimeout(() => {
        onClose();
      }, 300);
  }, [onClose]);

  return isOpen && ( 
    <>
      <div 
        onClick={(e) => e.stopPropagation()}
        className='justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70'>
        <div className='relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto'>
          <div className={`
            translate 
            transition 
            duration-300 
            h-full 
            ${showModal ? 'translate-y-0' : 'translate-y-full'} 
            ${showModal ? 'opacity-100' : ' opacity-0'}
            `}>
              <div className='translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none'>
                <div className='flex items-center p-6 rounded-t justify-center relative border-b-[1px]'>
                  <button
                  onClick={handleClose}
                  className='p-1 border-0 absolute left-9 hover:opacity-70 transition'
                  >
                    <IoMdClose size={18} />
                  </button>
                  <div className='text-lg font-semibold'>
                    Minecraft概念版 Ver0.114514（新增自定义方块）
                  </div>
                </div>
                <div className='relative p-6 flex-auto'>
                  <div className="flex flex-col gap-2">
                    <h2><span className=" font-semibold">玩法说明:</span>光标移动至准心单击开始，单击地面或方块表面以放置方块，按住alt同时单击方块以清除方块</h2>
                    <div>WSAD键: 前进/后退/左右移动</div>
                    <div>Space键: 跳跃/飞行</div>
                    <div>F键: 飞行模式</div>
                    <div>左SHIFT键: 降落（仅限飞行模式）</div>
                    <div>左Ctrl键: 关闭飞行模式</div>
                    <div>数字键1~5: 选择方块</div>
                    <div className=" text-sky-400">Reset: 清除所有方块</div>
                    <div className=" text-green-400">Save: 保存世界（本地）</div>
                    <div className=" text-purple-400">Upload: 自定义方块（上传）</div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default Modal;