import AddCompanyButton from '../../components/add-company-button';
import CompanyRow from '../../components/company-row';
import CompanyTable from '../../components/company-table';
import Header from '../../components/header';
import SearchInput from '../../components/search-input';
import { Status } from '../../components/status-label';
import Toolbar from '../../components/toolbar';
import React from 'react';

export interface PageProps {}
export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={1}
            category="Products"
            company="Costco"
            status={Status.Pending}
            promotion={true}
            country={'USA'}
            joinedDate={'01.01.2025'}
          />
        </CompanyTable>
      </main>
    </>
  );
}
