import Button from "../Button";
import { useUpload } from "../../hooks/useUpload";

const UploadWidget = () => {
  const { setImg } = useUpload();
  // const cloudinaryRef = useRef<Cloudinary>();
  // const widgetRef = useRef();

  // useEffect(() => {
  //   cloudinaryRef.current = window.cloudinary;
  //   widgetRef.current = cloudinaryRef.current.createUploadWidget({
  //     cloudinaryName: 'cld',
  //     uploadPreset: 'ed1g8bvu'
  //   }, function(err, res) {
  //     console.log(res);
  //   })
  // }, []);

  return (
    <Button
      color="purple"
      title="Upload"
      onClick={() => {
        window.cloudinary.openUploadWidget(
          {
            cloudName: "dtzi3qstg",
            uploadPreset: "ed1g8bvu",
            sources: [
              "local",
              "url",
              "camera",
              "image_search",
              "facebook",
              "dropbox",
              "instagram",
              "shutterstock",
            ],
            showAdvancedOptions: true,
            cropping: true,
            multiple: false,
            defaultSource: "local",
            styles: {
              palette: {
                window: "#FFFFFF",
                windowBorder: "#90A0B3",
                tabIcon: "#0078FF",
                menuIcons: "#5A616A",
                textDark: "#000000",
                textLight: "#FFFFFF",
                link: "#0078FF",
                action: "#FF620C",
                inactiveTabIcon: "#0E2F5A",
                error: "#F44235",
                inProgress: "#0078FF",
                complete: "#20B832",
                sourceBg: "#E4EBF1",
              },
              fonts: {
                default: null,
                "'Fira Sans', sans-serif": {
                  url: "https://fonts.googleapis.com/css?family=Fira+Sans",
                  active: true,
                },
              },
            },
          },
          (error, result) => {
            if (!error && result && result.event === "success") {
              // console.log('Done! Here is the image info: ', result.info);
              // 在这里你可以获取上传成功后的图片URL
              // 例如：result.info.secure_url
              console.log(result.info.secure_url);
              setImg(result.info.secure_url);
            }
          }
        );
      }}
    />
  );
};

export default UploadWidget;
