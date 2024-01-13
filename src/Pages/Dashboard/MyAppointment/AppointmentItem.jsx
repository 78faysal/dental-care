const AppointmentItem = ({
  item,
  idx,
  handlePay,
  paymentTransId: paymentId
}) => {
  console.log(paymentId);
  return (
    <tr key={item._id}>
      <th>{idx + 1}</th>
      <td>{item.name}</td>
      <td>{item.date}</td>
      <td>{item.time}</td>
      <td>{item.treatment}</td>
      <td>
        <button
          onClick={() => handlePay(item)}
          className="btn bg-green-800 text-white"
        >
          Pay
        </button>
      </td>
    </tr>
  );
};

export default AppointmentItem;
