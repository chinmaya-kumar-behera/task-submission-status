import { CiSearch } from "react-icons/ci";

function App() {
  return (
    <div className="min-h-full w-full bg-[#01193d] text-white">
      <div className="h-20 border-b border-white"></div>
      <div className="p-10">
        <div className="w-full flex items-center justify-center mb-5">
          <div className="w-full max-w-[500px] flex bg-[#012964] rounded-2xl">
            <input
              type="text"
              className="w-full rounded-3xl px-5 py-3 bg-transparent"
            />
            <button className="px-5 py-2 rounded-2xl bg-[#e64aa1]">
              <CiSearch className="text-3xl" />
            </button>
          </div>
        </div>
        <div className="border border-gray-400 rounded-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="h-20">
                <th className="bg-[#0a3773] bg-opacity-80">Test Case Name</th>
                <th className="bg-[#0a3773] bg-opacity-80">Estimate Time</th>
                <th className="bg-[#0a3773] bg-opacity-80">Module</th>
                <th className="bg-[#0a3773] bg-opacity-80">Priority</th>
                <th className="bg-[#0a3773] bg-opacity-80">Status</th>
              </tr>
            </thead>

            <tbody className="">
              <tr className="text-center">
                <td>
                  <div className="w-full p-5">
                    <div className="text-left mb-1">
                      <span>Test Case ID:</span>
                    </div>
                    <div className="flex flex-col justify-between items-start bg-gray-500 h-20 p-1">
                      <span>hii</span>
                      <span>
                        <small>Last updated 5 mins ago</small>
                      </span>
                    </div>
                  </div>
                </td>
                <td>5mins</td>
                <td>onboarding</td>
                <td>low</td>
                <td className="">
                  <select className="max-w-[150px] bg-transparent border px-2 py-1">
                    <option>PASS</option>
                    <option>FAIL</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
