import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Modal from 'react-modal';

// Custom styles for the contribute button
const contributeButtonStyle = {
  background: 'linear-gradient(45deg, #d1ff4f, #f7ff6e)',
  color: 'black',
  border: 'none',
  padding: '12px 24px',
  borderRadius: '30px',
  cursor: 'pointer',
  fontSize: '18px',
  fontWeight: 'bold',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s',
};

// Custom styles for the modal
const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '15px',
    padding: '40px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    background: 'linear-gradient(45deg, #d1ff4f, #f7ff6e)',
    width: '500px',
    maxWidth: '90%',
    maxHeight: '90%',
    overflow: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

Modal.setAppElement('#__next'); // Set the app root element for accessibility

const Spends = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [contributionAmount, setContributionAmount] = useState(0);
  const [totalContribution, setTotalContribution] = useState(113500);

  // Sample data for the BarChart
  const data = [
    { name: 'Week 1', API: 12000, Misc: 10000, GPU: 15000, Cloud: 11000 },
    { name: 'Week 2', API: 14000, Misc: 12000, GPU: 18000, Cloud: 13000 },
    { name: 'Week 3', API: 16000, Misc: 14000, GPU: 20000, Cloud: 15000 },
    { name: 'Week 4', API: 18000, Misc: 16000, GPU: 22000, Cloud: 17000 },
  ];

  const totalExpenditure = data.reduce((sum, entry) => sum + entry.API + entry.Misc + entry.GPU + entry.Cloud, 0);
  const remainingAmount = Math.max(totalExpenditure - totalContribution, 0);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleContribution(e) {
    e.preventDefault();
    setTotalContribution(totalContribution + parseInt(contributionAmount));
    setContributionAmount(0);
    closeModal();
  }

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Weekly Spending Breakdown</h2>
      <div style={{ width: '80%', height: '400px', marginBottom: '20px' }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="API" fill="#8884d8" />
            <Bar dataKey="Misc" fill="#82ca9d" />
            <Bar dataKey="GPU" fill="#ffc658" />
            <Bar dataKey="Cloud" fill="#ff7300" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p style={{ fontSize: '18px' }}>Total Expenditure: Rs. {totalExpenditure}</p>
      <p style={{ fontSize: '18px' }}>Total Contribution: Rs. {totalContribution}</p>
      <p style={{ fontSize: '18px' }}>Remaining Amount Needed: Rs. {remainingAmount}</p>
      <button
        style={contributeButtonStyle}
        onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
        onClick={openModal}
      >
        Contribute
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Contribution Modal"
      >
        <h2 style={{ color: 'black', fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>Contribute to the Project</h2>
        <button onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', color: 'black', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
        <form onSubmit={handleContribution} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            placeholder="Contribution amount"
            type="number"
            value={contributionAmount}
            onChange={(e) => setContributionAmount(e.target.value)}
            style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '5px', border: 'none', fontSize: '18px' }}
          />
          <button type="submit" style={{ width: '100%', padding: '12px', fontSize: '20px', borderRadius: '5px', border: 'none', background: 'black', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>
            Donate
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Spends;