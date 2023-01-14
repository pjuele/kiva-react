import React, { Component, useEffect } from 'react';
import LoansList from '../../components/LoansList';
import { useRecoilValue } from 'recoil';
import { FiltersAtom } from '../../recoil/Filters';
import { currentPageAtom } from '../../recoil/Pagination';


class Loans extends Component {

    state = {
        loans: [],
        totalCount: 0
    };

    async componentDidMount() {
        // const currentPage = useRecoilValue(currentPageAtom);
        const { statusFilter, genderFilter, countryFilter } = useRecoilValue(FiltersAtom);

        fetch('https://api.kivaws.org/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: `{lend {loans(filters: {status: ${(statusFilter ? statusFilter : 'fundraising')}}, offset: 0, limit: 18) {totalCount values {id name description loanAmount image {url(presetSize: loan_retina)} geocode {country {isoCode name}} status gender paidAmount}}}}` }),
        })
            .then(res => res.json())
            .then(json => {
                this.setState({ loans: json.data.lend.loans.values });
                this.setState({ totalCount: json.data.totalCount });
            })
    };

    render() {
        return (
            <div>
                {this.state.totalCount} loans in total!
                <LoansList list={this.state.loans} />
                {/* onListItemClick={this.props.onListItemClick} */}
            </div>
        )
    };
};

export default Loans;

