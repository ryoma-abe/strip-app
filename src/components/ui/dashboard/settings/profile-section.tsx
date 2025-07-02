import React from "react";

const ProfileSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-medium">プロフィール</h2>
      <div className="flex flex-col gap-4 border border-gray-300 p-4 rounded-sm">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">名前</h3>
          <p className="text-sm text-gray-500">John Doe</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">メールアドレス</h3>
          <p className="text-sm text-gray-500">test.mel@example.com</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">現在のプラン</h3>
          <p className="text-sm text-gray-500">PROプラン</p>
          <p className="text-sm text-gray-500">次回更新日: 2025/07/01</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
