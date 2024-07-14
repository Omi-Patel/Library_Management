import emailjs from 'emailjs-com'

const History = () => {

    const snedAlert = () => {
        
    }

    return (
      <div className="flex flex-col mt-10">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 rounded-md">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                  <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 text-xs font-medium text-left text-gray-700 uppercase tracking-wider"
                    >
                      Sr No.
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 text-xs font-medium text-left text-gray-700 uppercase tracking-wider"
                    >
                      User Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 text-xs font-medium text-left text-gray-700 uppercase tracking-wider"
                    >
                      Book Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 text-xs font-medium text-left text-gray-700 uppercase tracking-wider"
                    >
                      Borrow Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 text-xs font-medium text-left text-gray-700 uppercase tracking-wider"
                    >
                      Due Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 text-xs font-medium text-left text-gray-700 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Your table data here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default History;
  