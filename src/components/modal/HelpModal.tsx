import { useModal } from "../../hooks/useModal";
import Modal from "./Modal";

const HelpModal = () => {
  const body = (
    <div className="flex flex-col gap-2">
      <h2>
        <span className=" font-semibold">玩法说明:</span>
        光标移动至准心单击开始，单击地面或方块表面以放置方块，按住alt同时单击方块以清除方块
      </h2>
      <div>WSAD键: 前进/后退/左右移动</div>
      <div>Space键: 跳跃/飞行</div>
      <div>F键: 飞行模式</div>
      <div>左SHIFT键: 降落（仅限飞行模式）</div>
      <div>左Ctrl键: 关闭飞行模式</div>
      <div>数字键1~5: 选择方块</div>
      <div className=" text-sky-400"> Reset: 清除所有方块</div>
      <div className=" text-green-400">Save: 保存世界（本地）</div>
      <div className=" text-purple-400">
        Upload: 自定义方块（上传）,p6为自定义素材
      </div>
    </div>
  );

  const { isOpen: isHelpOpen, onClose } = useModal();
  return (
    <Modal
      isOpen={isHelpOpen}
      onClose={onClose}
      body={body}
      title="Minecraft概念版 Ver0.114514（新增自定义方块）"
    />
  );
};

export default HelpModal;
