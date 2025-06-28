import { Outlet } from "react-router";

const info = () => {
  return (
    <main>
      <h2 className="text-[2.4rem] font-bold p-[22px]">Info</h2>
      <Outlet />
    </main>
  );
};

export default info;
