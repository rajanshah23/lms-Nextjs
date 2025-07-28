import { Edit, MoreVertical, Trash2 } from "lucide-react"

function Students(){
    return(
<>
 <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="relative text-gray-500 focus-within:text-gray-900 mb-4">
            <input
              type="text"
              id="default-search"
              className="block w-80 h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none  focus:ring-indigo-500"
              placeholder="Search for company"
            />
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full rounded-xl">
              <thead>
                <tr className="bg-gray-50">
                  <th
                    scope="col"
                    className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
                  >
                    Categories
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    User ID
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    Industry Type
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    Louis Vuitton
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    20010510
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    Customer
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    Accessories
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-1">
                      <button className="p-2 rounded-full group transition-all duration-500 flex items-center hover:bg-indigo-50">
                        <Edit className="w-5 h-5 text-indigo-500 cursor-pointer" />
                      </button>
                      <button className="p-2 rounded-full group transition-all duration-500 flex items-center hover:bg-red-50">
                        <Trash2 className="w-5 h-5 text-red-600 cursor-pointer" />
                      </button>
                      <button className="p-2 rounded-full group transition-all duration-500 flex items-center hover:bg-gray-50">
                        <MoreVertical className="w-5 h-5 text-black cursor-pointer" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    Apple
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    20010511
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    Partner
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    Electronics
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-1">
                      <button className="p-2 rounded-full group transition-all duration-500 flex items-center hover:bg-indigo-50">
                        <Edit className="w-5 h-5 text-indigo-500 cursor-pointer" />
                      </button>
                      <button className="p-2 rounded-full group transition-all duration-500 flex items-center hover:bg-red-50">
                        <Trash2 className="w-5 h-5 text-red-600 cursor-pointer" />
                      </button>
                      <button className="p-2 rounded-full group transition-all duration-500 flex items-center hover:bg-gray-50">
                        <MoreVertical className="w-5 h-5 text-black cursor-pointer" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    Johnson
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    20010512
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    Customer
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    Telecommunications
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-1">
                      <button className="p-2 rounded-full group transition-all duration-500 flex items-center hover:bg-indigo-50">
                        <Edit className="w-5 h-5 text-indigo-500 cursor-pointer" />
                      </button>
                      <button className="p-2 rounded-full group transition-all duration-500 flex items-center hover:bg-red-50">
                        <Trash2 className="w-5 h-5 text-red-600 cursor-pointer" />
                      </button>
                      <button className="p-2 rounded-full group transition-all duration-500 flex items-center hover:bg-gray-50">
                        <MoreVertical className="w-5 h-5 text-black cursor-pointer" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    Starbucks
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    20010513
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    Reseller
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    Retail
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-1">
                      <button className="p-2 rounded-full group transition-all duration-500 flex items-center hover:bg-indigo-50">
                        <Edit className="w-5 h-5 text-indigo-500 cursor-pointer" />
                      </button>
                      <button className="p-2 rounded-full group transition-all duration-500 flex items-center hover:bg-red-50">
                        <Trash2 className="w-5 h-5 text-red-600 cursor-pointer" />
                      </button>
                      <button className="p-2 rounded-full group transition-all duration-500 flex items-center hover:bg-gray-50">
                        <MoreVertical className="w-5 h-5 text-black cursor-pointer" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

</>
    )
}
export default Students