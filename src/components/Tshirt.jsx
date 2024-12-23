
export default function Tshirt({ image, name, price, open }) {
    return (
        <div
            onClick={open}
            className="w-[300px] h-[400px] flex flex-col justify-evenly items-center gap-4 cursor-pointer bg-white rounded-3xl shadow-inner shadow-slate-400 hover:border-[6px] hover:border-black transition-all">
            <span className="w-full">
                <img src={image} alt="tshirt" className="w-fit" />
            </span>
            <div className="w-full h-full flex flex-col text-[#137B64]">
                <p className="text-center text-2xl font-bold">{name}</p>
                <p className="text-center text-xl font-bold">{price}</p>
            </div>
        </div>
    );
}
