import React from "react";
import Sidebar from "../components/Layouts/Sidebar";
import Navbar from "../components/Layouts/Navbar";

export default function TablesView() {
  return (
    <>
      <div className="font-family-karla flex" style={{ backgroundColor: '#2F4D6A' }}>
        <Sidebar />
        <div className="w-full flex flex-col h-screen bg-gray-100 overflow-y-hidden">
          <Navbar />
          <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow p-6">
              <h1 className="text-3xl text-black pb-6">Tables</h1>

              {/* Premier exemple de tableau */}
              <div className="w-full mt-6">
                <p className="text-xl pb-3 flex items-center">
                  <i className="fas fa-list mr-3"></i> Table Example
                </p>
                <div className="bg-white overflow-auto">
                  <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                      <tr>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="w-1/3 text-left py-3 px-4">Lian</td>
                        <td className="w-1/3 text-left py-3 px-4">Smith</td>
                        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                      </tr>
                      {/* Autres lignes de tableau */}
                    </tbody>
                  </table>
                </div>
               
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
