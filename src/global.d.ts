// cloudinary.d.ts
interface Cloudinary {
  openUploadWidget(arg0: { cloudName: string; uploadPreset: string; sources: string[]; showAdvancedOptions: boolean; cropping: boolean; multiple: boolean; defaultSource: string; styles: { palette: { window: string; windowBorder: string; tabIcon: string; menuIcons: string; textDark: string; textLight: string; link: string; action: string; inactiveTabIcon: string; error: string; inProgress: string; complete: string; sourceBg: string; }; fonts: { default: null; "'Fira Sans', sans-serif": { url: string; active: boolean; }; }; }; }, arg1: (error: any, result: any) => void): unknown;
  createUploadWidget: (options?: any, callback?: (error: any, result: any) => void) => any;

}

interface Window {
  cloudinary: Cloudinary;
}