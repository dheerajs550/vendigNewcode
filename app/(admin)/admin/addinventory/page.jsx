import ButtomBtn from '@/components/bottombutton/page'
import MedicineForm from '@/components/form/page'
import React from 'react'
// import MedicineForm from '../components/MedicineForm';
function AddInventory() {
     const bottomBtnRoot = {    Cancel: "/admin/popup/cancelprocess",
                                Back: "/admin/report",
                                Continue: "/admin/popup"
                                };
     const bottomBtnText = {    Cancel: "Cancel",
                                Back: "Back",
                                Continue: "done"}

  return (
    <>
    <main className="w-100 min-h-screen  p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Add Inventory </h1>
      <MedicineForm />
    </main>
        <ButtomBtn data={bottomBtnRoot} text={bottomBtnText}/>

    </>
  )
}

export default AddInventory