const MenuCard=()=>{
    return(
        <>
<div style={{ backgroundColor: "#F1F1F1" }} className="flex h-screen">
<section class="container mx-auto p-6 font-mono">
  <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div class="w-full overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Image</th>
            <th class="px-4 py-3">Price</th>
            <th class="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div>
                  <p class="font-semibold text-black text-xl">Rice</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-ms font-semibold border flex justify-center items-center"><img src={`https://source.unsplash.com/400x300/?Chapati`} alt=""/></td>
            <td class="px-4 py-3 text-sm border">8805014308</td>
            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm cursor-pointer"> Delete </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
</div>
        </>
    )
}

export default MenuCard