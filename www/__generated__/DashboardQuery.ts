/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Filters } from "./globalTypes";

// ====================================================
// GraphQL query operation: DashboardQuery
// ====================================================

export interface DashboardQuery_mastermenu_rows {
  __typename: "MasterMenu";
  videoId: string | null;
  sourceId: string | null;
  downloadType: string | null;
  downloadSize: string | null;
  downloadTime: string | null;
  createdOn: string | null;
  updatedOn: string | null;
  startedOn: string | null;
  status: string | null;
}

export interface DashboardQuery_mastermenu {
  __typename: "Parent";
  count: number | null;
  rows: (DashboardQuery_mastermenu_rows | null)[] | null;
}

export interface DashboardQuery {
  mastermenu: DashboardQuery_mastermenu | null;
}

export interface DashboardQueryVariables {
  pageNumber?: number | null;
  filters?: Filters | null;
}
