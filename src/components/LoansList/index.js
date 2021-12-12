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

    return (
        <tr onClick={onListItemClick}>
            <th scope="row"><i className="fas fa-info-circle" alt={loan.id} title={loan.id}></i></th>
            <td><img src={loan.image.url} className="img-thumbnail shadow tableThumb" alt="" /></td>
            <td>{loan.name.substring(0, 10)}</td>
            <td>USD {loan.loanAmount}</td>
            <td>USD {loan.paidAmount}</td>
            <td>
                <img className="m-2 shadow" src={`https://flagcdn.com/w20/${loan.geocode.country.isoCode.toLowerCase()}.jpg`} alt={loan.name} />
                {loan.geocode.country.name}
            </td>
        </tr>
    );
};

class LoansList extends Component {

    render() {
        const { list } = this.props;
        return (
            <div id="loansList" className="container">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col" colSpan="2">Beneficiary Name</th>
                            <th scope="col">Loan Amount</th>
                            <th scope="col">Repaid</th>
                            <th scope="col">Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(loan => (
                            <LoansListItem loan={loan} key={loan.id} />
                        ))}
                    </tbody>
                </table>

                <Pagination />
            </div>
        )
    };
}

export default LoansList;