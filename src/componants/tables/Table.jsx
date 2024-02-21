import React from "react";
import useGetTabledata from "../../hooks/useGetTabledata";
import useStore from "../../store/useStore";

const Table = () => {
  const { transactions } = useGetTabledata();
  console.log("transactions", transactions);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full md:min-w- lg:min-w-1200 border-collapse">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Sold</th>
              <th>Image</th>
              <th>Date Of Sale</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((transaction) => (
              <tr>
                <th>{transaction.id}</th>
                <th>{transaction.title}</th>
                <th className="description-cell w-20 md:w-52">
                  {transaction.description}
                </th>
                <th>{transaction.price}</th>
                <th>{transaction.category}</th>

                <th>{transaction.sold}</th>
                <th>{transaction.image}</th>
                <th>{transaction.dateOfSale}</th>
              </tr>
            ))}
            {/* row 1 */}
            {/* <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr> */}
            {/* row 2 */}
            {/* <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr> */}
            {/* row 3 */}
            {/* <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

const values = {
  _id: "65d5cd6a1d93818a5e609dfb",
  id: 59,
  title: "Opna Womens Short Sleeve Moisture",
  price: 79.5,
  description:
    "100 Polyester Machine wash 100 cationic polyester interlock Machine Wash  Pre Shrunk for a Great Fit Lightweight roomy and highly breathable with moisture wicking fabric which helps to keep moisture away Soft Lightweight Fabric with comfortable Vneck collar and a slimmer fit delivers a sleek more feminine silhouette and Added Comfort",
  category: "women's clothing",
  image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  sold: false,
  dateOfSale: "2022-06-27T00:00:00.000Z",
  month: 6,
  __v: 0,
};
