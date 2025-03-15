import { AndroidIcon, AppleIcon } from "@/assets/icons";

export function AppDownload() {
  return (
    <div className="flex justify-center gap-2">
      <div className="flex flex-1 items-center justify-center gap-2 py-[6px] bg-tech-azure rounded-[10px]">
        <AndroidIcon className="h-[42px] w-[42px] text-[#3ddc84]" />
        <div className="flex flex-col">
          <span className="text-xs text-tech-light-blue">Bluechip App</span>
          <span className="text-xs text-tech-light-blue">for Android</span>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center gap-2 py-[6px] bg-tech-azure rounded-[10px]">
        <AppleIcon className="h-[42px] w-[42px] text-white" />
        <div className="flex flex-col">
          <span className="text-xs text-tech-light-blue">Bluechip App</span>
          <span className="text-xs text-tech-light-blue">for iOS</span>
        </div>
      </div>
    </div>
  );
}
