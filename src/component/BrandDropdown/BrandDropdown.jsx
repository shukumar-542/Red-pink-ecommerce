import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

const BrandDropdown = ({ brands }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    setShowDropdown(false);
    navigate(`/category/${category}`);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <button className="cursor-pointer hover:text-[#4F378B] text-xs md:text-[16px] flex items-center gap-2">
        Brand <MdOutlineKeyboardArrowDown size={25} />
      </button>

      {showDropdown && (
        <div className="absolute grid grid-cols-1 md:grid-cols-4 left-0 min-w-[160px] max-h-[70vh] overflow-auto  md:min-w-4xl bg-white shadow-lg rounded transition-all duration-300 ease-in-out transform z-50 p-4">
          {brands.map((category, index) => (
            <div
              key={index}
              onClick={() => handleNavigate(category)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <p className="text-center">{category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandDropdown;
