import Image from "next/image";
import logo from "../../../public/images/logo/logo.png";
import PrimaryButton from "./primaryButton";

const Header = () => {
  return (
    <nav className="p-4 flex justify-between items-center backdrop-blur-2xl rounded-2xl">
      <div className="flex gap-2 items-center ">
        <div>
          <Image src={logo} alt="qlyplink_logo" className="w-20" />
        </div>
        <h2 className="h3-semibold ">Qlyp Link</h2>
      </div>

      <div>
        <PrimaryButton>Login</PrimaryButton>
      </div>
    </nav>
  );
};

export default Header;
