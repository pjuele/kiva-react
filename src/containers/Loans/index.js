import React, { Component } from 'react';
import LoansList from '../../components/LoansList';
import { useRecoilValue } from 'recoil';
import { selectedLoanAtom } from '../../recoil/Pagination';

class Loans extends Component {

    state = {
        loans: []
    };

    async componentDidMount() {
        // const currentPage = useRecoilValue(currentPageAtom);

        fetch('https://api.kivaws.org/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: "{lend {loans(filters: {status: funded}, offset: 15, limit: 15) {totalCount values {id name description loanAmount image {url(presetSize: loan_retina)} geocode {country {isoCode name}} status gender paidAmount}}}}" }),
        })
            .then(res => res.json())
            .then(json => this.setState({ loans: json.data.lend.loans.values }));
    };

    onLoansInputChange = e => {
        // console.log(e);
        // console.log(e.target.value);
    };

    render() {
        return (
            <div>
                {this.state.loans.length} loans found!
                {/* <div>
                    <input type="text" onChange={this.onLoansInputChange} />
                </div> */}
                <LoansList list={this.state.loans} />
                {/* onListItemClick={this.props.onListItemClick} */}
            </div>
        )
    };
};

export default Loans;

