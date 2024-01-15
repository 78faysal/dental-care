const AppointmentItem = ({
  item,
  idx,
  handlePay,
  // paymentId
}) => {
  // console.log(paymentId);
  return (
    <tr key={item._id}>
      <th>{idx + 1}</th>
      <td>{item.name}</td>
      <td>{item.date}</td>
      <td>{item.time}</td>
      <td>{item.treatment}</td>
      <td>
        <button
          disabled={item?.payment === 'done'}
          onClick={() => handlePay(item)}
          className={`btn bg-green-800 text-white`}
        >
          {item?.transactionId ? 'Paied' : "Pay"}
        </button>
        {item?.transactionId && <p className="text-green-700">Trans Id: {item?.transactionId}</p>}
      </td>
    </tr>
  );
};

export default AppointmentItem;
