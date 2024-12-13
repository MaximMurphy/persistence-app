"use client";

import { Icon } from "@iconify-icon/react";

export default function MockTask() {
  return (
    <div className="w-full flex gap-4 items-center">
      <CompletedButton />
      <div className="w-full lg:w-[calc(50%-44px)] flex justify-between px-4 py-2 bg-background brightness-90 border border-browser rounded-md hover:brightness-100 transition ease-in-out duration-200">
        <p className="h-fit w-fit text-base text-cream/50 overflow-x-auto whitespace-nowrap overflow-scroll no-scrollbar">
          Task Name
        </p>

        <div className="flex gap-2">
          <div className="flex gap-2 group">
            <DeleteButton />
            <EditButton />
          </div>
          <PersistButton />
        </div>
      </div>
    </div>
  );
}

export const DeleteButton = () => {
  return (
    <button className="flex items-center justify-center relative w-6 h-6 bg-background brightness-75 border border-browser rounded-sm hover:brightness-100 hover:outline-none hover:ring-2 hover:ring-red-900 active:bg-red-900 transition ease-in-out duration-200">
      <Icon icon="lucide:trash" width="12" height="12" />
    </button>
  );
};

export const EditButton = () => {
  return (
    <button className="flex items-center justify-center relative w-6 h-6 bg-background brightness-75 border border-browser rounded-sm hover:brightness-100 hover:outline-none hover:ring-2 hover:ring-accentBlueWithLife active:bg-accentBlueWithLife transition ease-in-out duration-200">
      <Icon icon="lucide:edit" width="12" height="12" />
    </button>
  );
};

export const PersistButton = () => {
  return (
    <button className="flex items-center justify-center relative w-6 h-6 bg-background brightness-75 border border-browser rounded-sm hover:brightness-100 hover:outline-none hover:ring-2 hover:ring-accentPink active:bg-accentPink transition ease-in-out duration-200">
      ✧
    </button>
  );
};

export const CompletedButton = () => {
  return (
    <button className="brightness-90 flex items-center justify-center relative w-6 h-6 border border-browser rounded-sm hover:brightness-150 hover:outline-none hover:ring-2 hover:ring-accentPurple active:bg-accentPurple text-background active:text-cream transition ease-in-out duration-200">
      <Icon icon="lucide:check" width="12" height="12" />
    </button>
  );
};
