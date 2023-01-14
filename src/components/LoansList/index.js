import React, { Component } from 'react';
import { useRecoilState } from 'recoil';
import { selectedLoanAtom } from '../../recoil/Loans';
import './LoansList.css';

const Pagination = (props) => (
    <span>(pagination will be here)</span>
);

function LoansListItem({ loan }) {
    const [selectedLoan, setSelectedLoan] = useRecoilState(selectedLoanAtom);
    // console.dir(selectedLoan);

    const onListItemClick = (e) => {
        setSelectedLoan(loan);
    }

    const repayPercent = loan.paidAmount / loan.loanAmount * 100;

    return (
        <div className="col-2 p-1">
            <div className="card p-1 shadow-sm" onClick={onListItemClick}>
                <img src={loan.image.url} className="card-img-top img-thumbnail p-1 shadow" alt={loan.name} />
                <div className="card-body m-2">
                    <div className="row">
                        <div className="col-3">
                            <img className="shadow" src={`https://flagcdn.com/h20/${loan.geocode.country.isoCode.toLowerCase()}.jpg`} alt={loan.geocode.country.name} title={loan.geocode.country.name} />
                            <br />
                            {
                                loan.gender === 'male' ?
                                    <i className="fas fa-mars" alt={loan.id} title={loan.id}></i> :
                                    <i className="fas fa-venus" alt={loan.id} title={loan.id}></i>
                            }
                        </div>
                        <div className="col-9">
                            <p className="card-title">
                                {loan.name}
                            </p>
                            <p>
                                {/* <p className="card-text">{loan.description.replaceAll('<br />', ' ')}</p> */}
                                <p className="card-text">{loan.status}</p>
                                <p className="card-text">USD {loan.loanAmount}</p>
                            </p>
                        </div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: `${repayPercent}%` }} ariaValuenow={repayPercent} ariaValuemin="0" ariaValuemax="100"></div>
                    </div>
                </div>
            </div>
        </div >
    );
};

class LoansList extends Component {

    render() {
        const { list } = this.props;
        return (
            <div id="loansList" className="container">

                <div className="row mt-5">
                    {list.map(loan => (
                        <LoansListItem loan={loan} key={loan.id} />
                    ))}
                </div>

                <Pagination />
            </div>
        )
    };
}

export default LoansList;