import { Icon } from "@iconify-icon/react";

export default async function LoadingUsers() {
  return (
    <div className="w-full h-full flex items-start justify-center">
      <Icon icon="eos-icons:loading" width="48" height="48" />
    </div>
  );
}
