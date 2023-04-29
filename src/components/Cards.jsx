import {BsTags} from 'react-icons/bs';

const Cards = ({ title, description, icon, github_icon, livesite_icon,tags }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow bg-[#829993] mx-auto mb-4 hover:-translate-y-1 duration-200 transition-all ease-in-out hover:shadow-xl">
      <div className="px-6 py-4">
        <div className="flex justify-between content-start mb-4">
          {icon}
          <div className="px-0 py-4 flex justify-end gap-3">
            {github_icon}
            {livesite_icon}
          </div>
        </div>
        <div className="font-bold text-xl mb-2 text-[#324B4C]">{title}</div>
        <p className="text-[#324B4C]">{description}</p>
      </div>
      <hr className="border border-gray-400"/>
      <div className="px-6 py-4 flex justify-start text-xs text-gray-600 gap-2">
        <BsTags className='h-5 w-5'/>
        {tags}
      </div>
    </div>
  );
};


export default Cards