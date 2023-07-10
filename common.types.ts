import { Session, User } from "next-auth";

export interface SessisonInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  }
}

export interface DebtInterface {
  title: string;
  description: string;
  value: string;
  date: Date;
  type: string;
  owner: string;
}

export interface RevenueInterface {
  title: string;
  description: string;
  value: string;
  date: Date;
  debtor: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  debts: {
    edges: { node: DebtInterface }[];
  };
  revenues: {
    edgers: { node: RevenueInterface }[];
  }
}
