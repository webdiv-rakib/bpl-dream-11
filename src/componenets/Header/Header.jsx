import { BsCoin } from "react-icons/bs";
const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between items-center px-10">
            <div>
                <img src="../../../src/assets/logo.png" alt="" />
            </div>
            <div className="flex justify-center items-center gap-10 font-semibold">
                <a href=""><u>Home</u></a>
                <a href=""><u>Fixture</u></a>
                <a href=""><u>Teams</u></a>
                <a href=""><u>Schedule</u></a>
                <button className="border-2 px-5 py-3 rounded-2xl border-[#e7fe29] flex justify-center items-center gap-2"><span>100000</span> Coin <BsCoin /></button>
            </div>
        </div>
    );
};

export default Header;