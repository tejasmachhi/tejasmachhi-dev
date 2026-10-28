'use client'

import { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Skeleton } from 'primereact/skeleton'

// Dummy data
const generateDummyData = () => {
  const data = []
  for (let i = 1; i <= 50; i++) {
    data.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      age: Math.floor(Math.random() * 40) + 20,
      salary: Math.floor(Math.random() * 50000) + 30000,
      department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'][Math.floor(Math.random() * 5)],
      status: ['Active', 'Inactive', 'Pending'][Math.floor(Math.random() * 3)]
    })
  }
  return data
}

// Grid Loader Component
const GridLoader = () => {
  return (
    <div className="grid-loader">
      <div className="grid">
        {[...Array(9)].map((_, i) => (
          <Skeleton key={i} width="100%" height="60px" className="mb-2" />
        ))}
      </div>
    </div>
  )
}

export default function DataTablePage() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setData(generateDummyData())
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Employee Data Table</h1>
          <GridLoader />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Employee Data Table</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <DataTable 
            value={data} 
            paginator 
            rows={10} 
            dataKey="id"
            className="p-datatable-customers"
            responsiveLayout="scroll"
            header={<div className="text-xl font-semibold">Employee Records</div>}
            filters={{}}
            filterDisplay="menu"
            globalFilterFields={['name', 'email', 'department', 'status']}
            emptyMessage="No records found"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            rowsPerPageOptions={[10, 25, 50]}
          >
            <Column 
              field="id" 
              header="ID" 
              sortable 
              style={{ minWidth: '80px' }}
              body={(rowData) => <span className="font-semibold">#{rowData.id}</span>}
            />
            <Column 
              field="name" 
              header="Name" 
              sortable 
              filter 
              filterPlaceholder="Search by name"
              style={{ minWidth: '150px' }}
            />
            <Column 
              field="email" 
              header="Email" 
              sortable 
              filter 
              filterPlaceholder="Search by email"
              style={{ minWidth: '200px' }}
            />
            <Column 
              field="age" 
              header="Age" 
              sortable 
              style={{ minWidth: '80px' }}
              body={(rowData) => <span className="text-center">{rowData.age}</span>}
            />
            <Column 
              field="salary" 
              header="Salary" 
              sortable 
              style={{ minWidth: '120px' }}
              body={(rowData) => <span className="font-medium text-green-600">${rowData.salary.toLocaleString()}</span>}
            />
            <Column 
              field="department" 
              header="Department" 
              sortable 
              filter 
              style={{ minWidth: '120px' }}
              body={(rowData) => (
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  rowData.department === 'Engineering' ? 'bg-blue-100 text-blue-800' :
                  rowData.department === 'Marketing' ? 'bg-purple-100 text-purple-800' :
                  rowData.department === 'Sales' ? 'bg-green-100 text-green-800' :
                  rowData.department === 'HR' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {rowData.department}
                </span>
              )}
            />
            <Column 
              field="status" 
              header="Status" 
              sortable 
              filter 
              style={{ minWidth: '100px' }}
              body={(rowData) => (
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  rowData.status === 'Active' ? 'bg-green-100 text-green-800' :
                  rowData.status === 'Inactive' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {rowData.status}
                </span>
              )}
            />
          </DataTable>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{data.length}</div>
              <div className="text-sm text-gray-600">Total Employees</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {data.filter(emp => emp.status === 'Active').length}
              </div>
              <div className="text-sm text-gray-600">Active Employees</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                ${Math.floor(data.reduce((sum, emp) => sum + emp.salary, 0) / data.length).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Average Salary</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">
                {Math.floor(data.reduce((sum, emp) => sum + emp.age, 0) / data.length)}
              </div>
              <div className="text-sm text-gray-600">Average Age</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .grid-loader {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }
        
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          width: 100%;
        }

        :global(.p-datatable .p-datatable-thead > tr > th) {
          background-color: #f8fafc;
          color: #374151;
          font-weight: 600;
          border-bottom: 2px solid #e5e7eb;
        }

        :global(.p-datatable .p-datatable-tbody > tr > td) {
          padding: 1rem;
          border-bottom: 1px solid #f3f4f6;
        }

        :global(.p-datatable .p-datatable-tbody > tr:hover) {
          background-color: #f9fafb;
        }

        :global(.p-paginator) {
          background-color: #ffffff;
          border-top: 1px solid #e5e7eb;
        }

        :global(.p-skeleton) {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }

        @keyframes loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  )
}
