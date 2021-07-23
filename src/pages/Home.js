


const customer = [
    {
        "Address": "Obere Str. 57", 
        "Balance": "1016.0000000000", 
        "City": "Berlin", 
        "CompanyName": "Alfreds Futterkiste", 
        "ContactName": "Maria Anders", 
        "ContactTitle": "Sales Representative", 
        "Country": "Germany", 
        "CreditLimit": "2000.0000000000", 
        "Fax": "030-0076545", 
        "Id": "ALFKI", 
        "OrderCount": 15, 
        "Phone": "030-0074321", 
        "PostalCode": "12209", 
        "Region": "Western Europe", 
        "UnpaidOrderCount": 10
      },
      {
        "Address": "Mataderos  2312", 
        "Balance": "0E-10", 
        "City": "M\u00e9xico D.F.", 
        "CompanyName": "Antonio Moreno Taquer\u00eda", 
        "ContactName": "Antonio Moreno", 
        "ContactTitle": "Owner", 
        "Country": "Mexico", 
        "CreditLimit": "100.0000000000", 
        "Fax": null, 
        "Id": "ANTON", 
        "OrderCount": 0, 
        "Phone": "(5) 555-3932", 
        "PostalCode": "05023", 
        "Region": "Central America", 
        "UnpaidOrderCount": 0
      },
      {
        
          "Address": "120 Hanover Sq.", 
          "Balance": "0E-10", 
          "City": "London", 
          "CompanyName": "Around the Horn", 
          "ContactName": "Thomas Hardy", 
          "ContactTitle": "Sales Representative", 
          "Country": "UK", 
          "CreditLimit": "100.0000000000", 
          "Fax": "(171) 555-6750", 
          "Id": "AROUT", 
          "OrderCount": 13, 
          "Phone": "(171) 555-7788", 
          "PostalCode": "WA1 1DP", 
          "Region": "British Isles", 
          "UnpaidOrderCount": 0
        }
  ]
  
  export default function Home() {

    function handleEdit() {
        alert('Given enough time, the code monkey will surely be able to code this link \n. Just as a monkey hitting keys at random on a typewriter keyboard for an infinite amount of time will produce complete works of William Shakespeare. ' )
    }
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Company Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Contact Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Contact Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      City
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customer.map((customer, customerIdx) => (
                    <tr key={customer.email} className={customerIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.CompanyName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.ContactName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.ContactTitle}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.Address}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.City}</td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" onClick={handleEdit} className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  