import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedLoanAtom } from '../../recoil/Loans';
import './LoanCard.css';

const LoanCard = () => {
    const selectedLoan = useRecoilValue(selectedLoanAtom);
    if (selectedLoan) {
        const repayPercent = selectedLoan.paidAmount / selectedLoan.loanAmount * 100;
        return (
            <div className="p-3">
                <div className="card p-5 shadow-sm">
                    <img src={selectedLoan.image.url} className="card-img-top img-thumbnail p-3 shadow" alt={selectedLoan.name} />
                    <div className="card-body m-1">
                        <h5 className="card-title">
                            {selectedLoan.name} <i className="fas fa-info-circle" alt={selectedLoan.id} title={selectedLoan.id}></i>
                            &nbsp;
                            {
                                selectedLoan.gender === 'male' ?
                                    <i className="fas fa-mars" alt={selectedLoan.id} title={selectedLoan.id}></i> :
                                    <i className="fas fa-venus" alt={selectedLoan.id} title={selectedLoan.id}></i>
                            }
                        </h5>
                        <p className="card-text">{selectedLoan.description.replaceAll('<br />', ' ')}</p>
                        <p className="card-text">{selectedLoan.status}</p>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: `${repayPercent}%` }} ariaValuenow={repayPercent} ariaValuemin="0" ariaValuemax="100"></div>
                        </div>
                        <p className="card-text">USD {selectedLoan.loanAmount}</p>
                        <p className="card-text">USD {selectedLoan.paidAmount}</p>
                        <p>
                            <img className="m-2 shadow" src={`https://flagcdn.com/h20/${selectedLoan.geocode.country.isoCode.toLowerCase()}.jpg`} alt={selectedLoan.name} />
                            {selectedLoan.geocode.country.name}
                        </p>
                    </div>
                </div>
            </div >
        )
    } else {
        return (
            <div className="p-3 h-100">
                <div className="card p-3 h-100">
                    <h4>Click on a loan to see details here!</h4>
                </div>
            </div>
        )
    };
};

// All possible loan statuses, including those that are only available to privileged users (ie lender or borrower)

// defaulted
// deleted
// ended
// expired
// funded
// fundraising
// inactive
// inactiveExpired
// issue
// payingBack
// raised
// refunded
// reviewed

export default LoanCard;