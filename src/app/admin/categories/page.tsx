"use client";
import Modal from "@/components/modal/Modal";
import { deleteCategory, fetchCategories} from "@/store/category/categorySlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Edit, MoreVertical, Trash2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

function AdminLayout() {
  const [searchTerm,setSearchTerm]=useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const{categories}=useAppSelector((store)=>store.category)
  const openModal = useCallback(() => setIsModalOpen(true),[]);
  const closeModal = useCallback(() => setIsModalOpen(false),[]);

  const deleteCat =(id:string)=>{
  if(id){dispatch(deleteCategory(id))}
     
  }

  useEffect(() => {
    dispatch(fetchCategories());
   
  }, []);


  const filteredcategories=categories.filter((category)=>category.name.toLowerCase().includes(searchTerm.toLowerCase()) || category._id.toLowerCase().includes(searchTerm.toLowerCase()) || category.description.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <>
      <div className="flex flex-col">
        <div className=" overflow-x-auto">
          {isModalOpen && <Modal closeModal={closeModal} />}
          <div className="min-w-full inline-block align-middle">
            <div className="relative  text-gray-500 focus-within:text-gray-900 mb-4">
              <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none ">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z"
                    stroke="black"
                    strokeOpacity="0.2"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z"
                    stroke="black"
                    strokeOpacity="0.2"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex justify-between">
                <input
                onChange={(e)=>setSearchTerm(e.target.value)}
                  type="text"
                  id="default-search"
                  className="block w-80 h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                  placeholder="Search for company"
                />
                <button
                  className="bg-blue-500 text-white rounded p-2"
                  onClick={openModal}
                >
                  + Category
                </button>
              </div>
            </div>
            <div className="overflow-hidden ">
              <table className=" min-w-full rounded-xl">
                <thead>
                  <tr className="bg-gray-50">
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
                    >
                      {" "}
                      ID{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Name{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Description{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Created At{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
                    >
                      {" "}
                      Actions{" "}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 ">
                  {filteredcategories.length > 0 &&
                    filteredcategories.map((category) => {
                      return (
                        <tr
                          key={category._id}
                          className="bg-white transition-all duration-500 hover:bg-gray-50"
                        >
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                            {category._id}
                          </td>
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                            {" "}
                            {category.name}
                            {""}
                          </td>
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                            {" "}
                            {category.description || "No desc"}
                          </td>
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                            {" "}
                            {new Date(
                              category.createdAt.toString()
                            ).toLocaleDateString()}
                          </td>
                          <td className=" p-5 ">
                             <div className="flex items-center gap-1">
                      <button className="p-2 rounded-full group transition-all duration-500 flex items-center hover:bg-indigo-50">
                        <Edit className="w-5 h-5 text-indigo-500 cursor-pointer" />
                      </button>
                      <button className="p-2 rounded-full group transition-all duration-500 flex items-center hover:bg-red-50">
                        <Trash2
                           onClick={()=>deleteCat(category._id) }    className="w-5 h-5 text-red-600 cursor-pointer" />
                      </button>
                      <button className="p-2 rounded-full group transition-all duration-500 flex items-center hover:bg-gray-50">
                        <MoreVertical className="w-5 h-5 text-black cursor-pointer" />
                      </button>
                    </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminLayout;
