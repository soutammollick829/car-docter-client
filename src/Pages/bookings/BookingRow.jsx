

const BookingRow = ({ booking,handelDelete }) => {
  const { _id, customerName, date, price, img, email, service } = booking;

  return (
    <div>
     <tr>
        <th className="w-52">
          <button onClick={()=> handelDelete(_id)} className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded-xl w-28 h-20">
                {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
            <div>
              <div className="font-bold">{service}</div>
            </div>
          </div>
        </td>
        <td>
          {customerName}
          <br />
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td>${price}</td>
        {date && <td>{date}</td>}
        <th>
          <button className="btn btn-error btn-xs text-white">Pending</button>
        </th>
      </tr>
    </div>
  );
};

export default BookingRow;
